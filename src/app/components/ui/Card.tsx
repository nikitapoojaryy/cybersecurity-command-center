import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '', ...props }: CardProps) {
  return (
    <div
      className={`
        bg-[var(--cards)]
        border border-[var(--border)]
        rounded-xl
        p-6
        transition-all duration-300
        hover:border-[var(--primary)]
        hover:shadow-lg hover:shadow-red-500/10
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
