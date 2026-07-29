export default function Experience() {
  const highlights = [
    "Built and deployed Illuminora's primary client-acquisition website from design handoff to production",
    'Delivered 4+ client websites independently, including a real estate listing platform, within one week of design handoff',
    'Implemented CI/CD pipelines using GitHub and Vercel for automated build and deployment',
  ];

  const tags = ['NEXT.JS', 'TYPESCRIPT', 'VERCEL', 'CI/CD'];

  return (
    <section id="experience" className="w-full max-w-7xl mx-auto px-6 py-16 space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <p className="font-pixel text-xs font-bold text-[#DCA832] tracking-widest uppercase">
          EXPERIENCE
        </p>
        <h2 className="font-pixel text-3xl sm:text-5xl font-bold text-[#1E2B24] tracking-tight">
          WHERE I'VE WORKED
        </h2>
      </div>

      {/* Terminal Work Log Card */}
      <div
        className="w-full bg-white border-4 border-[#1E2B24] rounded-t-xl overflow-hidden"
        style={{ boxShadow: '8px 8px 0px #1E2B24' }}
      >
        {/* Terminal Header */}
        <div className="bg-[#1E2B24] px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#E5534B] inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#E6BA33] inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#4BB543] inline-block" />
          </div>
          <span className="font-pixel text-xs text-[#FAF8ED] font-bold tracking-wider">
            WORK_LOG.SH
          </span>
        </div>

        {/* Card Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h3 className="font-pixel text-xl sm:text-2xl font-bold text-[#1E2B24]">
                ILLUMINORA - SOFTWARE ENGINEER INTERN
              </h3>
            </div>
            <span
              className="font-pixel text-xs font-bold px-3 py-1.5 bg-[#D5E2D4] border-2 border-[#1E2B24] text-[#1E2B24] self-start"
            >
              SOLE DEVELOPER
            </span>
          </div>

          {/* Highlights List */}
          <ul className="space-y-3 list-disc list-inside text-[#1E2B24] font-sans text-sm sm:text-base font-medium leading-relaxed">
            {highlights.map((point, idx) => (
              <li key={idx} className="marker:text-[#1E2B24]">
                {point}
              </li>
            ))}
          </ul>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="font-pixel text-xs font-bold px-3 py-1.5 bg-white border-2 border-[#1E2B24] text-[#1E2B24]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}