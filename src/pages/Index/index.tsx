import style from './index.module.scss';
const Index = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			{Array.from({ length: 6 }).map(() => (
				<div className={style.box}></div>
			))}
		</div>
	);
};

export default Index;
