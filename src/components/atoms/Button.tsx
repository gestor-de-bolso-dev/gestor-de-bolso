import React from 'react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   * @default "primary"
   */
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'

  /**
   * Button size
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg'

  /**
   * Button state
   */
  disabled?: boolean
  loading?: boolean

  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean

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
 * Button - Atomic Component
 *
 * Flexible button component supporting multiple variants, sizes, and states.
 * Uses design tokens for consistent styling across the application.
 *
 * @example
 * <Button variant="primary">Click Me</Button>
 * <Button variant="secondary" disabled>Disabled</Button>
 * <Button variant="danger" size="lg" icon={<TrashIcon />}>Delete</Button>
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      fullWidth = false,
      icon,
      iconPosition = 'left',
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    // Base styles using design tokens
    const baseStyles = `
      inline-flex items-center justify-center
      font-medium transition-all duration-200 ease-out
      focus-visible:outline-2 focus-visible:outline-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      whitespace-nowrap
    `

    // Size variants
    const sizeVariants = {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-6 py-3 text-base rounded-lg',
      lg: 'px-8 py-4 text-lg rounded-lg',
    }

    // Color variants with tokens
    const colorVariants = {
      primary: `
        bg-blue-600 text-white
        hover:bg-blue-700 active:bg-blue-800
        focus-visible:outline-blue-600
        shadow-sm hover:shadow-md
      `,
      secondary: `
        bg-gray-100 text-gray-900
        hover:bg-gray-200 active:bg-gray-300
        focus-visible:outline-gray-600
      `,
      danger: `
        bg-red-600 text-white
        hover:bg-red-700 active:bg-red-800
        focus-visible:outline-red-600
        shadow-sm hover:shadow-md
      `,
      ghost: `
        text-gray-600 hover:text-gray-900
        hover:bg-gray-100 active:bg-gray-200
        focus-visible:outline-gray-600
      `,
    }

    // Full width
    const fullWidthClass = fullWidth ? 'w-full' : ''

    // Combine all styles
    const finalClassName = `
      ${baseStyles}
      ${sizeVariants[size]}
      ${colorVariants[variant]}
      ${fullWidthClass}
      ${className}
    `
      .replace(/\s+/g, ' ')
      .trim()

    return (
      <button
        ref={ref}
        className={finalClassName}
        disabled={disabled || loading}
        {...props}
      >
        {icon && iconPosition === 'left' && (
          <span className={children ? 'mr-2' : ''}>
            {icon}
          </span>
        )}

        {loading && (
          <svg
            className={`animate-spin ${children ? 'mr-2' : ''}`}
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" opacity="0.3" />
            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
          </svg>
        )}

        {children && <span>{children}</span>}

        {icon && iconPosition === 'right' && (
          <span className={children ? 'ml-2' : ''}>
            {icon}
          </span>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
