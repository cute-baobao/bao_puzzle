import { useEffect } from 'react';
import useLevelStore from '../../store/levelStore';
import useGameStore, { compareColors } from '../../store/gameStore';
import level from '../../store/level';

import { Icon } from '@iconify/react';
import { Button, message } from 'antd';
import GameComponent from '../../Components/GameComponent';
import style from './index.module.scss';
import useRulesModal from '../../store/rulesModalStore';
import { useNavigate } from 'react-router';
/**
 * @param colors 一个包括四个颜色的一维数组
 * @description 判断这个数组是否由四个不同的颜色组成
 */
const isAllowed = (colors: string[]) => {
	const set = new Set(colors);
	return set.size === 4;
};

const Game = () => {
	const nav = useNavigate();
	const curRound = useLevelStore((state) => state.round);
	const nextLevel = useLevelStore((state) => state.nextLevel);
	const preLevel = useLevelStore((state) => state.preLevel);
	const onOpen = useRulesModal((state) => state.onOpen);
	const { getColors, answer, nextRound, addInfo, loaddingLevel } =
		useGameStore();

	useEffect(() => {
		loaddingLevel(level[curRound]);
	}, [curRound, loaddingLevel]);

	useEffect(() => {
		const unsubscribe = useGameStore.subscribe(
			(state) => state.round,
			(newRound) => {
				console.log(newRound);
				if (newRound === 7) {
					message.error(`七次机会用完了，点击下方按钮刷新再尝试一次吧！`);
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
			if (res[1] === 4) {
				if (curRound !== 4) {
					message.success('🎉恭喜你，回答正确!');
					message.success('点击下方按钮挑战下一关吧！');
				} else {
					message.success('🎉恭喜你，挑战成功!');
				}
			} else nextRound();
		} else {
			message.error('不能选择相同的颜色');
		}
	};

	const reload = () => {
		loaddingLevel(level[curRound]);
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
					<span>
						<Icon
							className={style.icon}
							onClick={preLevel}
							icon="material-symbols-light:skip-previous-outline-rounded"
							width="24"
							height="24"
						/>
					</span>
					<span>第{curRound + 1}关</span>
					<span>
						<Icon
							onClick={nextLevel}
							className={style.icon}
							icon="material-symbols-light:skip-next-outline-rounded"
							width="24"
							height="24"
						/>
					</span>
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

export default Game;
