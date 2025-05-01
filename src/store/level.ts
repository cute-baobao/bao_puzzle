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
		colors: [['blue', 'green', 'purple', 'orange']],
	},
];

export default level;
