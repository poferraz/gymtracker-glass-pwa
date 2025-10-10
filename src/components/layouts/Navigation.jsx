import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeSimple, Gym, Calendar, StatsReport } from 'iconoir-react';

/**
 * Navigation - Glass morphism navigation bar
 */
export default function Navigation() {
  const navItems = [
    { path: '/', label: 'Home', icon: <HomeSimple width={24} height={24} /> },
    {
      path: '/workouts',
      label: 'Workouts',
      icon: <Gym width={24} height={24} />,
    },
    {
      path: '/calendar',
      label: 'Calendar',
      icon: <Calendar width={24} height={24} />,
    },
    {
      path: '/stats',
      label: 'Stats',
      icon: <StatsReport width={24} height={24} />,
    },
  ];

  return (
    <nav className="bottom-navigation glass-card p-3">
      <div className="flex items-center justify-between h-full">
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
    </nav>
  );
}
