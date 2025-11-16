

const Hero = () => {
	return (
		<>
			{/* Divider line between navbar and hero */}
			<div className="w-full border-b border-[#2a1767]" style={{marginTop: '-2px'}}></div>
			<section className="relative w-full bg-[#1a0841] min-h-[700px] flex items-center justify-center px-8 py-16 overflow-hidden">
				{/* Large decorative circle behind buttons on left */}
				<div className="absolute left-[-180px] top-[180px] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#2a1767] via-[#2a1767] to-transparent opacity-80 z-0"></div>
				{/* Left: Headline and actions */}
				<div className="flex-1 max-w-xl z-10">
					<h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
						Learn New Skills Online<br />
						with Top <span className="text-[#00e6a0] underline decoration-4">Educators</span>
					</h1>
					<p className="text-lg text-white/80 mb-8">
						Build skills with courses, certificates, and degrees online from world-class universities and companies.
					</p>
					<div className="flex gap-4 mb-10">
						<button className="px-8 py-3 rounded-md bg-[#6c4cf7] text-white font-semibold text-lg shadow hover:bg-[#5a3ed1] transition">Join For Free</button>
						<button className="px-8 py-3 rounded-md border-2 border-[#00e6a0] text-[#00e6a0] font-semibold text-lg bg-transparent hover:bg-[#00e6a0] hover:text-[#1a0841] transition">Find Courses</button>
					</div>
					<div className="flex gap-10 mt-8">
						<div className="flex items-center gap-2">
							<span className="text-white text-xl"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2l7 7-7 7-7-7 7-7z" fill="#fff"/></svg></span>
							<span className="text-white/80 text-base">Over 12 million students</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-white text-xl"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="2"/></svg></span>
							<span className="text-white/80 text-base">More than 60,000 courses</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="text-white text-xl"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="3" stroke="#fff" strokeWidth="2"/></svg></span>
							<span className="text-white/80 text-base">Learn anything online</span>
						</div>
					</div>
				</div>

				{/* Right: Collage of images and cards */}
				<div className="flex-1 flex items-center justify-center relative min-h-[500px]">
					{/* Main image */}
					<div className="absolute top-16 left-1/2 -translate-x-1/2 z-10">
						<div className="w-72 h-80 rounded-2xl overflow-hidden shadow-lg bg-slate-200">
							<img src="/assets/img/hero-main.jpg" alt="Student" className="object-cover w-full h-full" />
						</div>
					</div>
					{/* Top right image */}
					<div className="absolute top-0 right-24 z-20">
						<div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg bg-slate-200">
							<img src="/assets/img/hero-top.jpg" alt="Educator" className="object-cover w-full h-full" />
						</div>
					</div>
					{/* Bottom right image */}
					<div className="absolute bottom-0 right-16 z-20">
						<div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg bg-slate-200">
							<img src="/assets/img/hero-bottom.jpg" alt="Student" className="object-cover w-full h-full" />
						</div>
					</div>
					{/* Card: Educator info */}
					<div className="absolute top-36 left-[60%] z-30">
						<div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-4 min-w-[220px]">
							<div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
								<img src="/assets/img/educator.jpg" alt="Ali Tufan" className="object-cover w-full h-full" />
							</div>
							<div>
								<div className="font-semibold text-slate-900">Ali Tufan</div>
								<div className="text-xs text-slate-500">UX/UI Designer</div>
								<div className="flex gap-1 mt-1">
									{[...Array(5)].map((_, i) => (
										<svg key={i} width="14" height="14" fill="#FFD700" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
									))}
								</div>
							</div>
						</div>
					</div>
					{/* Card: Free Courses */}
					<div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30">
						<div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-4 min-w-[220px]">
							<div className="w-12 h-12 rounded-full bg-[#ffe6e6] flex items-center justify-center">
								<svg width="24" height="24" fill="#ff3b5c" viewBox="0 0 24 24"><path d="M4 7V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1"/><rect x="4" y="7" width="16" height="13" rx="2" fill="#ff3b5c" opacity="0.1"/></svg>
							</div>
							<div>
								<div className="font-semibold text-[#ff3b5c] text-lg">3,000 +</div>
								<div className="text-xs text-slate-500">Free Courses</div>
							</div>
						</div>
					</div>
					{/* Card: Admission Completed */}
					<div className="absolute bottom-0 left-[60%] z-30">
						<div className="bg-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-4 min-w-[220px]">
							<div className="w-12 h-12 rounded-full bg-[#e6e6ff] flex items-center justify-center">
								<svg width="24" height="24" fill="#6c4cf7" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6c4cf7" opacity="0.1"/><path d="M12 17l5-5-1.41-1.41L12 14.17l-2.59-2.58L8 12l4 4z" fill="#6c4cf7"/></svg>
							</div>
							<div>
								<div className="font-semibold text-[#6c4cf7] text-base">Congrats!</div>
								<div className="text-xs text-slate-500">Your Admission Completed</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Hero;
