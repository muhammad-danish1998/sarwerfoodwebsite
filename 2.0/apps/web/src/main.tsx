import { createRoot } from 'react-dom/client';
import 'tw-config/tw.css';
import '@total-typescript/ts-reset';
import App from './App';
import { initI18n } from '@/i18n';
import { Provider } from 'react-redux';
import { STORE } from '@/redux/store';
initI18n();
createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={STORE}>
		<App />
	</Provider>
);
