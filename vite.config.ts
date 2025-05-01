import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import postCssPxToRem from 'postcss-pxtorem';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './',
	css: {
		postcss: {
			plugins: [
				postCssPxToRem({
					rootValue: 16, // 1rem的大小
					unitPrecision: 3, //精度
					selectorBlackList: ['ignore'], // 黑名单
					propList: ['*'], // 要转化的熟悉
					replace: true, // 直接替换？
					mediaQuery: false, // 是否转化媒体查询
					minPixelValue: 0, // 最小的单位
					exclude: /node_modules/i, // 排除那些文件夹
				}),
			],
		},
	},
});
