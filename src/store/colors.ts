import { CSSProperties } from 'react';

const colors: Map<string, CSSProperties> = new Map([
	[
		'red',
		{
			background: `#ef4444`,
		},
	],
	[
		'orange',
		{
			background: `#f97316`,
		},
	],
	[
		'yellow',
		{
			background: `#eab308`,
		},
	],
	[
		'green',
		{
			background: `#22c55e`,
		},
	],
	[
		'blue',
		{
			background: `oklch(74.6% 0.16 232.661)`,
		},
	],
	[
		'cyan',
		{
			background: `oklch(86.5% 0.127 207.078)`,
		},
	],
	[
		'purple',
		{
			background: `oklch(60.6% 0.25 292.717)`,
		},
	],
]);

export default colors;
