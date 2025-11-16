import React from 'react'

const STATS = [
  { id: 1, value: '350,000+', label: 'Students worldwide' },
  { id: 2, value: '496,000+', label: 'Total course views' },
  { id: 3, value: '19,000+', label: 'Five-star course reviews' },
  { id: 4, value: '987,000+', label: 'Students community' },
]

export default function Stats() {
  return (
    <section className="w-full bg-gradient-to-r from-[#5d40f0] to-[#6c4cf7] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
          {STATS.map((s) => (
            <div key={s.id} className="py-6">
              <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#00ff80] leading-tight">
                {s.value}
              </div>
              <div className="text-sm md:text-sm text-white/90 mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
