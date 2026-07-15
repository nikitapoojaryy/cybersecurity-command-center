import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]';

  const variantClasses = {
    primary:
      'bg-[var(--primary)] hover:bg-[var(--hover)] text-white shadow-lg shadow-red-500/20 hover:shadow-red-500/40',
    secondary:
      'bg-[var(--cards)] hover:bg-[var(--surface)] text-[var(--text)] border border-[var(--border)]',
    outline: 'border border-[var(--border)] hover:border-[var(--primary)] text-[var(--text)] hover:text-[var(--primary)]',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
