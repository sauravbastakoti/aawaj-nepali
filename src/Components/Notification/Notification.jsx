
// Header bar styled to match the provided image
const NotificationBar = () => {
	// keep header fixed to top and add a spacer so page content doesn't jump under it
	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-50 bg-[#1a0841] px-6 md:px-14 h-16 flex items-center justify-between shadow-sm">
			{/* Left: Logo and Educrat */}
			<div className="flex items-center gap-4">
				<div className="w-12 h-12 rounded-full bg-[#6c4cf7] flex items-center justify-center">
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#6c4cf7"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
				</div>
				<span className="text-white font-bold text-lg tracking-tight">Awaz-Nepal</span>
				<button className="flex items-center gap-1 text-[#00e6a0] font-medium ml-4">
					<svg width="20" height="20" fill="none" stroke="#00e6a0" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
					Explore
				</button>
			</div>
			{/* Center: Nav links */}
			<nav className="flex-1 flex justify-center gap-8">
				<a href="#" className="text-[#7c6ad6] font-medium hover:text-white transition">Home <span className="ml-1">▼</span></a>
				<a href="#" className="text-white font-medium hover:text-[#00e6a0] transition">Courses <span className="ml-1">▼</span></a>
				<a href="#" className="text-white font-medium hover:text-[#00e6a0] transition">Events <span className="ml-1">▼</span></a>
				<a href="#" className="text-white font-medium hover:text-[#00e6a0] transition">Blog <span className="ml-1">▼</span></a>
				<a href="#" className="text-white font-medium hover:text-[#00e6a0] transition">Pages <span className="ml-1">▼</span></a>
				<a href="#" className="text-white font-medium hover:text-[#00e6a0] transition">Contact</a>
			</nav>
			{/* Right: Search, Cart, Auth */}
			<div className="flex items-center gap-6">
				<button className="text-white text-xl hover:text-[#00e6a0] transition">
					<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
				</button>
				<div className="relative">
					<button className="text-white text-xl hover:text-[#00e6a0] transition">
						<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></svg>
					</button>
					<span className="absolute -top-2 -right-2 bg-[#ff3b5c] text-white text-xs font-bold rounded-full px-1">0</span>
				</div>
				<a href="#" className="text-white font-medium underline">Log in</a>
				<a href="#" className="ml-2 px-4 py-2 bg-white text-[#1a0841] rounded-md font-medium">Sign up</a>
			</div>
			</header>
			{/* spacer with same height as header to avoid content being hidden under fixed header */}
			<div aria-hidden className="h-16" />
		</>
	)
}

export default NotificationBar