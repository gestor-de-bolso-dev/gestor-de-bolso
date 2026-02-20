import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Input variant
   * @default "default"
   */
  variant?: 'default' | 'filled'

  /**
   * Input state
   */
  error?: boolean
  success?: boolean

  /**
   * Error message (optional)
   */
  errorMessage?: string

  /**
   * Help text (optional)
   */
  helperText?: string

  /**
   * Icon element (optional)
   */
  icon?: React.ReactNode

  /**
   * Icon position
   * @default "left"
   */
  iconPosition?: 'left' | 'right'
}

/**
 * Input - Atomic Component
 *
 * Flexible input component with support for variants, states, and helper text.
 * Uses design tokens for consistent styling.
 *
 * @example
 * <Input placeholder="Enter text..." />
 * <Input type="email" error={true} errorMessage="Invalid email" />
 * <Input icon={<SearchIcon />} helperText="Search by campaign name" />
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      error = false,
      success = false,
      errorMessage,
      helperText,
      icon,
      iconPosition = 'left',
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = `
      w-full px-4 py-3 text-base
      border border-gray-300 rounded-lg
      font-sans transition-colors duration-200
      focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100
      placeholder:text-gray-400
      disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
    `

    // Variant styles
    const variantStyles = {
      default: 'bg-white',
      filled: 'bg-gray-100',
    }

    // State styles
    const stateStyles = error
      ? 'border-red-600 focus:border-red-600 focus:ring-red-100'
      : success
        ? 'border-green-600 focus:border-green-600 focus:ring-green-100'
        : ''

    // Wrapper styles for icon
    const wrapperClass = icon ? 'relative' : ''
    const paddingClass = icon
      ? iconPosition === 'left'
        ? 'pl-10'
        : 'pr-10'
      : ''

    const finalClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${stateStyles}
      ${paddingClass}
      ${className}
    `
      .replace(/\s+/g, ' ')
      .trim()

    return (
      <div className={wrapperClass}>
        <input
          ref={ref}
          className={finalClassName}
          aria-invalid={error}
          aria-describedby={errorMessage ? 'error-message' : helperText ? 'helper-text' : undefined}
          {...props}
        />

        {icon && (
          <span
            className={`
              absolute top-1/2 -translate-y-1/2
              text-gray-400 pointer-events-none
              ${iconPosition === 'left' ? 'left-3' : 'right-3'}
            `}
          >
            {icon}
          </span>
        )}

        {errorMessage && (
          <p id="error-message" className="mt-1 text-sm text-red-600">
            {errorMessage}
          </p>
        )}

        {helperText && !errorMessage && (
          <p id="helper-text" className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
