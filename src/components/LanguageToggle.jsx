import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded-md ${
          i18n.language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        🇬🇧 EN
      </button>
      <button
        onClick={() => changeLanguage('ja')}
        className={`px-3 py-1 rounded-md ${
          i18n.language === 'ja' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
      >
        🇯🇵 JP
      </button>
    </div>
  );
};

export default LanguageToggle;