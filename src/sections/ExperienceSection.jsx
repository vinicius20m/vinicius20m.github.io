import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ExperienceCoursesSubSection from './ExperienceCoursesSubSection';

const ExperienceSection = () => {
  const { translations } = useLanguage();
  const experience = translations.experience;

  const getStartYear = (dateRange) => {
    const parts = dateRange.split(' - ')[0];
    const year = parts.split(' ').pop();
    return year;
  };

  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 md:px-4">
      <div className="max-w-7xl md:mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {experience.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {experience.description}
          </p>
        </div>

        <div className="relative md:ml-30 ">
          {/* Vertical line */}
          <div className="absolute md:left-8 w-0.5 bg-gray-300 dark:bg-gray-600 h-full"></div>

          <div className="space-y-12">
            {experience.items.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Start year on left side of dot */}
                <div className="absolute left-0 top-6 transform -translate-x-full pr-4 hidden md:block">
                  <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {getStartYear(item.dateRange)}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="absolute md:left-7 left-1.5 w-5 h-5 bg-blue-500 rounded-full border-5 border-gray-100 dark:border-gray-900 z-10"></div>

                {/* Content card */}
                <div className="md:ml-16 ml-2 flex-1 max-w-4xl">
                  <div className="p-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 hover:shadow-xl transition-shadow duration-300">
                      {/* Header */}
                      <div className="mb-4 flex justify-between items-start">
                        <div className="ml-4">
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {item.jobTitle}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                            {item.company}
                          </p>
                        </div>
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

                      {/* Line divisor */}
                      <hr className="border-slate-300/55 shadow-sm shadow-slate-300/70 dark:border-gray-700 mb-4" />

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {item.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <ExperienceCoursesSubSection />
      </div>
    </section>
  );
};

export default ExperienceSection;
