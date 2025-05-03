export type color =
	| 'red'
	| 'green'
	| 'orange'
	| 'purple'
	| 'blue'
	| 'cyan'
	| 'yellow';
export interface Level {
	answer: color[];
	colors: color[][];
}

const level: Level[] = [
	{
		answer: ['green', 'orange', 'blue', 'purple'],
		colors: [['purple', 'blue', 'orange', 'green']],
	},
	{
		answer: ['cyan', 'blue', 'yellow', 'green'],
		colors: [['red', 'green', 'purple', 'orange']],
	},
	{
		answer: ['yellow', 'orange', 'blue', 'red'],
		colors: [
			['red', 'purple', 'yellow', 'orange'],
			['orange', 'green', 'purple', 'red'],
		],
	},
	{
		answer: ['purple', 'yellow', 'green', 'blue'],
		colors: [
			['purple', 'orange', 'cyan', 'red'],
			['yellow', 'orange', 'green', 'blue'],
			['yellow', 'blue', 'green', 'red'],
			['yellow', 'green', 'cyan', 'blue'],
		],
	},
	{
		answer: ['yellow', 'purple', 'orange', 'blue'],
		colors: [
			['green', 'yellow', 'red', 'purple'],
			['purple', 'blue', 'cyan', 'green'],
			['cyan', 'green', 'yellow', 'orange'],
			['red', 'cyan', 'blue', 'yellow'],
			['orange', 'red', 'green', 'blue'],
		],
	},
];

export default level;
