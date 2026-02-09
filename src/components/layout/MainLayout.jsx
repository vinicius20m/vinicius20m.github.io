import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
