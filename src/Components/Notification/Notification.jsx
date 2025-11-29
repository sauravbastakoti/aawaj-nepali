
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
			<header className="fixed top-0 left-0 right-0 z-40 bg-white px-4 md:px-8 h-20 border-b border-gray-200 shadow-sm">
				<div className="max-w-7xl mx-auto h-full flex items-center justify-between">
					{/* Logo */}
					<div className="flex items-center gap-3 flex-shrink-0">
						<div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center">
							<svg width="36" height="36" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#9333ea"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
						</div>
						<span className="text-purple-600 font-bold text-xl tracking-tight">Awaz-Nepal</span>
					</div>

				{/* Desktop Navigation - Center */}
				<nav className="hidden md:flex flex-1 justify-center gap-6 xl:gap-10">
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition whitespace-nowrap text-sm uppercase">Home <span className="ml-1 text-xs">▼</span></a>
					<a href="/about" className="text-gray-800 font-bold hover:text-purple-600 transition whitespace-nowrap text-sm uppercase">About Us</a>
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition whitespace-nowrap text-sm uppercase">Courses <span className="ml-1 text-xs">▼</span></a>
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition whitespace-nowrap text-sm uppercase">Events <span className="ml-1 text-xs">▼</span></a>
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition whitespace-nowrap text-sm uppercase">Blog <span className="ml-1 text-xs">▼</span></a>
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition whitespace-nowrap text-sm uppercase">Pages <span className="ml-1 text-xs">▼</span></a>
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition whitespace-nowrap text-sm uppercase">Contact</a>
				</nav>

				{/* Right Section - Auth */}
				<div className="flex items-center gap-4 md:gap-5">
				<div className="hidden sm:flex items-center gap-4">
							<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition whitespace-nowrap text-sm uppercase">Log in</a>
							<a href="#" className="px-5 py-2 bg-white text-purple-600 border border-purple-600 rounded-md font-bold hover:bg-purple-50 transition whitespace-nowrap text-sm uppercase">Sign up</a>
						</div>

						<button
							className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
							aria-label="Open menu"
							aria-expanded={open}
							onClick={() => setOpen(true)}
						>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
						</button>
					</div>
				</div>
			</header>
			<div aria-hidden className="h-20" />

			<div
				className={`fixed inset-0 z-30 transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
				aria-hidden={!open}
			>
				<div className="absolute inset-0 bg-black/50" />

				<aside
					ref={panelRef}
					role="dialog"
					aria-label="Main menu"
					tabIndex={-1}
					className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white text-gray-800 p-6 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
				>
					<div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
						<div className="flex items-center gap-2">
							<div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
								<svg width="24" height="24" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#9333ea"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
							</div>
							<span className="font-bold text-sm md:text-base text-purple-600">Awaz-Nepal</span>
						</div>
						<button
							className="p-2 rounded-md text-gray-700 hover:bg-gray-200 transition"
							aria-label="Close menu"
							onClick={() => setOpen(false)}
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6"/></svg>
						</button>
					</div>

				<nav className="flex flex-col gap-4 mb-8">
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition py-2 uppercase text-sm">Home</a>
					<a href="/about" className="text-gray-800 font-bold hover:text-purple-600 transition py-2 uppercase text-sm">About Us</a>
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition py-2 uppercase text-sm">Courses</a>
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition py-2 uppercase text-sm">Events</a>
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition py-2 uppercase text-sm">Blog</a>
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition py-2 uppercase text-sm">Pages</a>
					<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition py-2 uppercase text-sm">Contact</a>
				</nav>

			<div className="flex flex-col gap-3">
				<a href="#" className="text-gray-800 font-bold hover:text-purple-600 transition py-2 uppercase text-sm">Log in</a>
				<a href="#" className="px-5 py-2 bg-white text-purple-600 border border-purple-600 rounded-md font-bold hover:bg-purple-50 transition text-center uppercase text-sm">Sign up</a>
				</div>
				</aside>
			</div>
		</>
	)
}

export default NotificationBar