
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  asLink?: boolean;
  to?: string;
  external?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    asChild = false,
    asLink = false,
    to,
    external = false,
    children, 
    ...props 
  }, ref) => {
    const variantStyles = {
      primary: 'bg-thinkminnt-blue text-white hover:bg-thinkminnt-blue-dark transition-colors shadow-md hover:shadow-lg',
      secondary: 'bg-thinkminnt-green text-white hover:bg-thinkminnt-green-dark transition-colors shadow-md hover:shadow-lg',
      outline: 'bg-transparent border border-thinkminnt-blue text-thinkminnt-blue hover:bg-thinkminnt-blue/10 transition-colors',
      ghost: 'bg-transparent text-thinkminnt-blue hover:bg-thinkminnt-blue/10 transition-colors',
      link: 'bg-transparent text-thinkminnt-blue hover:underline transition-all p-0'
    };

    const sizeStyles = {
      sm: 'text-sm px-3 py-1.5 rounded-md',
      md: 'text-base px-4 py-2 rounded-lg',
      lg: 'text-lg px-6 py-3 rounded-lg'
    };

    const buttonClasses = cn(
      'font-medium inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-thinkminnt-blue/50 disabled:opacity-70 disabled:cursor-not-allowed',
      variant !== 'link' && sizeStyles[size],
      variantStyles[variant],
      className
    );

    if (asLink && to) {
      if (external) {
        return (
          <a 
            href={to}
            className={buttonClasses}
            target="_blank" 
            rel="noopener noreferrer"
            {...props as any}
          >
            {children}
          </a>
        );
      }
      
      return (
        <Link 
          to={to}
          className={buttonClasses}
          {...props as any}
        >
          {children}
        </Link>
      );
    }

    return (
      <button 
        className={buttonClasses} 
        ref={ref} 
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
