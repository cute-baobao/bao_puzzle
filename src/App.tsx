import { RouterProvider } from 'react-router';
import router from './router';
import style from './app.module.scss';
const App = () => {
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<RouterProvider router={router} />
			</div>
		</div>
	);
};

export default App;
