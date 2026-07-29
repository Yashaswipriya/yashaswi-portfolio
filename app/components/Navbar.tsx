import Link from 'next/link';
import PixelButton from './ui/PixelButton';

export default function Navbar() {
  const navLinks = [
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'TOOLKIT', href: '#toolkit' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div 
          className="w-10 h-10 bg-[#DCA832] border-2 border-[#1E2B24] flex items-center justify-center font-pixel font-bold text-xl text-[#1E2B24]"
          style={{ boxShadow: '3px 3px 0px #1E2B24' }}
        >
          Y
        </div>
        <span className="font-pixel text-lg font-bold tracking-widest text-[#1E2B24]">
          YASHASWI
        </span>
      </Link>

      {/* Navigation Links & Action */}
      <div className="flex items-center gap-8">
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-pixel text-[15px] font-bold tracking-wider text-[#1E2B24] hover:text-[#DCA832] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Reusable PixelButton with small padding adjustment for the navbar */}
        <PixelButton 
          href="/resume.pdf" 
          variant="outline" 
          className="!px-4 !py-2"
        >
          RESUME
        </PixelButton>
      </div>
    </header>
  );
}