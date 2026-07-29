import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import HeroStatsTerminal from './HeroStatsTerminal';
import PixelButton from './ui/PixelButton';

export default function Hero() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Column */}
      <div className="flex-1 space-y-6">
        <p className="font-pixel text-xs sm:text-sm font-bold text-[#DCA832] tracking-widest uppercase">
          SOFTWARE ENGINEER
        </p>

        <div className="space-y-2">
          <h1 className="font-pixel text-4xl sm:text-6xl lg:text-7xl font-bold text-[#1E2B24] leading-tight tracking-tight">
            YASHASWI
          </h1>
          <h1 className="font-pixel text-4xl sm:text-6xl lg:text-7xl font-bold text-[#DCA832] leading-tight tracking-tight">
            PRIYA
          </h1>
        </div>

        <p className="text-[#1E2B24] text-base sm:text-lg max-w-xl leading-relaxed font-sans font-medium pt-1">
          Building real-time applications, distributed systems, and AI-powered products that emphasize scalability, reliability, and developer experience.
        </p>

        {/* Clean, Reusable CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <PixelButton 
            href="#projects" 
            variant="primary" 
            icon={<ArrowRight className="w-4 h-4 stroke-[3]" />}
          >
            VIEW PROJECTS
          </PixelButton>

          <PixelButton 
            href="/resume.pdf" 
            variant="secondary" 
            icon={<Download className="w-4 h-4 stroke-[3]" />}
          >
            RESUME
          </PixelButton>

          <PixelButton 
            href="https://codolio.com/profile/Yashaswi_priya" 
            variant="secondary" 
            isExternal 
            icon={<ExternalLink className="w-4 h-4 stroke-[3]" />}
          >
            CODOLIO
          </PixelButton>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 flex justify-center lg:justify-end w-full">
        <HeroStatsTerminal />
      </div>
    </section>
  );
}