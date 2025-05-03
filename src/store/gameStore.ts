import { create, StateCreator } from 'zustand';
import type { Level } from './level';
import { subscribeWithSelector } from 'zustand/middleware';

interface GameStoreState {
	round: number;
	colors: string[][];
	answer: string[];
	infos: Array<number[]>;
}

interface GameStoreAction {
	setColor: (row: number, col: number, color: string) => void; // 更新指定单元格的颜色
	getColors: () => string[];
	nextRound: () => void;
	addInfo: (info: number[]) => void;
	loaddingLevel: (level: Level) => void;
}

const creator: StateCreator<GameStoreState & GameStoreAction> = (set, get) => ({
	round: 0,
	colors: Array.from({ length: 7 }, () => Array(4).fill('null')),
	answer: ['green', 'orange', 'blue', 'purple'],
	infos: Array.from({ length: 7 }, () => []),
	setColor: (row, col, color) => {
		set((state) => {
			const newColors = state.colors.map((rowColors, rowIndex) =>
				rowIndex === row
					? rowColors.map((colColor, colIndex) =>
							colIndex === col ? color : colColor
					  )
					: rowColors
			);
			return { colors: newColors };
		});
	},
	getColors: () => {
		const { colors, round } = get();
		return colors[round];
	},
	nextRound: () => {
		set((state) => {
			return { round: state.round + 1 };
		});
	},
	addInfo: (info: number[]) => {
		set((state) => {
			const infos = state.infos.map((val, index) => {
				if (index === state.round) return info;
				else return val;
			});
			return { infos };
		});
	},
	loaddingLevel: (level) => {
		const infos: number[][] = level.colors.map((item) => {
			return compareColors(item, level.answer);
		});
		const round = level.colors.length;
		set(() => {
			return {
				infos: [
					...infos,
					...Array.from({ length: 7 - infos.length }, () => []),
				],
				round: round,
				colors: [
					...level.colors,
					...Array.from({ length: 7 - level.colors.length }, () =>
						Array(4).fill('null')
					),
				],
				answer: level.answer,
			};
		});
	},
});

const useGameStore = create<GameStoreState & GameStoreAction>()(
	subscribeWithSelector(creator)
);
/**
 * 比较用户输入的颜色和答案
 * @param inputColors 用户输入的颜色数组
 * @param answer 正确答案的颜色数组
 * @returns [正确颜色的数量, 正确颜色和位置的数量]
 */
const compareColors = (
	inputColors: string[],
	answer: string[]
): [number, number] => {
	let correctPosition = 0; // 颜色和位置都正确的数量
	let correctColor = 0; // 颜色正确但位置不正确的数量

	// 第一步：找出颜色和位置都正确的数量
	for (let i = 0; i < inputColors.length; i++) {
		if (inputColors[i] === answer[i]) {
			correctPosition++;
			// 将匹配的元素标记为已处理
		}
	}

	// 第二步：找出颜色正确但位置不正确的数量
	for (let i = 0; i < inputColors.length; i++) {
		if (inputColors[i] !== null) {
			const index = answer.indexOf(inputColors[i]);
			if (index !== -1) {
				correctColor++;
			}
		}
	}

	return [correctColor, correctPosition];
};

export { compareColors };

export default useGameStore;
