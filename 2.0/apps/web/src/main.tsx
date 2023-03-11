import { createRoot } from 'react-dom/client';
import 'tw-config/tw.css';
import '@total-typescript/ts-reset';
import App from './App';
import { initI18n } from '@/i18n';
initI18n();
createRoot(document.getElementById('root') as HTMLElement).render(<App />);
