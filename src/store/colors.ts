import { CSSProperties } from 'react';

const colors: Map<string, CSSProperties> = new Map([
	[
		'red',
		{
			background: `radial-gradient(
    circle,
    rgba(255, 0, 0, 1) 0%,           /* 中心红色 */
    rgba(255, 0, 0, 0.8) 30%,        /* 30%处稍微变暗 */
    rgba(255, 0, 0, 0.5) 50%,        /* 50%处更暗 */
    rgba(255, 0, 0, 0.2) 70%,        /* 70%处更暗 */
    rgba(0, 0, 0, 0.8) 100%          /* 四周完全变暗 */
  )`,
		},
	],
	[
		'orange',
		{
			background: `radial-gradient(
    circle,
    rgba(255, 165, 0, 1) 0%,         /* 中心橙色 */
    rgba(255, 165, 0, 0.8) 30%,      /* 30%处稍微变暗 */
    rgba(255, 165, 0, 0.5) 50%,      /* 50%处更暗 */
    rgba(255, 165, 0, 0.2) 70%,      /* 70%处更暗 */
    rgba(0, 0, 0, 0.8) 100%          /* 四周完全变暗 */
  )`,
		},
	],
	[
		'yellow',
		{
			background: `radial-gradient(
    circle,
    rgba(255, 255, 0, 1) 0%,         /* 中心黄色 */
    rgba(255, 255, 0, 0.8) 30%,      /* 30%处稍微变暗 */
    rgba(255, 255, 0, 0.5) 50%,      /* 50%处更暗 */
    rgba(255, 255, 0, 0.2) 70%,      /* 70%处更暗 */
    rgba(0, 0, 0, 0.8) 100%          /* 四周完全变暗 */
  )`,
		},
	],
	[
		'green',
		{
			background: `radial-gradient(
    circle,
    rgba(0, 128, 0, 1) 0%,           /* 中心绿色 */
    rgba(0, 128, 0, 0.8) 30%,        /* 30%处稍微变暗 */
    rgba(0, 128, 0, 0.5) 50%,        /* 50%处更暗 */
    rgba(0, 128, 0, 0.2) 70%,        /* 70%处更暗 */
    rgba(0, 0, 0, 0.8) 100%          /* 四周完全变暗 */
  )`,
		},
	],
	[
		'cyan',
		{
			background: `radial-gradient(
    circle,
    rgba(0, 255, 255, 1) 0%,         /* 中心青色 */
    rgba(0, 255, 255, 0.8) 30%,      /* 30%处稍微变暗 */
    rgba(0, 255, 255, 0.5) 50%,      /* 50%处更暗 */
    rgba(0, 255, 255, 0.2) 70%,      /* 70%处更暗 */
    rgba(0, 0, 0, 0.8) 100%          /* 四周完全变暗 */
  )`,
		},
	],
	[
		'blue',
		{
			background: `radial-gradient(
    circle,
    rgba(0, 0, 255, 1) 0%,           /* 中心蓝色 */
    rgba(0, 0, 255, 0.8) 30%,        /* 30%处稍微变暗 */
    rgba(0, 0, 255, 0.5) 50%,        /* 50%处更暗 */
    rgba(0, 0, 255, 0.2) 70%,        /* 70%处更暗 */
    rgba(0, 0, 0, 0.8) 100%          /* 四周完全变暗 */
  )`,
		},
	],
	[
		'purple',
		{
			background: ` radial-gradient(
    circle,
    rgba(128, 0, 128, 1) 0%,         /* 中心紫色 */
    rgba(128, 0, 128, 0.8) 30%,      /* 30%处稍微变暗 */
    rgba(128, 0, 128, 0.5) 50%,      /* 50%处更暗 */
    rgba(128, 0, 128, 0.2) 70%,      /* 70%处更暗 */
    rgba(0, 0, 0, 0.8) 100%          /* 四周完全变暗 */
  )`,
		},
	],
]);

export default colors;
