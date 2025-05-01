import { useMemo, useState } from 'react';
import style from './index.module.scss';
import ModalColorPicker from '../ModalColorPicker';
import ColorPickerProvider from '../ModalColorPicker/ColorPickerProvider';
import colors from '../../store/colors';
import useGameStore from '../../store/gameStore';

interface GameItemProps {
	row: number;
	col: number;
}

const GameItem = (props: GameItemProps) => {
	console.log('render');
	const { row, col } = props;
	const setColor = useGameStore((state) => state.setColor);
	const round = useGameStore((state) => state.round);
	const curColor = useGameStore((state) => state.colors[row][col]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const bgColor = useMemo(() => {
		return colors.get(curColor) || { backgroundColor: 'black' };
	}, [curColor]);

	const canClick = useMemo(() => {
		return round == row;
	}, [round, row]);

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const clickHandle = () => {
		if (canClick) setIsModalOpen(true);
	};

	const onColorItemClick = (color: string) => {
		setColor(row, col, color);
		setIsModalOpen(false);
	};

	return (
		<ColorPickerProvider onColorItemClick={onColorItemClick}>
			<div
				className={style.game_item_container}
				style={{ ...bgColor, cursor: canClick ? 'pointer' : 'not-allowed' }}
				onClick={clickHandle}
			></div>
			<ModalColorPicker open={isModalOpen} onCancel={handleCancel} />
		</ColorPickerProvider>
	);
};
export default GameItem;
