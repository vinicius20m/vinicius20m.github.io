/* eslint-disable react/prop-types */
import React from 'react';
export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {children}
    </div>
  );
}
