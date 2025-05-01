import { createRoot } from 'react-dom/client';
import './index.module.scss';
import App from './App.tsx';
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById('root')!).render(<App />);
