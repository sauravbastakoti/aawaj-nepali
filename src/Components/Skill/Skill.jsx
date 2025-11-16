import React from 'react'

const FEATURES = [
  'Hand-picked authors',
  'Easy to follow curriculum',
  'Free courses',
  'Money-back guarantee',
]

export default function Skill() {
  return (
    <section className="bg-[#fdfbf6] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#23123b] leading-tight">
              <span className="text-[#6c4cf7]">Learn</span>
              <span> new skills when</span>
              <br />
              <span>and where you like.</span>
            </h2>

            <p className="mt-6 text-sm text-[#2b2340] max-w-md">
              Use the list below to bring attention to your product’s key differentiator.
            </p>

            <ul className="mt-8 space-y-4">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-1 inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#6c4cf7]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M20 6L9 17l-5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-[#2b2340] mt-1">{f}</span>
                </li>
              ))}
            </ul>

            <button className="mt-8 inline-block bg-[#160633] text-white px-6 py-3 rounded-lg shadow-md hover:opacity-95 transition">
              Join Free
            </button>
          </div>

          {/* Right image - clipped corner + fold */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] md:max-w-[520px] lg:max-w-[560px]">
              <div
                className="rounded-2xl overflow-hidden shadow-xl h-64 md:h-[460px] lg:h-[600px]"
                style={{
                  borderRadius: '16px',
                  clipPath:
                    'polygon(0 0, calc(100% - 72px) 0, 100% 72px, 100% 100%, 0% 100%)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=7a6a1b33"
                  alt="Person looking out"
                  className="w-full h-full object-cover block"
                />
              </div>

              {/* folded corner triangle */}
              <div
                className="absolute"
                style={{
                  right: 0,
                  top: 0,
                  width: '72px',
                  height: '72px',
                  background: '#efe6d9',
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                  borderTopRightRadius: '12px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
