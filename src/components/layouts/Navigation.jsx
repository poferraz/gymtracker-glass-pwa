import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Navigation - Glass morphism navigation bar
 */
export default function Navigation() {
  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/workouts', label: 'Workouts', icon: '💪' },
    { path: '/calendar', label: 'Calendar', icon: '📅' },
    { path: '/stats', label: 'Stats', icon: '📊' }
  ];
  
  return (
    <nav className="glass-card p-3 mb-6">
      <div className="flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏋️</span>
          <span className="font-bold text-xl hidden sm:inline">GymTracker</span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-glass-medium text-white shadow-lg'
                    : 'text-white/70 hover:text-white hover:bg-glass-light'
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
