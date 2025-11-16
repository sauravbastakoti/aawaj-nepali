import React from 'react'

const INSTRUCTORS = [
  {
    id: 1,
    name: 'Floyd Miles',
    role: 'President of Sales',
    rating: 4.5,
    students: 692,
    courses: 15,
    img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=7f5e7f3b',
  },
  {
    id: 2,
    name: 'Cameron Williamson',
    role: 'Web Designer',
    rating: 3.5,
    students: 692,
    courses: 15,
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8e4f8c1f',
  },
  {
    id: 3,
    name: 'Brooklyn Simmons',
    role: 'Dog Trainer',
    rating: 5,
    students: 692,
    courses: 15,
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=9c9d9d4a',
  },
  {
    id: 4,
    name: 'Wade Warren',
    role: 'Marketing Coordinator',
    rating: 4,
    students: 692,
    courses: 15,
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=b1a9f9d2',
  },
]

export default function Instructor() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-start justify-between gap-6 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#23123b]">Learn from the best instructors</h2>
            <p className="mt-2 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur.</p>
          </div>

          <div className="ml-auto">
            <button className="inline-flex items-center gap-2 bg-[#f3e9ff] text-[#6b4fe9] px-4 py-3 rounded-md text-sm">
              <span>View All Instructors</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#6b4fe9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTRUCTORS.map((ins) => (
            <div key={ins.id} className="">
              <div className="rounded-lg overflow-hidden shadow-sm">
                <img src={ins.img} alt={ins.name} className="w-full h-64 object-cover rounded-lg" />
              </div>

              <div className="mt-4">
                <div className="text-sm font-semibold text-[#23123b]">{ins.name}</div>
                <div className="text-xs text-gray-500 mt-1">{ins.role}</div>

                <div className="mt-3 flex items-center gap-4 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" stroke="#f6b93b" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-yellow-500">{ins.rating}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 2a5 5 0 00-5 5v2a5 5 0 005 5 5 5 0 005-5V7a5 5 0 00-5-5z" stroke="#6b4fe9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 22v-2a4 4 0 014-4h6a4 4 0 014 4v2" stroke="#6b4fe9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{ins.students} Students</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M21 15V8a2 2 0 00-2-2H5a2 2 0 00-2 2v7" stroke="#6b4fe9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 10l5 3 5-3" stroke="#6b4fe9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{ins.courses} Course</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Want to help people learn, grow and achieve more in life?
            <a className="text-[#6b4fe9] ml-1" href="#">Become an instructor</a>
          </p>
        </div>
      </div>
    </section>
  )
}
