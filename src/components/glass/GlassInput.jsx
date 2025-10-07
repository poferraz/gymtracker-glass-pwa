import React from 'react';

/**
 * GlassInput - A glass morphism input field
 * 
 * @param {Object} props
 * @param {string} [props.type='text'] - Input type
 * @param {string} [props.placeholder=''] - Placeholder text
 * @param {string} [props.value] - Controlled value
 * @param {Function} [props.onChange] - Change handler
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {string} [props.className=''] - Additional classes
 * @param {string} [props.label] - Optional label text
 * @param {string} [props.error] - Error message
 * @param {boolean} [props.required=false] - Required field
 */
export default function GlassInput({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  disabled = false,
  className = '',
  label,
  error,
  required = false,
  ...rest
}) {
  const inputClasses = [
    'glass-input',
    error ? 'border-red-500' : '',
    className
  ].filter(Boolean).join(' ');
  
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-white/90">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={inputClasses}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? 'input-error' : undefined}
        {...rest}
      />
      {error && (
        <p id="input-error" className="mt-1 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
