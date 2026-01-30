import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { translations } = useLanguage();
  const hero = translations.hero;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          {hero.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
          {hero.role}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
          {hero.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {hero.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center">
            {hero.button1}
          </a>
          <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center">
            {hero.button2}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
