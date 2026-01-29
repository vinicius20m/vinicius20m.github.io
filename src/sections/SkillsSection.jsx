import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import skillsData from '../data/skills';

const SkillsSection = () => {
  const { translations } = useLanguage();
  const skills = translations.skills;

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-200 dark:bg-gray-800 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {skills.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {skills.description}
          </p>
        </div>

        {/* Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.languages}
          </h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {skillsData.languages.map((skill, index) => (
              <div key={index} className="flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                <img src={skill.logo} alt={skill.name} className="w-12 h-12 mx-auto mb-2" />
                <p className="text-center text-gray-900 dark:text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Platforms */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.frameworksPlatforms}
          </h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {skillsData.frameworksPlatforms.map((skill, index) => (
              <div key={index} className="flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                <img src={skill.logo} alt={skill.name} className="w-12 h-12 mx-auto mb-2" />
                <p className="text-center text-gray-900 dark:text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Libraries & UI */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.librariesUI}
          </h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {skillsData.librariesUI.map((skill, index) => (
              <div key={index} className="flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                <img src={skill.logo} alt={skill.name} className="w-12 h-12 mx-auto mb-2" />
                <p className="text-center text-gray-900 dark:text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.databases}
          </h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {skillsData.databases.map((skill, index) => (
              <div key={index} className="flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                <img src={skill.logo} alt={skill.name} className="w-12 h-12 mx-auto mb-2" />
                <p className="text-center text-gray-900 dark:text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & Quality */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.toolsQuality}
          </h3>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {skillsData.toolsQuality.map((skill, index) => (
              <div key={index} className="flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md">
                <img src={skill.logo} alt={skill.name} className="w-12 h-12 mx-auto mb-2" />
                <p className="text-center text-gray-900 dark:text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Practices */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.engineeringPractices}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillsData.engineeringPractices.map((practice, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {practice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
