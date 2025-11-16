import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-[#15073a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#6c4cf7] flex items-center justify-center">
              {/* simple logo */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l3 6h6l-4.8 3.6L20 20l-8-5-8 5 1.8-8.4L1 8h6L12 2z" fill="#fff" opacity="0.9" />
              </svg>
            </div>
            <span className="font-semibold text-lg">Awaz-Nepal</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-sm text-[#c9bff0]">
            <span>Follow us on social media</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white">f</a>
              <a href="#" className="hover:text-white">t</a>
              <a href="#" className="hover:text-white">ig</a>
              <a href="#" className="hover:text-white">in</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-3 text-[#cfc8e9] text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Learner Stories</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">CATEGORIES</h3>
            <ul className="space-y-3 text-[#cfc8e9] text-sm">
              <li><a href="#">Development</a></li>
              <li><a href="#">Business</a></li>
              <li><a href="#">Finance & Accounting</a></li>
              <li><a href="#">IT & Software</a></li>
              <li><a href="#">Office Productivity</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Marketing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">OTHERS</h3>
            <ul className="space-y-3 text-[#cfc8e9] text-sm">
              <li><a href="#">Lifestyle</a></li>
              <li><a href="#">Photography & Video</a></li>
              <li><a href="#">Health & Fitness</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">UX Design</a></li>
              <li><a href="#">SEO</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-3 text-[#cfc8e9] text-sm">
              <li><a href="#">Documentation</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">GET IN TOUCH</h3>
            <p className="text-[#cfc8e9] text-sm mb-4">We don’t send spam so don’t worry.</p>

            <form className="flex items-center gap-3 max-w-md">
              <input aria-label="Email" type="email" placeholder="Email..." className="flex-1 rounded-full px-4 py-3 text-sm text-[#1a0841] outline-none" />
              <button type="submit" className="bg-[#6c4cf7] text-white px-4 py-2 rounded-full text-sm">Submit</button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#d7d0f7]">© 2025 Awaz-Nepal. All Right Reserved.</div>

            <div className="flex items-center gap-6">
              <nav className="hidden sm:flex items-center gap-4 text-sm text-[#cfc8e9]">
                <a href="#">Help</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Cookie Notice</a>
                <a href="#">Security</a>
                <a href="#">Terms of Use</a>
              </nav>

              <button className="ml-2 bg-white/6 text-[#e8e2ff] px-4 py-2 rounded-full flex items-center gap-2 text-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="#fff" strokeWidth="0.8" opacity="0.8"/></svg>
                English
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
