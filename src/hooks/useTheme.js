import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Read from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    console.log('passando no effect');
    if (savedTheme) {
        console.log('tema salvo -->> ', savedTheme);
        setTheme(savedTheme);
    } else {
        console.log('tema nao salvo');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      console.log('system prefer: --> ', systemPrefersDark);
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Apply theme to html element
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Persist to localStorage
    localStorage.setItem('theme', theme);
    console.log('guardando -->> ', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
}
