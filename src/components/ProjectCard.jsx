import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';

const ProjectCard = ({ project, variant }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isHero = variant === 'hero';

  return (
    <>
      <div className={`mb-3 border border-gray-600/50 dark:border-sky-900/50 bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-700 overflow-hidden ${isHero ? 'md:col-span-2 mb-10' : 'mx-2'}`}>
        <div className="relative">
          {!imageError ? (
            <img
              src={project.thumbnail}
              alt={project.title}
              className={`w-full object-cover ${isHero ? 'h-68 md:h-90' : 'h-45'}`}
              onError={handleImageError}
            />
          ) : (
            <div className={`w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center ${isHero ? 'h-68 md:h-90' : 'h-45'}`}>
              <span className="text-gray-500 dark:text-gray-400">Image not available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-slate-950 bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-70 transition-opacity cursor-pointer" onClick={openModal}>
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-opacity"
            aria-label="View on GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C10.477 0 10 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div className="p-6">
          <h3 className={`font-bold text-gray-900 dark:text-white mb-2 ${isHero ? 'text-2xl' : 'text-xl'}`}>
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={project.title}>
        <div className="aspect-video">
          <iframe
            src={project.youtube}
            title={project.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    youtube: PropTypes.string.isRequired,
  }).isRequired,
  variant: PropTypes.oneOf(['hero', 'default']).isRequired,
};

export default ProjectCard;
