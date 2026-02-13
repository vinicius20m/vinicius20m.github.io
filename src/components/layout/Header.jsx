import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';
import { useLanguage } from '../../contexts/LanguageContext';
import contactItems from '../../data/contact';
import MobileSideMenu from './MobileSideMenu';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, translations } = useLanguage();

  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <>
      <header className={`sticky top-0 w-full z-10 transition-all transition-colors duration-500 border-b border-gray-200 dark:border-gray-700 ${isCompact
        ? 'bg-white/67 dark:bg-gray-900/65 backdrop-blur-sm shadow-lg py-1'
        : 'bg-gradient-to-b from-blue-700/20 to-gray-100 dark:from-sky-700/30 dark:to-sky-950/30 shadow-xl py-2 sm:py-4 border-gray-300 dark:border-slate-800/40'}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left zone: Identity */}
            <button
              onClick={scrollToTop}
              className={`flex-1 md:flex-none hover:cursor-pointer font-bold text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${isCompact ? 'text-lg leading-none' : 'text-xl leading-tight'}`}
            >
              <span className="m-auto sm:hidden md:hidden lg:hidden leading-none">
                {translations.hero.name.split(' ')[0]}<br />{translations.hero.name.split(' ')[1]}
              </span>
              <span className="hidden sm:inline md:inline lg:inline">
                {translations.hero.name}
              </span>
            </button>

            {/* Center zone: Navigation */}
            <nav className="hidden md:block md:px-2">
              <ul className="flex space-x-4">
                <li>
                  <button
                    onClick={scrollToTop}
                    className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${isCompact ? 'text-sm' : 'text-base'}`}
                  >
                    {translations.header.nav.hero}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('projects')}
                    className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${isCompact ? 'text-sm' : 'text-base'}`}
                  >
                    {translations.header.nav.projects}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('skills')}
                    className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${isCompact ? 'text-sm' : 'text-base'}`}
                  >
                    {translations.header.nav.skills}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('certificates')}
                    className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${isCompact ? 'text-sm' : 'text-base'}`}
                  >
                    {translations.header.nav.certificates}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('experience')}
                    className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${isCompact ? 'text-sm' : 'text-base'}`}
                  >
                    {translations.header.nav.experience}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('about')}
                    className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${isCompact ? 'text-sm' : 'text-base'}`}
                  >
                    {translations.header.nav.about}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className={`text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-150 ${isCompact ? 'text-sm' : 'text-base'}`}
                  >
                    {translations.header.nav.contact}
                  </button>
                </li>
              </ul>
            </nav>

            {/* Right zone: Actions */}
            <div className="flex w-[50%] md:w-auto items-center space-x-2 gap-2">
              <button
                onClick={toggleTheme}
                className={`hover:opacity-75 text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${isCompact ? 'text-lg' : 'text-xl'}`}
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
              <button
                onClick={toggleLanguage}
                className={`hover:opacity-75 text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${isCompact ? 'text-sm' : 'text-base'}`}
              >
                {language.toUpperCase()}
              </button>
              <a
                href={contactItems[2].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:opacity-75 text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${isCompact ? 'text-lg' : 'text-xl'}`}
              >
                <FaGithub />
              </a>
              <a
                href={contactItems[1].link}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:opacity-75 text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${isCompact ? 'text-lg' : 'text-xl'}`}
              >
                <FaLinkedin />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`ml-auto md:ml-0 md:hidden text-xl text-gray-900 dark:text-gray-100 hover:scale-105 hover:-translate-y-1 transition-all hover:cursor-pointer duration-200 ${isCompact ? 'text-lg' : 'text-xl'}`}
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileSideMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        scrollToTop={scrollToTop}
        scrollToSection={scrollToSection}
        translations={translations}
        isCompact={isCompact} 
      />
    </>
  );
}
