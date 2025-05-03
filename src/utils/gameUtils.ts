import { color } from '../store/level';

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

export { generateRandomColors };
