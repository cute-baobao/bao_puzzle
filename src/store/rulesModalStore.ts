import { create, StateCreator } from 'zustand';

interface RulesModalState {
	visible: boolean;
}

interface RulesModalAction {
	onOpen: () => void;
	onClose: () => void;
}

const creator: StateCreator<RulesModalState & RulesModalAction> = (set) => ({
	visible: false,
	onOpen: () => {
		set({ visible: true });
	},
	onClose: () => {
		set({ visible: false });
	},
});

const useRulesModal = create<RulesModalState & RulesModalAction>()(creator);

export default useRulesModal;
