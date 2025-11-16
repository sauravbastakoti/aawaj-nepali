import React from 'react'

const CARDS = [
	{
		id: 1,
		title: '01. Learn',
		body:
			'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
		icon: (
			<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
				<path d="M2 7v10a2 2 0 002 2h16V5H4a2 2 0 00-2 2z" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8 9h8v6H8z" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
	},
	{
		id: 2,
		title: '02. Graduate',
		body:
			'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
		icon: (
			<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
				<path d="M12 2l8 4-8 4-8-4 8-4z" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M4 10v4c0 1.1.9 2 2 2h12" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
	},
	{
		id: 3,
		title: '03. Work',
		body:
			'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
		icon: (
			<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
				<path d="M3 7h18v10H3z" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M8 12h8" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		),
	},
]

export default function Learn() {
	return (
		<section className="w-full bg-[#160633] text-white py-20">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center mb-12">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Why learn with our courses?</h2>
					<p className="mt-2 text-sm text-white/80">Lorem ipsum dolor sit amet, consectetur.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{CARDS.map((c) => (
						<div
							key={c.id}
							className="p-8 rounded-lg border border-white/6 bg-transparent shadow-sm hover:shadow-md transition"
							style={{ minHeight: 320 }}
						>
							<div className="flex flex-col items-center text-center h-full">
								<div className="mb-6">{c.icon}</div>
								<h3 className="text-lg font-bold mb-3">{c.title}</h3>
								<p className="text-sm text-white/80 max-w-[320px]">{c.body}</p>
								<div className="mt-auto" />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

