import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Always default strictly to 'light' mode unless explicitly set to 'dark' by user
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_theme') || localStorage.getItem('portfolio_user_theme');
      return saved === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (theme === 'dark') {
      root.classList.add('dark');
      if (body) body.classList.add('dark');
      try {
        localStorage.setItem('portfolio_theme', 'dark');
        localStorage.setItem('portfolio_user_theme', 'dark');
      } catch {}
    } else {
      root.classList.remove('dark');
      if (body) body.classList.remove('dark');
      try {
        localStorage.setItem('portfolio_theme', 'light');
        localStorage.setItem('portfolio_user_theme', 'light');
      } catch {}
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
