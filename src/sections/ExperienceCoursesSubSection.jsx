import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ExperienceCoursesSubSection = () => {
  const { translations } = useLanguage();
  const courses = translations.experience.courses;

  return (
    <div id="courses" className="mt-20">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {courses.title}
        </h3>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          {courses.description}
        </p>
      </div>

      <div className="relative md:ml-30">
        <>
          {/* Vertical line */}
          <div className="absolute md:left-8 w-0.5 bg-gray-300 dark:bg-gray-600 h-full"></div>

          <div className="space-y-8">
            {courses.items.map((course, index) => (
              <div key={index} className="relative flex items-start">
                {/* Year on left side of dot */}
                <div className="absolute left-0 top-6 transform -translate-x-full pr-4 hidden md:block">
                  <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {course.year}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="absolute md:left-7 left-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-100 dark:border-gray-900 z-10"></div>

                {/* Content card */}
                <div className="md:ml-16 ml-2 flex-1 max-w-3xl">
                  <div className="p-[0.063rem] bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 hover:shadow-xl transition-shadow duration-300">
                      {/* Header */}
                      <div className="mb-4">
                        <h4 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {course.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                          {course.institution}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 md:hidden">
                          {course.year}
                        </p>
                      </div>

                      {/* Bullets */}
                      <ul className="space-y-2">
                        {course.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
};

export default ExperienceCoursesSubSection;
