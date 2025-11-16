import React from 'react'

const STATS = [
  { id: 1, value: '350,000+', label: 'Students worldwide' },
  { id: 2, value: '496,000+', label: 'Total course views' },
  { id: 3, value: '19,000+', label: 'Five-star course reviews' },
  { id: 4, value: '987,000+', label: 'Students community' },
]

export default function Stats() {
  return (
    <section className="w-full bg-gradient-to-r from-[#5d40f0] to-[#6c4cf7] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* responsive: stack single column on very small, two columns on sm, four on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-stretch text-center">
          {STATS.map((s) => (
            <div key={s.id} className="py-6 px-4 flex flex-col items-center justify-center min-h-[96px]">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#00ff80] leading-tight">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm md:text-sm text-white/90 mt-2">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA below stats - responsive placement: full width on mobile, auto on larger */}
        <div className="mt-6 flex justify-center">
          <a
            href="#courses"
            className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm w-full max-w-xs text-center"
          >
            Explore Courses
          </a>
        </div>
      </div>
    </section>
  )
}
