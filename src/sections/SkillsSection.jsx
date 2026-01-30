/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import skillsData from '../data/skills';

const SkillCard = ({ skill }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 min-w-[120px]">
      {!imageError ? (
        <img
          src={skill.logo}
          alt={skill.name}
          className="w-12 h-12 mx-auto mb-2 object-contain"
          onError={handleImageError}
        />
      ) : (
        <img
          src={"/placeholder-logo.jpg"}
          className="w-12 h-12 mx-auto mb-2"
          onError={handleImageError}
        />
      )}
      <p className="text-center text-gray-900 dark:text-white text-sm font-medium truncate">
        {skill.name}
      </p>
    </div>
  );
};

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
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide scroll-smooth">
              {skillsData.languages.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Frameworks & Platforms */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.frameworksPlatforms}
          </h3>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide scroll-smooth">
              {skillsData.frameworksPlatforms.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Libraries & UI */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.librariesUI}
          </h3>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide scroll-smooth">
              {skillsData.librariesUI.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.databases}
          </h3>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide scroll-smooth">
              {skillsData.databases.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Quality */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.toolsQuality}
          </h3>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide scroll-smooth">
              {skillsData.toolsQuality.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Engineering Practices */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            {skills.categories.engineeringPractices}
          </h3>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            {skillsData.engineeringPractices.map((practice, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
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
