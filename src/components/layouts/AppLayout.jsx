import React from 'react';
import Navigation from './Navigation';

/**
 * AppLayout - Main layout wrapper with navigation
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 */
export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen pb-safe">
      <main className="max-w-6xl mx-auto p-4">
        {children}
      </main>
      <Navigation />
    </div>
  );
}
