import { Modal } from 'antd';
import colors from '../../store/colors';
import ColorItem from './ColorItem';
import cn from './modalColorPicker.module.scss';

interface ModalColorPickerProps {
	open: boolean;
	onCancel: () => void;
}

const ModalColorPicker = (props: ModalColorPickerProps) => {
	const { open, onCancel } = props;
	return (
		<Modal title="选择颜色" open={open} footer={null} onCancel={onCancel}>
			<div className={cn.color_item_list}>
				{[...colors].map((item) => (
					<ColorItem
						color={item[0]}
						style={item[1]}
						key={`colorItem_${Math.random()}}`}
					/>
				))}
			</div>
		</Modal>
	);
};

export default ModalColorPicker;
