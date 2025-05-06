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
	const fisherYatesShuffle = (array: color[]): color[] => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};
	const shuffledColors = fisherYatesShuffle(allColors); // 使用 Fisher-Yates 算法打乱颜色数组
	return shuffledColors.slice(0, 4); // 取前四个颜色
};

export { generateRandomColors };
