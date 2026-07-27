import React from 'react';

export default function HeroStatsTerminal() {
  const stats = [
    { label: 'DSA PROBLEMS SOLVED', value: '600+' },
    { label: 'REPOSITORIES', value: '25' },
    { label: 'LIVE DEPLOYMENTS', value: '20+' },
    { label: 'DEV INTERNSHIP', value: '1' },
  ];

  return (
    <div 
      className="w-full max-w-md bg-[#FAF8ED] border-4 border-[#1E2B24] rounded-t-xl overflow-hidden font-pixel"
      style={{ boxShadow: '6px 6px 0px #1E2B24' }}
    >
      {/* CLI Window Title Bar */}
      <div className="border-b-4 border-[#1E2B24] px-4 py-2 flex items-center justify-between bg-[#FAF8ED]">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-[#E5534B] border-2 border-[#1E2B24] inline-block" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#E6BA33] border-2 border-[#1E2B24] inline-block" />
          <span className="w-3.5 h-3.5 rounded-full bg-[#4BB543] border-2 border-[#1E2B24] inline-block" />
        </div>
        <span className="text-[13px] font-bold tracking-wider text-[#1E2B24]">
          YASHASWI CLI
        </span>
      </div>

      {/* CLI Main Content */}
      <div className="p-6 space-y-5">
        <div>
          <div className="text-[#DCA832] text-sm font-bold mb-4 flex items-center gap-1">
            <span>$</span> STATS
          </div>

          <div className="space-y-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-baseline justify-between text-[#1E2B24]"
              >
                <span className="text-3xl font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[13px] text-[#71717A] tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashed Separator */}
        <div className="border-b-2 border-dashed border-[#1E2B24] my-4" />

        {/* Status */}
        <div className="space-y-2">
          <div className="text-[13px] font-bold tracking-widest text-[#1E2B24] uppercase">
            STATUS
          </div>
          <div className="flex items-center gap-2.5 text-sm font-bold text-[#1E2B24]">
            <span className="w-3 h-3 rounded-full bg-[#4BB543] inline-block" />
            <span className="font-sans font-semibold">Open to Opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
}