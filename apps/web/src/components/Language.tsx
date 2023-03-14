import React from 'react';
import { useTranslation } from 'react-i18next';

const Language = () => {
  const { i18n } = useTranslation();

  return (
    <div className="h-11 w-11 overflow-hidden rounded-full border-2  cursor-pointer">
      {i18n.language == 'en' ? (
        <img className="w-full" src="/png/uk-circle.png " onClick={() => i18n.changeLanguage('de')} />
      ) : (
        <img className="w-full" src="/png/germany.jpeg" onClick={() => i18n.changeLanguage('en')} />
      )}
    </div>
  );
};

export default Language;
