// src/components/Layout.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;