import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, translations } = useLanguage();

  return (
    <header className="py-4">
      <div className="flex items-center justify-between">
        {/* Left area: placeholder name/logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">Logo/Name</div>

        {/* Right area: navigation, toggles, mobile menu */}
        <div className="flex items-center space-x-4">
          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a href="#hero" className="hover:underline text-gray-900 dark:text-gray-100">{translations.header.nav.hero}</a>
              </li>
              <li>
                <a href="#projects" className="hover:underline text-gray-900 dark:text-gray-100">{translations.header.nav.projects}</a>
              </li>
              <li>
                <a href="#skills" className="hover:underline text-gray-900 dark:text-gray-100">{translations.header.nav.skills}</a>
              </li>
              <li>
                <a href="#certificates" className="hover:underline text-gray-900 dark:text-gray-100">{translations.header.nav.certificates}</a>
              </li>
              <li>
                <a href="#experience" className="hover:underline text-gray-900 dark:text-gray-100">{translations.header.nav.experience}</a>
              </li>
              <li>
                <a href="#about" className="hover:underline text-gray-900 dark:text-gray-100">{translations.header.nav.about}</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline text-gray-900 dark:text-gray-100">{translations.header.nav.contact}</a>
              </li>
            </ul>
          </nav>

          {/* Dark mode toggle button */}
          <button
            onClick={toggleTheme}
            className="hover:cursor-pointer text-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-1 rounded"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Language toggle button */}
          <button
            onClick={toggleLanguage}
            className="hover:cursor-pointer text-sm bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-2 py-1 rounded"
          >
            {language.toUpperCase()}
          </button>

          {/* Mobile menu placeholder button */}
          <button className="md:hidden text-xl text-gray-900 dark:text-gray-100">☰</button>
        </div>
      </div>
    </header>
  );
}
