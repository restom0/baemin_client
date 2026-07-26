'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { dictionary, Locale } from './i18n';

type Theme = 'light' | 'dark';

type AppPreferences = {
  language: Locale;
  setLanguage: (language: Locale) => void;
  setTheme: (theme: Theme) => void;
  theme: Theme;
  t: typeof dictionary.vi;
};

const PreferencesContext = createContext<AppPreferences | null>(null);

function getStoredLanguage(): Locale {
  if (typeof window === 'undefined') {
    return 'vi';
  }

  const savedLanguage = window.localStorage.getItem(
    'baemin-language',
  ) as Locale;

  return savedLanguage && dictionary[savedLanguage] ? savedLanguage : 'vi';
}

function getStoredTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const savedTheme = window.localStorage.getItem('baemin-theme') as Theme;

  return savedTheme === 'light' || savedTheme === 'dark'
    ? savedTheme
    : 'light';
}

export function AppPreferencesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Locale>(getStoredLanguage);
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('baemin-language', language);
    window.localStorage.setItem('baemin-theme', theme);
  }, [language, theme]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      setTheme,
      theme,
      t: dictionary[language],
    }),
    [language, theme],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function useAppPreferences() {
  const preferences = useContext(PreferencesContext);
  if (!preferences) {
    throw new Error('useAppPreferences must be used inside AppPreferencesProvider');
  }

  return preferences;
}
