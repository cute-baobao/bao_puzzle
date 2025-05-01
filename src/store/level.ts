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
		answer: ['red', 'cyan', 'blue', 'yellow'],
		colors: [],
	},
];

export default level;
