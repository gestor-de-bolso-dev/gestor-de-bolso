import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Card variant
   * @default "default"
   */
  variant?: 'default' | 'elevated' | 'outlined'

  /**
   * Card elevation/shadow
   * @default "md"
   */
  shadow?: 'none' | 'sm' | 'md' | 'lg'

  /**
   * Padding inside card
   * @default "md"
   */
  padding?: 'sm' | 'md' | 'lg'

  /**
   * Border radius
   * @default "md"
   */
  radius?: 'sm' | 'md' | 'lg'

  /**
   * Interactive hover state
   * @default false
   */
  interactive?: boolean

  /**
   * Full height
   * @default false
   */
  fullHeight?: boolean
}

/**
 * Card - Atomic Component
 *
 * Flexible container component for grouping related content.
 * Uses design tokens for shadows, padding, and spacing.
 *
 * @example
 * <Card>
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * <Card variant="elevated" shadow="lg" interactive>
 *   Clickable card
 * </Card>
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      shadow = 'md',
      padding = 'md',
      radius = 'md',
      interactive = false,
      fullHeight = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = `
      bg-white
      transition-all duration-200 ease-out
    `

    // Variant styles
    const variantStyles = {
      default: 'border border-gray-200',
      elevated: '',
      outlined: 'border-2 border-gray-300',
    }

    // Shadow styles using tokens
    const shadowStyles = {
      none: 'shadow-none',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
    }

    // Padding styles
    const paddingStyles = {
      sm: 'p-3',
      md: 'p-6',
      lg: 'p-8',
    }

    // Border radius
    const radiusStyles = {
      sm: 'rounded-md',
      md: 'rounded-lg',
      lg: 'rounded-xl',
    }

    // Interactive styles
    const interactiveClass = interactive
      ? `
        cursor-pointer
        hover:shadow-lg hover:scale-105
        active:scale-95
      `
      : ''

    // Full height
    const heightClass = fullHeight ? 'h-full' : ''

    const finalClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${shadowStyles[shadow]}
      ${paddingStyles[padding]}
      ${radiusStyles[radius]}
      ${interactiveClass}
      ${heightClass}
      ${className}
    `
      .replace(/\s+/g, ' ')
      .trim()

    return (
      <div
        ref={ref}
        className={finalClassName}
        role={interactive ? 'button' : undefined}
        tabIndex={interactive ? 0 : undefined}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
