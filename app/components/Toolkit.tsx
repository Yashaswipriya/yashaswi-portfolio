import React from 'react';

export default function Toolkit() {
  const stack = [
    {
      category: 'LANGUAGES',
      items: 'JavaScript · TypeScript · Python · C++ · SQL',
    },
    {
      category: 'FRONTEND',
      items: 'React · Next.js · Tailwind CSS · Framer Motion · Radix UI',
    },
    {
      category: 'BACKEND',
      items: 'Node.js · Express · REST APIs · WebSockets · JWT auth',
    },
    {
      category: 'DATABASES',
      items: 'PostgreSQL · MongoDB · Redis',
    },
    {
      category: 'DEVOPS & CLOUD',
      items: 'Docker · GitHub Actions · Vercel · Render',
    },
    {
      category: 'TOOLS',
      items: 'Git · Postman · Figma · VS Code',
    },
  ];

  return (
    <section id="toolkit" className="w-full max-w-7xl mx-auto px-6 py-12 space-y-6">
      {/* Section Header */}
      <div className="space-y-1">
        <p className="font-pixel text-[11px] font-bold text-[#DCA832] tracking-widest uppercase">
          TOOLKIT
        </p>
        <h2 className="font-pixel font-black text-4xl sm:text-5xl text-[#1E2B24] tracking-tight uppercase">
          WHAT I BUILD WITH
        </h2>
      </div>

      {/* Terminal Stack Card */}
      <div
        className="w-full bg-white border-4 border-[#1E2B24] overflow-hidden"
        style={{ boxShadow: '8px 8px 0px #1E2B24' }}
      >
        {/* Terminal Header Bar */}
        <div className="bg-[#1E2B24] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#E5534B] inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#E6BA33] inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#4BB543] inline-block" />
          </div>
          <span className="font-pixel text-xs text-[#FAF8ED] font-bold tracking-wider">
            STACK.SH
          </span>
        </div>

        {/* Stack Items */}
        <div className="p-6 sm:p-10 space-y-6">
          {stack.map((group, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-8">
                {/* Yellow Pixel Category Name */}
                <div className="w-48 font-pixel text-xs font-bold text-[#DCA832] tracking-wider shrink-0">
                  {group.category}
                </div>
                {/* Tech List */}
                <div className="font-sans text-sm sm:text-base font-medium text-[#1E2B24] flex-1">
                  {group.items}
                </div>
              </div>

              {idx < stack.length - 1 && (
                <div className="border-b-2 border-dashed border-[#1E2B24]" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}