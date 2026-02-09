import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectCard from '../components/ProjectCard';

const ProjectsSection = () => {
  const { translations } = useLanguage();
  const projects = translations.projects;

  return (
    <section id="projects" className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto md:px-7">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {projects.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {projects.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
          <ProjectCard project={projects.hero} variant="hero" />
            
          {projects.secondary.map((project, index) => (
            <ProjectCard key={index} project={project} variant="default" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
