import { memo } from 'react';
import GameItem from '../GameItem';
import style from './index.module.scss';
import useGameStore from '../../store/gameStore';
import Info from '../Info';

interface GameComponentProps {
	rowIndex: number;
}

const GameComponent = memo((props: GameComponentProps) => {
	const { rowIndex } = props;
	const row = useGameStore((state) => state.colors[rowIndex]);
	const round = useGameStore((state) => state.round);
	return (
		<div
			className={`${style.game_component_grid} ${
				round === rowIndex ? style.game_component_focus : ''
			}`}
		>
			{row.map((_, colIndex) => {
				return (
					<GameItem
						row={rowIndex}
						col={colIndex}
						key={`game_item_${rowIndex}_${colIndex}`}
					/>
				);
			})}
			<Info rowIndex={rowIndex} />
		</div>
	);
});

export default GameComponent;
