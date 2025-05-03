import { Button, Modal } from 'antd';
import styles from './gameRuleModal.module.scss';

interface GameRulesModalProps {
	visible: boolean;
	onClose: () => void;
}

const GameRulesModal = ({ visible, onClose }: GameRulesModalProps) => {
	return (
		<Modal
			title="游戏规则"
			open={visible}
			onCancel={onClose}
			footer={[
				<Button key="close" type="primary" size="large" onClick={onClose}>
					我明白了
				</Button>,
			]}
			width={600}
			className={styles.rulesModal}
		>
			<div className={styles.rulesContent}>
				<p>欢迎来到超级密码机游戏！</p>

				<p>游戏规则：</p>
				<ol>
					<li>系统会随机生成一组由不同颜色组成的密码</li>
					<li>你需要通过猜测颜色的组合来破解这个密码</li>
					<li>每次提交答案后，系统会给出对错反馈：</li>
					<ul>
						<li>
							<span className={styles.greenDot}></span> <strong>绿点</strong>
							：表示颜色和位置都正确
						</li>
						<li>
							<span className={styles.whiteDot}></span> <strong>白点</strong>
							：表示颜色正确但位置错误
						</li>
						<li>
							<span className={styles.blackDot}></span> <strong>黑点</strong>
							：表示颜色和位置都错误
						</li>
					</ul>
					<li>根据反馈信息继续推理，直到完全猜对所有颜色和位置</li>
					<li>通过不断尝试，提升你的推理技巧和逻辑思维能力</li>
				</ol>

				<div className={styles.example}>
					<strong>提示：</strong>{' '}
					游戏只会显示本轮猜测的对错数量，不会显示对错位置。你需要通过多次尝试和推理来确定正确答案。
				</div>
			</div>
		</Modal>
	);
};

export default GameRulesModal;
