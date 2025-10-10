import React from 'react';
import Navigation from './Navigation';
import { Flash } from 'iconoir-react';

/**
 * AppLayout - Main layout wrapper with navigation
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 */
export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen pb-safe">
      <header className="app-header">
        <Flash width={28} height={28} className="app-logo" />
        <span className="app-title">GymTracker</span>
      </header>
      <main className="max-w-6xl mx-auto p-4 pt-16">{children}</main>
      <Navigation />
    </div>
  );
}
