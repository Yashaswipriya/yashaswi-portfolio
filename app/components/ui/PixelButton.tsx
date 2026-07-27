import React from 'react';
import Link from 'next/link';

interface PixelButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  isExternal?: boolean;
  className?: string;
}

export default function PixelButton({
  href,
  children,
  variant = 'secondary',
  icon,
  isExternal = false,
  className = '',
}: PixelButtonProps) {
  // Variant styles matching the retro design
  const baseStyles =
    'inline-flex items-center gap-2 font-pixel text-xs font-bold px-5 py-3.5 border-2 border-[#1E2B24] transition-all hover:translate-x-[1px] hover:translate-y-[1px]';

  const variants = {
    primary: 'bg-[#DCA832] text-[#1E2B24]',
    secondary: 'bg-white text-[#1E2B24] hover:bg-[#FAF8ED]',
    outline: 'bg-transparent text-[#1E2B24] hover:bg-[#1E2B24] hover:text-[#FAF8ED]',
  };

  const buttonContent = (
    <>
      <span>{children}</span>
      {icon}
    </>
  );

  const shadowStyle = { boxShadow: '4px 4px 0px #1E2B24' };

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant]} ${className}`}
        style={shadowStyle}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={shadowStyle}
    >
      {buttonContent}
    </Link>
  );
}