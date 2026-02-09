/* eslint-disable react/prop-types */
import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
