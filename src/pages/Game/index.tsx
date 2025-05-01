import { Button, message } from 'antd';
import GameComponent from '../../Components/GameComponent';
import useGameStore, { compareColors } from '../../store/gameStore';
import style from './index.module.scss';
import { useEffect } from 'react';
import { Level, color } from '../../store/level';
/**
 * @param colors 一个包括四个颜色的一维数组
 * @description 判断这个数组是否由四个不同的颜色组成
 */
const isAllowed = (colors: string[]) => {
	const set = new Set(colors);
	return set.size === 4;
};

const generateRandomColors = (): color[] => {
	const allColors: color[] = [
		'red',
		'green',
		'orange',
		'purple',
		'blue',
		'cyan',
		'yellow',
	];
	const shuffledColors = allColors.sort(() => Math.random() - 0.5); // 随机打乱颜色数组
	return shuffledColors.slice(0, 4); // 取前四个颜色
};

const Game = () => {
	console.log('ren');
	const { getColors, answer, nextRound, addInfo, loaddingLevel } =
		useGameStore();
	useEffect(() => {
		const level: Level = { colors: [], answer: generateRandomColors() };
		loaddingLevel(level);
	}, []);
	useEffect(() => {
		const unsubscribe = useGameStore.subscribe(
			(state) => state.round,
			(newRound) => {
				console.log(newRound);
				if (newRound === 7) {
					message.error(
						`七次机会用完了，答案是${useGameStore.getState().answer}`
					);
				}
			}
		);
		// 清理订阅
		return () => unsubscribe();
	}, []);
	const submit = () => {
		const colors = getColors();
		const bool = isAllowed(colors);
		if (colors.includes('null')) {
			message.warning('有位置没有选择颜色哦！');
			return;
		}
		if (bool) {
			const res = compareColors(getColors(), answer);
			addInfo(res);
			// 判断是否全都答对了
			if (res[1] === 4) message.success('恭喜你，挑战成功!');
			else nextRound();
		} else {
			message.error('不能选择相同的颜色');
		}
	};
	return (
		<div className={style.game_container}>
			{Array.from({ length: 7 }).map((_, rowIndex) => (
				<GameComponent rowIndex={rowIndex} key={`gameComponent_${rowIndex}`} />
			))}
			<Button type="primary" onClick={submit}>
				提交
			</Button>
		</div>
	);
};

export default Game;
