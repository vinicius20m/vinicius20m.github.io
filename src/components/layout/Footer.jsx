/* eslint-disable react/prop-types */
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { translations } = useLanguage();

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2023 {translations.hero.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
