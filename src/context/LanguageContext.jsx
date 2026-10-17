import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('jk_language');
      return saved === 'ta' ? 'ta' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('jk_language', language);
    } catch {
      // ignore
    }
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'ta') {
      setLanguageState(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguageState(prev => (prev === 'en' ? 'ta' : 'en'));
  };

  /**
   * Helper function to retrieve nested translated keys.
   * Example: t('nav.home') or t('home.whyPanchuTitle')
   */
  const t = (path, fallback = '') => {
    if (!path) return fallback;
    const parts = path.split('.');
    
    // Check in current language dictionary
    let current = translations[language];
    for (const part of parts) {
      if (current && current[part] !== undefined) {
        current = current[part];
      } else {
        current = undefined;
        break;
      }
    }

    if (current !== undefined && typeof current === 'string') {
      return current;
    }

    // Fallback to English dictionary if not found in current language
    if (language !== 'en') {
      let enCurrent = translations.en;
      for (const part of parts) {
        if (enCurrent && enCurrent[part] !== undefined) {
          enCurrent = enCurrent[part];
        } else {
          enCurrent = undefined;
          break;
        }
      }
      if (enCurrent !== undefined && typeof enCurrent === 'string') {
        return enCurrent;
      }
    }

    return fallback || path;
  };

  const isTamil = language === 'ta';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isTamil }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
