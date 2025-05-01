import { CSSProperties, memo, useMemo } from 'react';
import useGameStore from '../../store/gameStore';
import style from './infoitem.module.scss';

interface ItemProps {
	color: CSSProperties;
}
const Item = ({ color }: ItemProps) => {
	return <div style={color} className={style.info_item}></div>;
};

interface InfoProp {
	rowIndex: number;
}
const Info = memo(({ rowIndex }: InfoProp) => {
	const info = useGameStore((state) => state.infos[rowIndex]);
	console.log(info);
	const infoItemColors = useMemo<CSSProperties[]>(() => {
		if (info.length === 0) return [];
		const green = info[1];
		const white = info[0] - info[1];
		const black = 4 - green - white;
		console.log(green, white, black);

		// 创建颜色数组
		const colors: CSSProperties[] = [];
		colors.push(
			...Array<CSSProperties>(green).fill({ backgroundColor: 'green' })
		); // 添加 green 的数量
		colors.push(
			...Array<CSSProperties>(white).fill({ backgroundColor: 'white' })
		); // 添加 white 的数量
		colors.push(
			...Array<CSSProperties>(black).fill({ backgroundColor: 'black' })
		); // 添加 black 的数量

		return colors;
	}, [info]);
	return (
		<div className={style.info_container}>
			<div className={style.info_list}>
				{info.length !== 0 &&
					infoItemColors.map((color, index) => (
						<Item color={color} key={`infoItem_${index}`} />
					))}
			</div>
		</div>
	);
});

export default Info;
