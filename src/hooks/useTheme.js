// src/hooks/useTheme.js

import { useState, useEffect } from 'react';

const useTheme = () => {
  // Inicializa o estado lendo do localStorage, ou usa 'light' como padrão
  const [theme, setTheme] = useState(
    localStorage.getItem('appTheme') || 'light'
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    // 1. Salva a preferência do usuário no localStorage
    localStorage.setItem('appTheme', theme);

    // 2. Aplica a classe CSS 'dark-mode' ou a remove do <body>
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  return [theme, toggleTheme];
};

export default useTheme;