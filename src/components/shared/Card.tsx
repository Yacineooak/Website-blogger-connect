
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'outlined';
  hover?: boolean;
  children: React.ReactNode;
}

const Card = ({
  className,
  variant = 'default',
  hover = true,
  children,
  ...props
}: CardProps) => {
  const variantStyles = {
    default: 'bg-white border border-gray-200',
    glass: 'glass',
    outlined: 'border border-gray-200 bg-transparent'
  };

  return (
    <div
      className={cn(
        'rounded-xl shadow-sm overflow-hidden',
        variantStyles[variant],
        hover && 'card-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const CardHeader = ({ className, children, ...props }: CardHeaderProps) => (
  <div className={cn('p-5', className)} {...props}>
    {children}
  </div>
);

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const CardContent = ({ className, children, ...props }: CardContentProps) => (
  <div className={cn('p-5 pt-0', className)} {...props}>
    {children}
  </div>
);

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

const CardFooter = ({ className, children, ...props }: CardFooterProps) => (
  <div className={cn('p-5 pt-0', className)} {...props}>
    {children}
  </div>
);

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
  children: React.ReactNode;
}

const CardTitle = ({ className, children, ...props }: CardTitleProps) => (
  <h3 className={cn('text-lg font-semibold', className)} {...props}>
    {children}
  </h3>
);

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
  children: React.ReactNode;
}

const CardDescription = ({ className, children, ...props }: CardDescriptionProps) => (
  <p className={cn('text-sm text-muted-foreground', className)} {...props}>
    {children}
  </p>
);

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  alt: string;
}

const CardImage = ({ className, src, alt, ...props }: CardImageProps) => (
  <div className="w-full overflow-hidden">
    <img 
      src={src} 
      alt={alt} 
      className={cn("w-full h-auto object-cover", className)} 
      {...props} 
    />
  </div>
);

export { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, CardImage };
