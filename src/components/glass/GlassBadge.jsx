import React from 'react';

/**
 * GlassBadge - A glass morphism badge/tag component
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Badge content
 * @param {string} [props.variant='default'] - 'default' | 'primary' | 'success' | 'warning' | 'danger'
 * @param {string} [props.size='md'] - 'sm' | 'md' | 'lg'
 * @param {string} [props.className=''] - Additional classes
 * @param {React.ReactNode} [props.icon] - Optional icon element
 * @param {Function} [props.onRemove] - Optional remove/close handler
 */
export default function GlassBadge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon,
  onRemove
}) {
  // Base badge class
  const baseClass = 'glass-badge';
  
  // Variant classes
  const variantClasses = {
    default: '',
    primary: 'glass-badge-primary',
    success: 'glass-badge-success',
    warning: 'glass-badge-warning',
    danger: 'glass-badge-danger'
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: '', // default from CSS
    lg: 'text-base px-4 py-1'
  };
  
  const allClasses = [
    baseClass,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');
  
  return (
    <span className={allClasses}>
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:text-white/80 transition-colors"
          aria-label="Remove"
          type="button"
        >
          ×
        </button>
      )}
    </span>
  );
}
