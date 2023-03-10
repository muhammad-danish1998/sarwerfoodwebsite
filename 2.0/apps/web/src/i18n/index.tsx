import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import * as resources from './resources';
export const initI18n = () => {
	i18n.use(LanguageDetector).use(initReactI18next).init({
		debug: false,
		resources,
		fallbackLng: 'en',
	});
};
