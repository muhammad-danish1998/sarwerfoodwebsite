import { createRoot } from 'react-dom/client';
import 'tw-config/tw.css';
import '@total-typescript/ts-reset';
import App from './App';
import { initI18n } from '@/i18n';
import { Provider } from 'react-redux';
import { PERSISTOR, STORE } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Spinner } from 'ui';
initI18n();
createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={STORE}>
		<PersistGate loading={<Spinner />} persistor={PERSISTOR}>
			<App />
		</PersistGate>
	</Provider>
);
