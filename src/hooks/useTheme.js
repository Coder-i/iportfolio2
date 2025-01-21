import { useState, useEffect } from 'react';
import gsap from 'gsap';

export const useTheme = (mainRef) => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setCurrentTheme(savedTheme);
  }, []);

  const handleThemeChange = (theme) => {
    gsap.to(mainRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        setCurrentTheme(theme);
        gsap.to(mainRef.current, { opacity: 1, duration: 0.3 });
      },
    });
  };

  return { currentTheme, handleThemeChange };
};