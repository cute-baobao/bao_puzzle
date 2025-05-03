import { create, StateCreator } from 'zustand';
import level from './level';
import { message } from 'antd';
import { persist } from 'zustand/middleware';

interface LevelStoreState {
	round: number;
}

interface LevelStoreAction {
	nextLevel: () => void;
	preLevel: () => void;
}

const creator: StateCreator<LevelStoreState & LevelStoreAction> = (
	set,
	get
) => ({
	round: 0,
	nextLevel: () => {
		const curRound = get().round;
		if (curRound < level.length - 1) set({ round: curRound + 1 });
		else {
			message.error('已经是最后一关了！');
		}
	},
	preLevel: () => {
		const curRound = get().round;
		if (curRound > 0) set({ round: curRound - 1 });
		else {
			message.error('这是第一关');
		}
	},
});

const useLevelStore = create<LevelStoreState & LevelStoreAction>()(
	persist(creator, { name: 'levelRound' })
);

export default useLevelStore;
