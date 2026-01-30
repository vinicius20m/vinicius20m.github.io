import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CertificatesCarousel from '../components/CertificatesCarousel';
import certificatesData from '../data/certificates';

const CertificatesSection = () => {
  const { translations } = useLanguage();
  const certificates = translations.certificates;

  return (
    <section id="certificates" className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {certificates.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {certificates.description}
          </p>
        </div>
        <CertificatesCarousel certificates={certificatesData} />
      </div>
    </section>
  );
};

export default CertificatesSection;
