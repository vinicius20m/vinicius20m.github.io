import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import certificatesData from '../data/certificates';
import Modal from '../components/Modal';

const ExperienceCoursesSubSection = () => {
  const { translations } = useLanguage();
  const courses = translations.experience.courses;
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const preparaCertificate = certificatesData.find(cert => cert.title === 'PREPARA Certificate');

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
    setSelectedCertificate(preparaCertificate);
    setIsModalOpen(true);
  };

  const closeModalCertificate = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  // const scrollToCertificate = () => {
  //   window.dispatchEvent(new Event('stop-carousel-autoplay'));
    
  //   const certificateSection = document.getElementById('certificates');
  //   if (certificateSection) {
  //     certificateSection.scrollIntoView({ behavior: 'smooth' });
  //     setTimeout(() => {
  //       const preparaCert = document.getElementById('prepara-certificate');
  //       if (preparaCert) {
  //         preparaCert.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  //       }
  //     }, 1000);
  //   }
  // };

  return (
    <div id="courses" className="mt-14">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {courses.title}
        </h3>
        {/* <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          {courses.description}
        </p> */}
      </div>

      <div className="relative md:ml-24">
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
                <div className="absolute md:left-7 left-1.5 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-100 dark:border-gray-900 z-5"></div>

                {/* Content card */}
                <div className="md:ml-16 ml-2 flex-1 max-w-3xl">
                  <div className="p-[0.063rem] bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl">
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 hover:shadow-xl transition-shadow duration-300">
                      {/* Header */}
                      <div className="mb-4 flex justify-between items-start">
                        <div className="flex-1">
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
                        {index === 0 && preparaCertificate && (
                          <button
                            onClick={openModalCertificate}
                            className="ml-2 border border-blue-900/90 relative w-21 h-16 rounded-lg overflow-hidden transition-transform duration-200 hover:scale-108 hover:-translate-y-1 hover:cursor-pointer group"
                            title="View Certificate"
                          >
                            <img 
                              src={preparaCertificate.image} 
                              alt="Certificate" 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-1 bg-white/90 dark:bg-gray-800/90 rounded-full p-1 shadow-md">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                            </div>
                          </button>
                        )}
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

      <Modal
        isOpen={isModalOpen}
        onClose={closeModalCertificate}
        title={selectedCertificate?.title || 'Certificate'}
      >
        {selectedCertificate && (
          <div className="w-full h-full">
            {isMobile ? (
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
    </div>
  );
};

export default ExperienceCoursesSubSection;
