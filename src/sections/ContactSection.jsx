import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import contactItems from '../data/contact';

const ContactSection = () => {
  const { translations } = useLanguage();
  const contact = translations.contact;

  const iconMap = {
    FaEnvelope,
    FaLinkedin,
    FaGithub,
    FaWhatsapp,
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-100 dark:bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          {contact.title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          {contact.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactItems.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="flex-shrink-0 mr-4">
                  <IconComponent className="text-3xl text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {item.label}
                  </h3>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
