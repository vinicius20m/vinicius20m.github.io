import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ExperienceSection = () => {
  const { translations } = useLanguage();
  const experience = translations.experience;

  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {experience.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {experience.description}
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 bg-gray-300 dark:bg-gray-600 h-full"></div>

          <div className="space-y-12">
            {experience.items.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content card */}
                <div className="ml-16 md:ml-0 md:w-1/2 md:pl-12 lg:pl-16">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {item.jobTitle}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                        {item.company}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.dateRange}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <ul className="mb-4 space-y-2">
                      {item.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {item.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
