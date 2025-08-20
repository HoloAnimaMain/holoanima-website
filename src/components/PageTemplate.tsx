import React from 'react';

interface PageTemplateProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function PageTemplate({ title, subtitle, children, className = '' }: PageTemplateProps) {
  return (
    <div className={`container mx-auto px-4 py-8 ${className}`}>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h1>}
          {subtitle && <p className="text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  );
}