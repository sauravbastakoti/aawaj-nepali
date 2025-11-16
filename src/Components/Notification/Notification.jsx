
import React, { useState, useEffect, useRef } from 'react'

// Header bar styled to match the provided image
const NotificationBar = () => {
	const [open, setOpen] = useState(false)
	const panelRef = useRef(null)

	// close on Escape
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === 'Escape') setOpen(false)
		}
		document.addEventListener('keydown', onKey)
		return () => document.removeEventListener('keydown', onKey)
	}, [])

	// close when clicking outside the panel
	useEffect(() => {
		if (!open) return
		const onClick = (e) => {
			if (panelRef.current && !panelRef.current.contains(e.target)) {
				setOpen(false)
			}
		}
		document.addEventListener('mousedown', onClick)
		return () => document.removeEventListener('mousedown', onClick)
	}, [open])

	// lock body scroll while panel is open and avoid layout shift by compensating scrollbar
	useEffect(() => {
		if (open) {
			const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
			if (scrollBarWidth > 0) {
				document.body.style.paddingRight = `${scrollBarWidth}px`
				document.documentElement.style.paddingRight = `${scrollBarWidth}px`
			}
			document.body.style.overflow = 'hidden'
			document.documentElement.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
			document.body.style.paddingRight = ''
			document.documentElement.style.overflow = ''
			document.documentElement.style.paddingRight = ''
		}
		return () => {
			document.body.style.overflow = ''
			document.body.style.paddingRight = ''
			document.documentElement.style.overflow = ''
			document.documentElement.style.paddingRight = ''
		}
	}, [open])

	return (
		<>
			<header className="fixed top-0 left-0 right-0 z-40 bg-[#1a0841] px-4 md:px-14 h-20 shadow-sm">
				{/* logo placed absolutely at the viewport left so it stays flush */}
				<div className="absolute left-3 md:left-6 top-1/2 transform -translate-y-1/2 flex items-center gap-3 z-50">
					<div className="w-12 h-12 rounded-full bg-[#6c4cf7] flex items-center justify-center">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#6c4cf7"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
					</div>
					<span className="text-white font-bold text-lg tracking-tight">Awaz-Nepal</span>
				</div>
				{/* center content and limit width so header doesn't feel too wide on large screens */}
				{/* add left padding so the centered nav doesn't get overlapped by the absolute logo */}
				<div className="max-w-6xl mx-auto w-full relative pl-20 md:pl-28 flex items-center justify-between h-full">
			{/* Center: Nav links (hidden on small screens) */}
				<nav className="hidden md:flex flex-1 justify-center gap-8 h-full items-center">
				<a href="#" className="text-[#7c6ad6] font-medium hover:text-white transition">Home <span className="ml-1">▼</span></a>
				<a href="#" className="text-white font-medium hover:text-[#00e6a0] transition">Courses <span className="ml-1">▼</span></a>
				<a href="#" className="text-white font-medium hover:text-[#00e6a0] transition">Events <span className="ml-1">▼</span></a>
				<a href="#" className="text-white font-medium hover:text-[#00e6a0] transition">Blog <span className="ml-1">▼</span></a>
				<a href="#" className="text-white font-medium hover:text-[#00e6a0] transition">Pages <span className="ml-1">▼</span></a>
				<a href="#" className="text-white font-medium hover:text-[#00e6a0] transition">Contact</a>
			</nav>
			{/* Right: Search, Cart, Auth (hidden on very small screens) + mobile toggle */}
				<div className="flex items-center gap-6 h-full">
				<button className="hidden sm:inline text-white text-xl hover:text-[#00e6a0] transition inline-flex items-center h-full">
					<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
				</button>
				<div className="hidden sm:relative sm:inline">
					<button className="text-white text-xl hover:text-[#00e6a0] transition inline-flex items-center h-full">
						<svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 6h15l-1.5 9h-13z"/><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/></svg>
					</button>
					<span className="absolute -top-2 -right-2 bg-[#ff3b5c] text-white text-xs font-bold rounded-full px-1">0</span>
				</div>
				<a href="#" className="hidden sm:inline text-white font-medium underline inline-flex items-center h-full">Log in</a>
				<a href="#" className="hidden sm:inline ml-2 px-4 py-2 bg-white text-[#1a0841] rounded-md font-medium inline-flex items-center">Sign up</a>

				{/* Mobile toggle button - pinned to the right so it can't overlap the logo/name */}
				<button
					className="md:hidden absolute right-3 top-1/2 transform -translate-y-1/2 z-50 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/5"
					aria-label="Open menu"
					aria-expanded={open}
					onClick={() => setOpen(true)}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
				</button>
					</div>
					{/* end inner container */}
				</div>
				</header>
			{/* spacer with same height as header to avoid content being hidden under fixed header */}
			{/* increased on small screens to add breathing room under the fixed header */}
			<div aria-hidden className="h-20 md:h-16" />

			{/* Mobile sidebar panel + overlay */}
				<div
					className={`fixed inset-0 z-60 transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
				aria-hidden={!open}
			>
				{/* overlay */}
				<div className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} />

				{/* panel */}
				<aside
					ref={panelRef}
					role="dialog"
					aria-label="Main menu"
					tabIndex={-1}
					className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-[#1a0841] text-white p-6 transform transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}
				>
					<div className="flex items-center justify-between mb-6">
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-full bg-[#6c4cf7] flex items-center justify-center">
								<svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#6c4cf7"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
							</div>
							<span className="font-bold">Awaz-Nepal</span>
						</div>
						<button
							className="p-2 rounded-md text-white hover:bg-white/5"
							aria-label="Close menu"
							onClick={() => setOpen(false)}
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6"/></svg>
						</button>
					</div>

					<nav className="flex flex-col gap-4">
						<a href="#" className="text-[#d6ccff] font-medium">Home</a>
						<a href="#" className="text-white font-medium">Courses</a>
						<a href="#" className="text-white font-medium">Events</a>
						<a href="#" className="text-white font-medium">Blog</a>
						<a href="#" className="text-white font-medium">Pages</a>
						<a href="#" className="text-white font-medium">Contact</a>
					</nav>

					<div className="mt-6 border-t border-white/10 pt-6 flex flex-col gap-3">
						<a href="#" className="text-white font-medium underline">Log in</a>
						<a href="#" className="px-4 py-2 bg-white text-[#1a0841] rounded-md font-medium inline-block w-max">Sign up</a>
					</div>
				</aside>
			</div>
		</>
	)
}

export default NotificationBar