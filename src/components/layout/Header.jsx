import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../contexts/LanguageContext';
import contactItems from '../../data/contact';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, translations } = useLanguage();

  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`sticky top-0 w-full z-10 transition-all transition-colors duration-500 border-b border-gray-200 dark:border-gray-700 ${
      isCompact
        ? 'bg-white/67 dark:bg-gray-900/65 backdrop-blur-sm shadow-lg py-2'
        : 'bg-gradient-to-b from-blue-700/20 to-gray-100 dark:from-sky-700/30 dark:to-sky-950/30 shadow-xl py-4 border-gray-300 dark:border-slate-800/40'
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left zone: Identity */}
          <button
            onClick={scrollToTop}
            className={`hover:cursor-pointer font-bold text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${
              isCompact ? 'text-lg' : 'text-xl'
            }`}
          >
            {translations.hero.name}
          </button>

          {/* Center zone: Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <button
                  onClick={scrollToTop}
                  className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.hero}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.skills}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('certificates')}
                  className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.certificates}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('experience')}
                  className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.experience}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.contact}
                </button>
              </li>
            </ul>
          </nav>

          {/* Right zone: Actions */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`hover:opacity-75 text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${
                isCompact ? 'text-lg' : 'text-xl'
              }`}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button
              onClick={toggleLanguage}
              className={`hover:opacity-75 text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${
                isCompact ? 'text-sm' : 'text-base'
              }`}
            >
              {language.toUpperCase()}
            </button>
            <a
              href={contactItems[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-75 text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${
                isCompact ? 'text-lg' : 'text-xl'
              }`}
            >
              <FaGithub />
            </a>
            <a
              href={contactItems[1].link}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:opacity-75 text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${
                isCompact ? 'text-lg' : 'text-xl'
              }`}
            >
              <FaLinkedin />
            </a>
            {/* Mobile menu placeholder button */}
            <button className="md:hidden text-xl text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200">☰</button>
          </div>
        </div>
      </div>
    </header>
  );
}
