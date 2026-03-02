import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ExperienceCoursesSubSection from './ExperienceCoursesSubSection';
import Pill from '../components/Pill';
import Modal from '../components/Modal';
import certificatesData from '../data/certificates';

const ExperienceSection = () => {
  const { translations } = useLanguage();
  const experience = translations.experience;
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const ceopagReferenceLetter = certificatesData.find(cert => cert.title === 'Ceopag Reference Letter');

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openModalCertificate = () => {
    setSelectedCertificate(ceopagReferenceLetter);
    setIsModalOpen(true);
  };

  const closeModalCertificate = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const getStartYear = (dateRange) => {
    const parts = dateRange.split(' - ')[0];
    const year = parts.split(' ').pop();
    return year;
  };

  return (
    <section id="experience" className="min-h-screen py-5 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mt-10 md:mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {experience.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {experience.description}
          </p>
        </div>

        <div className="relative md:ml-24">
          {/* Vertical line */}
          <div className="absolute md:left-8 w-0.5 bg-gray-300 dark:bg-gray-600 h-full"></div>

          <div className="space-y-12">
            {experience.items.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Start year on left side of dot */}
                <div className="absolute left-0 top-4 transform -translate-x-full pr-8 hidden md:block">
                  <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                    {getStartYear(item.dateRange)}
                  </span>
                </div>

                {/* Timeline dot */}
                <div className="absolute md:left-[1.2rem] left-1.5 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full border-7 md:border-9 border-gray-100 dark:border-gray-900 z-5"></div>

                {/* Content card */}
                <div className="md:ml-16 ml-2 flex-1 max-w-4xl">
                  <div className="p-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 hover:shadow-xl transition-shadow duration-300">
                      {/* Header */}
                      <div className="mb-4 flex flex-col sm:flex-row justify-between items-start sm:items-start">
                        <div className="ml-4 flex-1 mb-3 sm:mb-0">
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {item.jobTitle}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                            {item.company}
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2 ml-4 sm:ml-0">
                          {index === 0 && ceopagReferenceLetter && (
                            <button
                              onClick={openModalCertificate}
                              className="border border-blue-900/90 md:mr-7 relative w-21 h-16 rounded-lg overflow-hidden transition-transform duration-200 hover:scale-108 hover:-translate-y-1 hover:cursor-pointer group"
                              title="View Reference Letter"
                            >
                              <img 
                                src={ceopagReferenceLetter.image} 
                                alt="Reference Letter" 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute top-4 right-1 bg-white/90 dark:bg-gray-800/90 rounded-full p-1 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                              </div>
                            </button>
                          )}
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.dateRange}
                          </p>
                        </div>
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
                          <Pill key={techIndex} text={tech} />
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

      <Modal
        isOpen={isModalOpen}
        onClose={closeModalCertificate}
        title={selectedCertificate?.title || 'Reference Letter'}
      >
        {selectedCertificate && (
          <div className="w-full h-full">
            {!selectedCertificate.pdf || isMobile ? (
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded"
              />
            ) : (
              <iframe
                src={selectedCertificate.pdf}
                className="w-full h-[30rem] md:h-[30rem] border-0 rounded"
                title={selectedCertificate.title}
              />
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ExperienceSection;
