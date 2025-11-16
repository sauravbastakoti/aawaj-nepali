import React, { useRef } from 'react'

const TESTIMONIALS = [
  {
    id: 1,
    title: 'Great Work',
    quote:
      '“I think Awaz-Nepal is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”',
    name: 'Courtney Henry',
    role: 'Web Designer',
    avatar: '',
  },
  {
    id: 2,
    title: 'Great Work',
    quote:
      '“I think Awaz-Nepal is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”',
    name: 'Ronald Richards',
    role: 'President of Sales',
    avatar: '',
  },
  {
    id: 3,
    title: 'Great Work',
    quote:
      '“I think Awaz-Nepal is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”',
    name: 'Annette Black',
    role: 'Nursing Assistant',
    avatar: '',
  },
  {
    id: 4,
    title: 'Great Work',
    quote:
      '“I think Awaz-Nepal is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”',
    name: 'Courtney Henry',
    role: 'Web Designer',
    avatar: '',
  },
  {
    id: 5,
    title: 'Great Work',
    quote:
      '“I think Awaz-Nepal is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”',
    name: 'Samuel Green',
    role: 'Product Manager',
    avatar: '',
  },
]

export default function People() {
  const listRef = useRef(null)

  function scrollBy(offset) {
    const el = listRef.current
    if (!el) return
    el.scrollBy({ left: offset, behavior: 'smooth' })
  }

  function prev() {
    const el = listRef.current
    if (!el) return
    scrollBy(-el.clientWidth * 0.8)
  }

  function next() {
    const el = listRef.current
    if (!el) return
    scrollBy(el.clientWidth * 0.8)
  }

  return (
    <section className="bg-gradient-to-r from-[#5d40f0] to-[#6c4cf7] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center text-white mb-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00ff80]">What People Say</h2>
        <p className="text-sm md:text-base text-white/80 mt-2">Lorem ipsum dolor sit amet, consectetur.</p>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Carousel container */}
        <div
          ref={listRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 pb-6 touch-pan-x scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="snap-start flex-shrink-0 w-[320px] md:w-[360px] bg-white text-[#231a3a] rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-indigo-600 font-medium mb-3">{t.title}</h3>
              <p className="text-sm text-gray-600 mb-6">{t.quote}</p>

              <div className="border-t pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows - centered under carousel */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="w-10 h-10 rounded-full border border-white/60 text-white flex items-center justify-center hover:bg-white/10 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="w-10 h-10 rounded-full border border-white/60 text-white flex items-center justify-center hover:bg-white/10 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
