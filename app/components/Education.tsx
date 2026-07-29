
export default function Education() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 space-y-8">
      {/* Section Header */}
      <div className="space-y-2">
        <p className="font-pixel text-xs font-bold text-[#DCA832] tracking-widest uppercase">
          EDUCATION
        </p>
        <h2 className="font-pixel text-3xl sm:text-5xl font-black text-[#1E2B24] tracking-tight uppercase">
          WHERE I'VE STUDIED
        </h2>
      </div>

      {/* Degree Card */}
      <div
        className="w-full bg-white border-4 border-[#1E2B24] p-6 sm:p-8 space-y-6"
        style={{ boxShadow: '8px 8px 0px #1E2B24' }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-pixel text-xl sm:text-2xl font-extrabold text-[#1E2B24]">
              INDIAN INSTITUTE OF INFORMATION TECHNOLOGY RANCHI
            </h3>
            {/* College Name Column / Row */}
            <p className="font-pixel text-md font-bold text-[#DCA832]">
              B.TECH, COMPUTER SCIENCE
            </p>
          </div>

          <span
            className="font-pixel text-xs font-bold px-3.5 py-2 bg-[#DCA832] border-2 border-[#1E2B24] text-[#1E2B24] self-start md:self-auto"
          >
            2023 – 2027
          </span>
        </div>

        {/* Dashed Separator */}
        <div className="border-b-2 border-dashed border-[#1E2B24]" />

        {/* Metrics Grid */}
        <div className="flex flex-wrap items-center gap-12">
          <div>
            <div className="font-pixel text-2xl sm:text-3xl font-extrabold text-[#1E2B24]">
              8.17
            </div>
            <div className="text-xs font-bold text-[#71717A] tracking-wider uppercase">
              CGPA
            </div>
          </div>

          <div>
            <div className="font-pixel text-xl sm:text-2xl font-extrabold text-[#1E2B24]">
              FINAL YEAR
            </div>
            <div className="text-xs font-bold text-[#71717A] tracking-wider uppercase">
              CURRENT STANDING
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#1E2B24] font-sans text-base sm:text-lg font-medium leading-relaxed max-w-7xl">
        <span className="font-bold">Relevant Coursework:</span> Data Structures & Algorithms, Operating Systems, Database Management Systems,
Object-Oriented Programming, Software Development Life Cycle, Computer Networks
      </p>
    </section>
  );
}