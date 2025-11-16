import React, { useEffect, useRef, useState } from "react";

const categoriesData = [
	{ title: "Design", subtitle: "Creative", count: "573+" },
	{ title: "Sales", subtitle: "Marketing", count: "565+" },
	{ title: "Development", subtitle: "IT", count: "126+" },
	{ title: "Engineering", subtitle: "Architecture", count: "35+" },
	{ title: "Personal", subtitle: "Development", count: "908+" },
	{ title: "Finance", subtitle: "Accounting", count: "129+" },
];

function IconPlaceholder() {
	return (
		<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M3 12h18" stroke="#6B4FE9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M3 6h18" stroke="#6B4FE9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
			<path d="M3 18h18" stroke="#6B4FE9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
		</svg>
	);
}

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
		// <section className="py-20 px-6 text-center" aria-label="Top categories" style={{ background: 'rgb(128 118 150)' }}>
			
		<section className="py-20 px-6 text-center" aria-label="Top categories" style={{ background: 'rgb(252 251 253)' }}>
			<h2 className="text-2xl md:text-3xl font-extrabold text-[#231a3a] mb-1">Top Categories</h2>
			<p className="text-gray-400 mb-8">Lorem ipsum dolor sit amet, consectetur.</p>

			<div
				className="flex gap-6 justify-center items-stretch whitespace-nowrap overflow-x-auto px-4 pb-8"
				ref={listRef}
			>
				{categoriesData.map((c, i) => (
					<article
							key={i}
							className="bg-[#eef3f7] rounded-lg w-56 sm:w-60 min-w-[200px] py-8 px-5 flex flex-col items-center"
							role="group"
							aria-label={`${c.title} ${c.subtitle}`}
						>
						<div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mb-4">
							<IconPlaceholder />
						</div>
						<div className="text-[#231a3a] font-semibold text-center mb-1">{c.title}</div>
						<div className="text-gray-500 text-sm">{c.subtitle}</div>
						<div className="mt-2 text-gray-400 text-xs">{c.count} Courses</div>
					</article>
				))}
			</div>

			<div className="flex items-center gap-6 justify-center mt-6">
				<button
					onClick={prev}
					aria-label="Previous"
					className="text-2xl text-[#231a3a] cursor-pointer select-none"
				>
					←
				</button>

				<div className="flex gap-2 items-center" role="tablist" aria-label="Pages">
					{Array.from({ length: pages }).map((_, i) => (
						<button
							key={i}
							onClick={() => scrollToPage(i)}
							role="tab"
							aria-selected={i === active}
							className={`w-2 h-2 rounded-full transition-colors ${
								i === active ? "bg-[#6b4fe9] ring-4 ring-[#6b4fe966]" : "bg-[#e6e6f2]"
							}`}
						/>
					))}
				</div>

				<button
					onClick={next}
					aria-label="Next"
					className="text-2xl text-[#231a3a] cursor-pointer select-none"
				>
					→
				</button>
			</div>
		</section>
	);
}

export default Categories;