import React, { createContext, useContext, useState, useEffect } from 'react';
import { Button } from '../pages/Button';
// --- 1. Context 逻辑部分 ---
const ThemeContext = createContext();

export function ThemeProvider ({ children }) {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 自定义 Hook 方便外部调用
export const useTheme = () => useContext(ThemeContext);


// --- 2. 组件部分 (ThemeToggle) ---
// 注意：这里用 export 导出，这样你在 Navbar 等地方就能 import 它

export function ThemeToggles() {
  // 只需要拿到 isDark (显示图标) 和 toggleTheme (点击动作)
  const { isDark, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      // 这里的 className 建议只负责样式
      className={`theme-toggle ${isDark ? 'dark' : 'light'}`} 
      // 直接调用 toggleTheme，不要自己写 setIsDark
      onClick={toggleTheme} 
    >
      {isDark ? '☀️' : '🌙'}
    </Button>
  );
}