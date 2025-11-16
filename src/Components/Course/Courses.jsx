import React, { useMemo, useState } from 'react'

const CATEGORIES = [
	'All Categories',
	'Animation',
	'Design',
	'Photography',
	'Art',
	'Programming',
	'Writing',
]

const SAMPLE_COURSES = [
	{
		id: 1,
		title: 'Learn Figma - UI/UX Design Essential Training',
		author: 'Jane Cooper',
		rating: 4.3,
		reviews: 1991,
		lessons: 6,
		duration: '22h 0m',
		level: 'Beginner',
		priceOld: '$199',
		price: '$79',
		category: 'Design',
	},
	{
		id: 2,
		title: 'Complete Python Bootcamp From Zero to Hero in Python',
		author: 'Jenny Wilson',
		rating: 4.7,
		reviews: 1991,
		lessons: 6,
		duration: '6h 50m',
		level: 'Expert',
		priceOld: '$189',
		price: '$89',
		category: 'Programming',
	},
	{
		id: 3,
		title: 'Angular – The Complete Guide (2022 Edition)',
		author: 'Albert Flores',
		rating: 4.5,
		reviews: 1991,
		lessons: 6,
		duration: '20h 20m',
		level: 'Intermediate',
		priceOld: '$249',
		price: '$129',
		category: 'Programming',
	},
	{
		id: 4,
		title: 'The Ultimate Drawing Course Beginner to Advanced',
		author: 'Jacob Jones',
		rating: 4.2,
		reviews: 1991,
		lessons: 6,
		duration: '17h 0m',
		level: 'Expert',
		priceOld: '$179',
		price: '$99',
		category: 'Art',
	},
]

function CategoryPills({ categories, active, onChange }) {
	return (
		<div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
			{categories.map((c) => {
				const isActive = c === active
				return (
					<button
						key={c}
						onClick={() => onChange(c)}
						className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 ${
							isActive
								? 'bg-indigo-100 text-indigo-700 shadow-sm'
								: 'text-gray-700 bg-transparent hover:text-indigo-600'
						}`}
						aria-pressed={isActive}
					>
						{c}
						{/* active indicator: small animated dot */}
						{isActive && (
							<span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-500 rounded-full shadow animate-pulse" />
						)}
					</button>
				)
			})}
		</div>
	)
}

function CourseCard({ course }) {
	return (
		<article className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1">
			<div className="h-44 bg-gray-100 flex items-center justify-center">
				{/* Placeholder image block */}
				<div className="w-full h-full bg-[linear-gradient(135deg,#e9eefc,#f7f8fd)]" />
			</div>

			<div className="p-4">
				<div className="flex items-center justify-between text-xs text-gray-500 mb-2">
					<div className="flex items-center gap-2">
						<span className="text-yellow-500 font-semibold">{course.rating}</span>
						<div className="text-gray-400">★</div>
						<span className="text-gray-400">({course.reviews})</span>
					</div>
				</div>

				<h3 className="text-sm font-semibold text-[#231a3a] mb-2">{course.title}</h3>

				<div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
					<div className="flex items-center gap-2">📘 <span>{course.lessons} lesson</span></div>
					<div className="flex items-center gap-2">⏱ <span>{course.duration}</span></div>
					<div className="flex items-center gap-2">🔰 <span>{course.level}</span></div>
				</div>

				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-sm">J</div>
						<div className="text-xs text-gray-600">{course.author}</div>
					</div>

					<div className="text-right">
						<div className="text-xs text-gray-400 line-through">{course.priceOld}</div>
						<div className="text-sm font-bold text-[#231a3a]">{course.price}</div>
					</div>
				</div>
			</div>
		</article>
	)
}

export default function Courses() {
	const [activeCategory, setActiveCategory] = useState('All Categories')

	const filtered = useMemo(() => {
		if (activeCategory === 'All Categories') return SAMPLE_COURSES
		return SAMPLE_COURSES.filter((c) => c.category === activeCategory)
	}, [activeCategory])

	return (
		<section className="max-w-7xl mx-auto px-6 py-16">
			<div className="text-center mb-8">
				<h2 className="text-3xl md:text-4xl font-extrabold text-[#231a3a]">Our Most Popular Courses</h2>
				<p className="text-gray-500 mt-2">10,000+ unique online course list designs</p>
			</div>

			<div className="flex flex-col items-center md:items-start gap-6 mb-8">
				<CategoryPills categories={CATEGORIES} active={activeCategory} onChange={setActiveCategory} />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				{filtered.map((c) => (
					<CourseCard key={c.id} course={c} />
				))}
			</div>
		</section>
	)
}

