import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  className?: string;
}

export function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const variantClasses = {
    default: 'bg-[var(--surface)] text-[var(--text)] border border-[var(--border)]',
    primary: 'bg-[var(--primary)] text-white',
    success: 'bg-green-900/30 text-green-300 border border-green-700/30',
    warning: 'bg-yellow-900/30 text-yellow-300 border border-yellow-700/30',
  };

  return (
    <span
      className={`
        inline-block
        px-3 py-1
        rounded-full
        text-sm
        font-medium
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
