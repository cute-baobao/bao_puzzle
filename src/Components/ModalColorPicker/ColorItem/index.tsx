import { CSSProperties } from 'react';
import cn from './coloritem.module.scss';
import { useColorPickerContext } from '../ColorPickerProvider';

interface ColorItemProps {
	style: CSSProperties;
	color: string;
}
const ColorItem = (props: ColorItemProps) => {
	const { style, color } = props;
	const { onColorItemClick } = useColorPickerContext();
	return (
		<div
			onClick={() => onColorItemClick?.(color)}
			className={cn.color_item}
			style={style}
		></div>
	);
};

export default ColorItem;
