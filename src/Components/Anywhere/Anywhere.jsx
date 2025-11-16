import React from 'react'

export default function Anywhere() {
  return (
    <section className="bg-[#f2f7fa] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* left devices */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="relative flex items-center gap-6">
              {/* phone */}
              <div className="w-40 md:w-48 lg:w-56 transform -translate-x-6 lg:-translate-x-12 drop-shadow-md">
                <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=0a4c2d2b"
                    alt="phone mock"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>

              {/* tablet */}
              <div className="w-[520px] md:w-[640px] lg:w-[740px] bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
                <div className="w-full h-64 md:h-72 lg:h-80 bg-gradient-to-b from-[#0b0b1a] to-[#1a0633] flex items-center justify-center">
                  {/* Placeholder for the dark hero screenshot inside tablet */}
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=8d5a2d8e"
                    alt="tablet mock"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* right content */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#23123b]">
              Learn From
              <br />
              <span className="text-[#6c4cf7]">Anywhere</span>
            </h2>

            <p className="mt-5 text-sm text-[#4b4b63] max-w-md">
              Take classes on the go with the educart app. Stream or download to watch on the plane, the subway, or wherever you learn best.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-4 bg-[#160633] text-white rounded-lg px-5 py-3 shadow hover:opacity-95 transition"
              >
                {/* Apple icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M16.365 1.43c0 1.02-.37 2.03-1.07 2.85-.67.77-1.68 1.59-2.75 1.45-.06-1.06.38-2.12 1.1-2.86.75-.77 1.9-1.45 2.72-1.44z" fill="#fff" />
                  <path d="M20.7 7.28c-.48-1.15-1.44-2.07-2.7-2.7-1.23-.6-2.59-.34-3.66.22-1.03.54-1.92.54-2.95 0-1.06-.56-2.42-.82-3.65-.22-1.26.63-2.22 1.55-2.7 2.7C2.27 9.02 2 12.3 3.7 15c1.2 2 3.28 3.37 5.18 3.37.73 0 1.44-.2 2.05-.6.57-.36 1.36-.36 1.93 0 .61.4 1.32.6 2.05.6 1.9 0 4-1.37 5.18-3.37 1.7-2.7 1.43-5.98-.07-7.35z" fill="#fff" />
                </svg>
                <div className="text-left text-xs">
                  <div className="opacity-80">Download on the</div>
                  <div className="font-semibold">Apple Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-4 bg-[#160633] text-white rounded-lg px-5 py-3 shadow hover:opacity-95 transition"
              >
                {/* Play icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M4 4v16l16-8L4 4z" fill="#fff" />
                </svg>
                <div className="text-left text-xs">
                  <div className="opacity-80">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
