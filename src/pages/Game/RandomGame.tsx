import { useCallback, useEffect } from 'react';
import useGameStore, { compareColors } from '../../store/gameStore';
import { Level } from '../../store/level';

import { Icon } from '@iconify/react';
import { Button, message } from 'antd';
import GameComponent from '../../Components/GameComponent';
import style from './index.module.scss';
import useRulesModal from '../../store/rulesModalStore';
import { generateRandomColors } from '../../utils/gameUtils';
import { useNavigate } from 'react-router';
/**
 * @param colors 一个包括四个颜色的一维数组
 * @description 判断这个数组是否由四个不同的颜色组成
 */
const isAllowed = (colors: string[]) => {
	const set = new Set(colors);
	return set.size === 4;
};

const RandomGame = () => {
	const nav = useNavigate();
	const onOpen = useRulesModal((state) => state.onOpen);
	const { getColors, answer, nextRound, addInfo } = useGameStore();
	const loaddingLevel = useGameStore((state) => state.loaddingLevel);

	const reload = useCallback(() => {
		const level: Level = { colors: [], answer: generateRandomColors() };
		loaddingLevel(level);
	}, [loaddingLevel]);

	useEffect(() => {
		reload();
	}, [reload]);

	useEffect(() => {
		const unsubscribe = useGameStore.subscribe(
			(state) => state.round,
			(newRound) => {
				console.log(newRound);
				if (newRound === 7) {
					message.error(`七次机会用完了，答案是${answer}`);
				}
			}
		);
		// 清理订阅
		return () => unsubscribe();
	}, [answer]);

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
			if (res[1] === 4) {
				message.success('🎉恭喜你，回答正确!');
				setTimeout(() => {
					reload();
				}, 1000);
			} else nextRound();
		} else {
			message.error('不能选择相同的颜色');
		}
	};

	const backHome = () => {
		nav('/');
	};

	return (
		<div className={style.game}>
			<div className={style.game_container}>
				{Array.from({ length: 7 }).map((_, rowIndex) => (
					<GameComponent
						rowIndex={rowIndex}
						key={`gameComponent_${rowIndex}`}
					/>
				))}
			</div>
			<div className={style.game_footer}>
				<div className={style.game_info}>
					<span>随机挑战</span>
					<span>
						<Icon
							onClick={onOpen}
							className={style.icon}
							icon="material-symbols-light:help-outline-rounded"
							width="24"
							height="24"
						/>
					</span>
					<span>
						<Icon
							onClick={reload}
							className={style.icon}
							icon="material-symbols-light:frame-reload-sharp"
							width="24"
							height="24"
						/>
					</span>
					<span>
						<Icon
							onClick={backHome}
							className={style.icon}
							icon="material-symbols-light:home"
							width="24"
							height="24"
						/>
					</span>
				</div>
				<Button type="primary" onClick={submit}>
					提交
				</Button>
			</div>
		</div>
	);
};

export default RandomGame;
