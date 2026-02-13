import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import Pill from '../components/Pill';
// import profilePic from '../assets/images/profile_pic.jpg';
import profilePic from '../assets/images/pic.jpg';

const Hero = () => {
  const { translations, toggleLanguage } = useLanguage();
  const { toggleTheme } = useTheme();
  const hero = translations.hero;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-7 pb-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-8xl mx-auto rounded-2xl shadow-2xl px-7 bg-teal-50/40 dark:bg-sky-950/30 py-5 border border-lg border-sky-800/30 transition-colors duration-400">
        <div className="flex flex-col lg:flex-row items-center gap-7 lg:gap-10">
          {/* Text Block */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
              {hero.microLabel}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
              {hero.headline.split(' ').map((word, index) => {
                const highlightWords = ['performance', 'qualidade', 'quality'];
                if (highlightWords.includes(word.replace(/[.,!?]/g, ''))) {
                  return (
                    <span key={index} className="text-yellow-600 dark:text-yellow-500">
                      {word}{' '}
                    </span>
                  );
                }
                return <span key={index}>{word} </span>;
              })}
            </h1>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
              {hero.subtext}
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {hero.techStack.map((tech, index) => (
                <Pill key={index} text={tech} />
              ))}
            </div>
            {/* Buttons */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-start">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 mx-5 md:px-12 py-3 border border-md border-blue-700 bg-blue-500 text-white rounded-2xl hover:-translate-y-2 hover:scale-110 transition-all duration-150 hover:cursor-pointer shadow-lg hover:shadow-xl text-xl font-bold text-center"
                >
                  {hero.projectsButton}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl hover:-translate-y-2 hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-150 hover:cursor-pointer font-semibold text-center"
                >
                  {hero.contactButton}
                </button>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start">
                <button
                  onClick={toggleTheme}
                  className="w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:-translate-y-2 hover:scale-110 transition-all duration-150 hover:cursor-pointer flex items-center justify-center text-lg"
                >
                  {hero.darkModeButton}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:-translate-y-2 hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-150 hover:cursor-pointer font-semibold"
                >
                  {hero.languageButton}
                </button>
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="hidden lg:block border border-2xl border-sky-700/40 rounded-full w-full lg:w-2/5 flex justify-center lg:justify-end overflow-hidden max-h-[500px] h-114 shadow-2xl">
            <div className="relative max-w-[480px]">
              <img
                src={profilePic}
                alt="Profile"
                className="relative scale-122 bottom-2 right-0.5 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
