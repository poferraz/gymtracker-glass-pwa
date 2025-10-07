import React from 'react';

/**
 * GlassButton - A glass morphism button
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.variant='default'] - 'default' | 'primary' | 'success' | 'danger'
 * @param {string} [props.size='md'] - 'sm' | 'md' | 'lg'
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {Function} [props.onClick] - Click handler
 * @param {string} [props.type='button'] - Button type
 * @param {string} [props.className=''] - Additional classes
 * @param {React.ReactNode} [props.icon] - Optional icon element
 * @param {string} [props.iconPosition='left'] - 'left' | 'right'
 */
export default function GlassButton({
  children,
  variant = 'default',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left'
}) {
  // Base button class
  const baseClass = 'glass-button';
  
  // Variant classes
  const variantClasses = {
    default: '',
    primary: 'glass-button-primary',
    success: 'glass-button-success',
    danger: 'glass-button-danger'
  };
  
  // Size classes
  const sizeClasses = {
    sm: 'text-sm px-4 py-2 min-h-[36px]',
    md: '', // default size from CSS
    lg: 'text-lg px-8 py-4 min-h-[52px]'
  };
  
  const allClasses = [
    baseClass,
    variantClasses[variant],
    sizeClasses[size],
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button
      type={type}
      className={allClasses}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {icon && iconPosition === 'left' && (
        <span className="inline-flex items-center">{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className="inline-flex items-center">{icon}</span>
      )}
    </button>
  );
}
