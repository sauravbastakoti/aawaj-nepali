

import React, { useEffect, useRef, useState } from "react";
import { FaChalkboardTeacher, FaUserFriends, FaFlag, FaRocket } from "react-icons/fa";

const categoriesData = [
	{
		title: "Class Details",
		icon: <FaChalkboardTeacher size={40} />,
		desc: "Flexible online and in-person classes in major Belgian cities.",
		color: "border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100",
		btnColor: "bg-blue-600 text-white hover:bg-blue-700",
		iconColor: "#3b82f6",
	},
	{
		title: "Mentorship",
		icon: <FaUserFriends size={40} />,
		desc: "Personal mentors guide your growth and confidence.",
		color: "border-pink-500 bg-gradient-to-br from-pink-50 to-pink-100",
		btnColor: "bg-pink-600 text-white hover:bg-pink-700",
		iconColor: "#ec4899",
	},
	{
		title: "Nepali Trainers",
		icon: <FaFlag size={40} />,
		desc: "Expert trainers from Nepal lead every session.",
		color: "border-amber-500 bg-gradient-to-br from-amber-50 to-amber-100",
		btnColor: "bg-amber-600 text-white hover:bg-amber-700",
		iconColor: "#f59e0b",
	},
	{
		title: "Program Highlights",
		icon: <FaRocket size={40} />,
		desc: "Build confidence, leadership, and celebrate Nepali culture.",
		color: "border-green-500 bg-gradient-to-br from-green-50 to-green-100",
		btnColor: "bg-green-600 text-white hover:bg-green-700",
		iconColor: "#22c55e",
	},
];

function Categories() {
	const listRef = useRef(null);
	const [pages, setPages] = useState(1);
	const [active, setActive] = useState(0);

	useEffect(() => {
		function update() {
			const el = listRef.current;
			if (!el) return;
			const pageCount = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
			setPages(pageCount);
			setActive(Math.round(el.scrollLeft / el.clientWidth) || 0);
		}

		update();
		window.addEventListener("resize", update);
		return () => window.removeEventListener("resize", update);
	}, []);

	useEffect(() => {
		const el = listRef.current;
		if (!el) return;
		function onScroll() {
			const idx = Math.round(el.scrollLeft / el.clientWidth);
			setActive(idx);
		}
		el.addEventListener("scroll", onScroll, { passive: true });
		return () => el.removeEventListener("scroll", onScroll);
	}, []);

	function scrollToPage(idx) {
		const el = listRef.current;
		if (!el) return;
		el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
	}

	function next() {
		scrollToPage(Math.min(pages - 1, active + 1));
	}

	function prev() {
		scrollToPage(Math.max(0, active - 1));
	}

	return (
		<section className="py-16 px-4 text-center bg-gradient-to-br from-slate-50 via-white to-slate-50" aria-label="Program Info">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">Program Overview</h2>
				<p className="text-base md:text-lg text-slate-600 mb-12 font-medium">Everything you need to know before joining our program</p>

				{/* 4-Column Grid Layout - All on One Row */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-2 pb-6">
					{categoriesData.map((box, i) => (
						<article
							key={i}
							className={`relative rounded-2xl border-4 ${box.color} py-7 px-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
						>
							{/* Top-left circle with icon */}
							<div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-white border-4 border-inherit flex items-center justify-center shadow-md" style={{ borderColor: box.color.split(' ')[0].includes('blue') ? '#3b82f6' : box.color.split(' ')[0].includes('pink') ? '#ec4899' : box.color.split(' ')[0].includes('amber') ? '#f59e0b' : '#22c55e' }}>
								<span className="text-3xl flex items-center justify-center" style={{ color: box.iconColor }}>{box.icon}</span>
							</div>
							<h3 className="mt-8 mb-3 text-lg md:text-xl font-black text-slate-900 text-center tracking-tight">{box.title}</h3>
							<p className="text-slate-700 text-xs md:text-sm text-center mb-5 leading-snug font-medium">{box.desc}</p>
							<button className={`mt-auto rounded-full px-6 py-2 font-bold text-sm transition-all duration-200 shadow-md ${box.btnColor} hover:scale-105`}>Read More</button>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Categories;




// import React, { useEffect, useRef, useState } from "react";

// const categoriesData = [
// 	{ title: "Design", subtitle: "Creative", count: "573+" },
// 	{ title: "Sales", subtitle: "Marketing", count: "565+" },
// 	{ title: "Development", subtitle: "IT", count: "126+" },
// 	{ title: "Engineering", subtitle: "Architecture", count: "35+" },
// 	{ title: "Personal", subtitle: "Development", count: "908+" },
// 	{ title: "Finance", subtitle: "Accounting", count: "129+" },
// ];

// function IconPlaceholder() {
// 	return (
// 		<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// 			<path d="M3 12h18" stroke="#6B4FE9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
// 			<path d="M3 6h18" stroke="#6B4FE9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
// 			<path d="M3 18h18" stroke="#6B4FE9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
// 		</svg>
// 	);
// }

//  function Categories() {
// 	const listRef = useRef(null);
// 	const [pages, setPages] = useState(1);
// 	const [active, setActive] = useState(0);

// 	useEffect(() => {
// 		function update() {
// 			const el = listRef.current;
// 			if (!el) return;
// 			const pageCount = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
// 			setPages(pageCount);
// 			setActive(Math.round(el.scrollLeft / el.clientWidth) || 0);
// 		}

// 		update();
// 		window.addEventListener("resize", update);
// 		return () => window.removeEventListener("resize", update);
// 	}, []);

// 	useEffect(() => {
// 		const el = listRef.current;
// 		if (!el) return;
// 		function onScroll() {
// 			const idx = Math.round(el.scrollLeft / el.clientWidth);
// 			setActive(idx);
// 		}
// 		el.addEventListener("scroll", onScroll, { passive: true });
// 		return () => el.removeEventListener("scroll", onScroll);
// 	}, []);

// 	function scrollToPage(idx) {
// 		const el = listRef.current;
// 		if (!el) return;
// 		el.scrollTo({ left: idx * el.clientWidth, behavior: "smooth" });
// 	}

// 	function next() {
// 		scrollToPage(Math.min(pages - 1, active + 1));
// 	}

// 	function prev() {
// 		scrollToPage(Math.max(0, active - 1));
// 	}

// 	return (
// 		// <section className="py-20 px-6 text-center" aria-label="Top categories" style={{ background: 'rgb(128 118 150)' }}>
			
// 		<section className="py-20 px-6 text-center" aria-label="Top categories" style={{ background: 'rgb(252 251 253)' }}>
// 			<h2 className="text-2xl md:text-3xl font-extrabold text-[#231a3a] mb-1">Top Categories</h2>
// 			<p className="text-gray-400 mb-8">Lorem ipsum dolor sit amet, consectetur.</p>

// 			<div
// 				className="flex gap-6 justify-center items-stretch whitespace-nowrap overflow-x-auto px-4 pb-8"
// 				ref={listRef}
// 			>
// 				{categoriesData.map((c, i) => (
// 					<article
// 							key={i}
// 							className="bg-[#eef3f7] rounded-lg w-56 sm:w-60 min-w-[200px] py-8 px-5 flex flex-col items-center"
// 							role="group"
// 							aria-label={`${c.title} ${c.subtitle}`}
// 						>
// 						<div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4">
// 							<IconPlaceholder />
// 						</div>
// 						<div className="text-[#231a3a] font-semibold text-center mb-1">{c.title}</div>
// 						<div className="text-gray-500 text-sm">{c.subtitle}</div>
// 						<div className="mt-2 text-gray-400 text-xs">{c.count} Courses</div>
// 					</article>
// 				))}
// 			</div>

// 			<div className="flex items-center gap-6 justify-center mt-6">
// 				<button
// 					onClick={prev}
// 					aria-label="Previous"
// 					className="text-2xl text-[#231a3a] cursor-pointer select-none"
// 				>
// 					←
// 				</button>

// 				<div className="flex gap-2 items-center" role="tablist" aria-label="Pages">
// 					{Array.from({ length: pages }).map((_, i) => (
// 						<button
// 							key={i}
// 							onClick={() => scrollToPage(i)}
// 							role="tab"
// 							aria-selected={i === active}
// 							className={`w-2 h-2 rounded-full transition-colors ${
// 								i === active ? "bg-[#6b4fe9] ring-4 ring-[#6b4fe966]" : "bg-[#e6e6f2]"
// 							}`}
// 						/>
// 					))}
// 				</div>

// 				<button
// 					onClick={next}
// 					aria-label="Next"
// 					className="text-2xl text-[#231a3a] cursor-pointer select-none"
// 				>
// 					→
// 				</button>
// 			</div>
// 		</section>
// 	);
// }

// export default Categories;