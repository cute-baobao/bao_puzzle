import { createHashRouter } from 'react-router';
import Index from '../pages/Index';

const router = createHashRouter([
	{
		path: '/',
		Component: Index,
	},
	{
		path: '/about',
		lazy: async () => {
			const Component = await import('../pages/About'); // 异步导入组件
			return {
				Component: Component.default,
			};
		},
	},
	{
		path: '/game',
		lazy: async () => {
			const Component = await import('../pages/Game'); // 异步导入组件
			return {
				Component: Component.default,
			};
		},
	},
]);

export default router;
