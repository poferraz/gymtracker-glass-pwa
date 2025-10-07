import React from 'react';

/**
 * GlassPanel - Larger glass morphism section container
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Panel content
 * @param {string} [props.className=''] - Additional classes
 * @param {string} [props.title] - Optional panel title
 * @param {React.ReactNode} [props.actions] - Optional action buttons/elements
 */
export default function GlassPanel({
  children,
  className = '',
  title,
  actions
}) {
  const panelClasses = ['glass-panel', className].filter(Boolean).join(' ');
  
  return (
    <div className={panelClasses}>
      {(title || actions) && (
        <div className="flex items-center justify-between mb-4">
          {title && (
            <h2 className="text-xl font-semibold">{title}</h2>
          )}
          {actions && (
            <div className="flex items-center gap-2">
              {actions}
            </div>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
