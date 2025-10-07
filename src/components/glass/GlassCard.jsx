import React from 'react';

/**
 * GlassCard - A glass morphism card container
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.variant='light'] - 'light' or 'dark'
 * @param {string} [props.className=''] - Additional Tailwind classes
 * @param {Function} [props.onClick] - Optional click handler
 * @param {boolean} [props.hoverable=false] - Enable hover effect
 */
export default function GlassCard({ 
  children, 
  variant = 'light',
  className = '', 
  onClick,
  hoverable = false
}) {
  const baseClasses = 'glass-card';
  const variantClasses = variant === 'dark' ? 'glass-card-dark' : '';
  const hoverClasses = hoverable && onClick ? 'cursor-pointer' : '';
  const customClasses = className;
  
  const allClasses = [baseClasses, variantClasses, hoverClasses, customClasses]
    .filter(Boolean)
    .join(' ');
  
  return (
    <div 
      className={allClasses}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
    >
      {children}
    </div>
  );
}
