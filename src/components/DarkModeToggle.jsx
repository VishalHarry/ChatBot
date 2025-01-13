import React, { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check the user's preference on load
    return localStorage.getItem('theme') === 'dark' || false;
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Add/remove dark mode class to <html>
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md"
    >
      {darkMode ? '☀️' : '🌙 '}
    </button>
  );
}

export default DarkModeToggle;
