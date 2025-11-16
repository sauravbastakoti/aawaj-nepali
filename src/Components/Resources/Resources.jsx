import React from 'react'

const FEATURE_POSTS = [
  {
    id: 1,
    category: 'WRITING',
    title: 'Eco–Education in Our Lives: We Can Change the Future',
    date: 'January 5, 2023',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c',
  },
  {
    id: 2,
    category: 'EDUCATION',
    title: 'Engendering a culture of professional development',
    date: 'February 18, 2023',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b3c4d',
  },
]

const SIDE_POSTS = [
  {
    id: 1,
    category: 'DESIGN',
    title: 'Summer School 2022',
    date: '6 April, 2022',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3c4d5e',
  },
  {
    id: 2,
    category: 'ANIMATION',
    title: 'Summer School 2022',
    date: '6 April, 2022',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4d5e6f',
  },
  {
    id: 3,
    category: 'WRITING',
    title: 'Summer School 2022',
    date: '6 April, 2022',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5e6f7g',
  },
]

export default function Resources() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#23123b]">Resources & News</h2>
            <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>

          <div>
            <button className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg shadow-sm hover:bg-purple-50 transition">
              Browse Blog
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* main posts */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURE_POSTS.map((p) => (
              <article key={p.id} className="bg-white rounded-lg">
                <div className="overflow-hidden rounded-lg">
                  <img src={p.image} alt={p.title} className="w-full h-64 object-cover block" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-purple-600 font-semibold">{p.category}</div>
                  <h3 className="mt-3 text-xl font-semibold text-[#23123b]">{p.title}</h3>
                  <div className="mt-4 text-sm text-gray-500">{p.date}</div>
                </div>
              </article>
            ))}
          </div>

          {/* sidebar list */}
          <aside className="lg:col-span-4">
            <div className="space-y-6">
              {SIDE_POSTS.map((s) => (
                <div key={s.id} className="flex items-start gap-4">
                  <img src={s.image} alt={s.title} className="w-20 h-20 object-cover rounded-lg" />
                  <div>
                    <div className="text-xs text-purple-600 font-semibold">{s.category}</div>
                    <div className="mt-1 font-medium text-sm text-[#23123b]">{s.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
