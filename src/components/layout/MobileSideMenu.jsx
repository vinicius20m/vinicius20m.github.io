/* eslint-disable react/prop-types */
import React from 'react';

export default function MobileSideMenu({ isOpen, onClose, scrollToTop, scrollToSection, translations }) {

  const isCompact = false;
  const handleLinkClick = (action) => {
    if (action === 'home') {
      scrollToTop();
    } else {
      scrollToSection(action);
    }
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-transparent md:hidden"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-[3rem] right-0 h-full w-64 z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-white/67 dark:bg-gray-900/65 backdrop-blur-sm shadow-lg md:hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <nav>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => handleLinkClick('home')}
                  className={`block w-full text-left text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all duration-150 p-4 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.hero}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('projects')}
                  className={`block w-full text-left text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all duration-150 p-4 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.projects}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('skills')}
                  className={`block w-full text-left text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all duration-150 p-4 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.skills}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('certificates')}
                  className={`block w-full text-left text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all duration-150 p-4 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.certificates}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('experience')}
                  className={`block w-full text-left text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all duration-150 p-4 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.experience}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('about')}
                  className={`block w-full text-left text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all duration-150 p-4 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('contact')}
                  className={`block w-full text-left text-blue-950 dark:text-blue-100 hover:text-sky-700 font-bold hover:scale-105 hover:-translate-y-1 transition-all duration-150 p-4 ${
                    isCompact ? 'text-sm' : 'text-base'
                  }`}
                >
                  {translations.header.nav.contact}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
