import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    // Check user preference or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`
        relative p-2 rounded-full transition-all duration-300 shadow-md
        ${dark 
          ? "bg-gradient-to-br from-blue-900 to-indigo-900 text-amber-300 hover:text-amber-200 hover:shadow-blue-500/20 hover:shadow-lg" 
          : "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 hover:text-blue-800 hover:shadow-blue-300/30 hover:shadow-lg"
        }
        focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500
      `}
      aria-label="Changer le thème"
      title="Changer le thème"
    >
      <span className={`transform transition-all duration-300 ${dark ? 'scale-100 rotate-0' : 'scale-0 rotate-90'} absolute inset-0 flex items-center justify-center`}>
        <FaSun className="text-lg text-amber-300" />
      </span>
      <span className={`transform transition-all duration-300 ${!dark ? 'scale-100 rotate-0' : 'scale-0 rotate-90'} absolute inset-0 flex items-center justify-center`}>
        <FaMoon className="text-lg" />
      </span>
      <span className="opacity-0">
        {dark ? <FaSun /> : <FaMoon />}
      </span>
    </button>
  );
};

export default ThemeToggle;