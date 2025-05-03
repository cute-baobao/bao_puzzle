import { Button } from 'antd';
import styles from './index.module.scss';
import { useNavigate } from 'react-router';
import useRulesModal from '../../store/rulesModalStore';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function HomePage() {
	const navigate = useNavigate();

	const onOpen = useRulesModal((state) => state.onOpen);
	const startGame = () => {
		// 这里添加开始游戏的逻辑
		navigate('/game');
		console.log('开始游戏');
	};

	const startRandomGame = () => {
		// 这里添加开始游戏的逻辑
		navigate('/random-game');
		console.log('开始游戏');
	};

	return (
		<div className={styles.homeContainer}>
			<a href="https://github.com/cute-baobao/bao_puzzle">
				<Icon
					icon="openmoji:github"
					width={24}
					height={24}
					className={styles.icon}
				/>
			</a>
			<div className={styles.gameContent}>
				<div className={styles.gameTitle}>
					<h1>超级密码机</h1>
					<p>猜数字的挑战</p>
				</div>

				<div className={styles.buttonContainer}>
					<Button
						type="primary"
						size="large"
						className={styles.startButton}
						onClick={startGame}
					>
						闯关模式
					</Button>

					<Button
						type="primary"
						size="large"
						className={styles.startButton}
						onClick={startRandomGame}
					>
						随机挑战
					</Button>

					<Button size="large" className={styles.rulesButton} onClick={onOpen}>
						规则说明
					</Button>
				</div>

				<div className={styles.decoration}>
					<div className={`${styles.colorBubble} ${styles.redBubble}`}></div>
					<div className={`${styles.colorBubble} ${styles.orangeBubble}`}></div>
					<div className={`${styles.colorBubble} ${styles.yellowBubble}`}></div>
					<div className={`${styles.colorBubble} ${styles.greenBubble}`}></div>
					<div className={`${styles.colorBubble} ${styles.blueBubble}`}></div>
					<div className={`${styles.colorBubble} ${styles.cyanBubble}`}></div>
					<div className={`${styles.colorBubble} ${styles.purpleBubble}`}></div>
				</div>
			</div>
		</div>
	);
}
