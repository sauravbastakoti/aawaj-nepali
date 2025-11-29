// import React from 'react'

// const CARDS = [
// 	{
// 		id: 1,
// 		title: '01. Learn',
// 		body:
// 			'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
// 		icon: (
// 			<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
// 				<path d="M2 7v10a2 2 0 002 2h16V5H4a2 2 0 00-2 2z" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// 				<path d="M8 9h8v6H8z" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// 			</svg>
// 		),
// 	},
// 	{
// 		id: 2,
// 		title: '02. Graduate',
// 		body:
// 			'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
// 		icon: (
// 			<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
// 				<path d="M12 2l8 4-8 4-8-4 8-4z" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// 				<path d="M4 10v4c0 1.1.9 2 2 2h12" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// 			</svg>
// 		),
// 	},
// 	{
// 		id: 3,
// 		title: '03. Work',
// 		body:
// 			'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.',
// 		icon: (
// 			<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
// 				<path d="M3 7h18v10H3z" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// 				<path d="M8 12h8" stroke="#00ff80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// 			</svg>
// 		),
// 	},
// ]

// export default function Learn() {
// 	return (
// 		<section className="w-full bg-[#160633] text-white py-20">
// 			<div className="max-w-7xl mx-auto px-6">
// 				<div className="text-center mb-12">
// 					<h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Why learn with our courses?</h2>
// 					<p className="mt-2 text-sm text-white/80">Lorem ipsum dolor sit amet, consectetur.</p>
// 				</div>

// 				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 					{CARDS.map((c) => (
// 						<div
// 							key={c.id}
// 							className="p-8 rounded-lg border border-white/6 bg-transparent shadow-sm hover:shadow-md transition"
// 							style={{ minHeight: 320 }}
// 						>
// 							<div className="flex flex-col items-center text-center h-full">
// 								<div className="mb-6">{c.icon}</div>
// 								<h3 className="text-lg font-bold mb-3">{c.title}</h3>
// 								<p className="text-sm text-white/80 max-w-[320px]">{c.body}</p>
// 								<div className="mt-auto" />
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

import { FaChalkboardTeacher, FaUserFriends, FaFlag, FaRocket } from 'react-icons/fa';

export default function Learn() {
	return (
		<section className="w-full bg-white py-20">
			<div className="max-w-5xl mx-auto px-6">
				<div className="text-center mb-12">
					  <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2">More than just a class</h2>
					  <p className="text-black">Explore what you gain with us</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 justify-items-center">
					{[{
						title: 'Class Details',
						desc: 'Flexible online and in-person classes in major Belgian cities.',
						icon: <FaChalkboardTeacher size={52} className="text-blue-500 drop-shadow" />,
						bg: 'bg-blue-50',
						border: 'border-blue-400',
						shadow: 'shadow-blue-100',
					}, {
						title: 'Mentorship',
						desc: 'Personal mentors guide your growth and confidence.',
						icon: <FaUserFriends size={52} className="text-pink-500 drop-shadow" />,
						bg: 'bg-pink-50',
						border: 'border-pink-400',
						shadow: 'shadow-pink-100',
					}, {
						title: 'Nepali Trainers',
						desc: 'Expert trainers from Nepal lead every session.',
						icon: <FaFlag size={52} className="text-yellow-500 drop-shadow" />,
						bg: 'bg-yellow-50',
						border: 'border-yellow-400',
						shadow: 'shadow-yellow-100',
					}, {
						title: 'Program Highlights',
						desc: 'Build confidence, leadership, and celebrate Nepali culture.',
						icon: <FaRocket size={52} className="text-green-500 drop-shadow" />,
						bg: 'bg-green-50',
						border: 'border-green-400',
						shadow: 'shadow-green-100',
					}].map((card, i) => (
						<div
							key={i}
							className={`w-full min-w-[220px] max-w-[320px] min-h-[260px] rounded-3xl bg-white ${card.shadow} px-8 py-10 flex flex-col items-center text-center border-4 ${card.border} transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-1`}
						>
							<div className={`w-20 h-20 flex items-center justify-center rounded-full mb-7 ${card.bg} border-2 ${card.border} shadow-md`}>
								{card.icon}
							</div>
							  <h3 className="font-extrabold text-2xl md:text-3xl text-black mb-2 tracking-wide">{card.title}</h3>
							  <p className="text-black text-lg mb-7 font-medium">{card.desc}</p>
							  <button className={`mt-auto px-8 py-3 rounded-full font-bold text-base shadow transition ${card.border} bg-white text-black hover:bg-gray-100 hover:text-blue-700`}>Read More</button>
						</div>
					))}
				</div>
				<div className="flex justify-center">
					  <button className="px-7 py-3 rounded-md bg-black text-white font-semibold text-base shadow hover:bg-gray-800 transition">View all features</button>
				</div>
			</div>
		</section>
	);
}

