import { RouterProvider } from 'react-router';
import router from './router';
import style from './app.module.scss';
import GameRulesModal from './Components/GameRulesModal';
import useRulesModal from './store/rulesModalStore';
const App = () => {
	const visible = useRulesModal((state) => state.visible);
	const onClose = useRulesModal((state) => state.onClose);
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<RouterProvider router={router} />
				<GameRulesModal visible={visible} onClose={onClose} />
			</div>
		</div>
	);
};

export default App;
