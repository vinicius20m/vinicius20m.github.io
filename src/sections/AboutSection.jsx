import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { translations } = useLanguage();
  const about = translations.about;

  return (
    <section id="about" className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center">
          {about.title}
        </h2>
        <div className="space-y-12">
          {about.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                {section.subtitle}
              </h3>
              <div className="space-y-4">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              {index < about.sections.length - 1 && (
                <hr className="mt-12 border-gray-300 dark:border-gray-600" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
