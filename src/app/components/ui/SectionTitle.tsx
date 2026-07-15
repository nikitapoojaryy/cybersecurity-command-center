import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function SectionTitle({
  title,
  subtitle,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 text-center md:text-left">
      {subtitle && (
        <p className="text-[var(--primary)] font-semibold tracking-widest text-sm uppercase">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--muted)] text-lg max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
