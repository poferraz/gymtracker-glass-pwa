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
    <nav className="bottom-navigation">
      <div className="flex items-center justify-between h-full">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 text-sm transition-all duration-200 ${
                isActive ? 'active' : ''
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
