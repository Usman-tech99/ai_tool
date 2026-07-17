import { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { Analytics } from '@vercel/analytics/react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SecurityCursor from './SecurityCursor'
import SecurityElements from './SecurityElements'
import VisitorCounter from './VisitorCounter'
import CookieConsent from './CookieConsent'

const Layout = () => {
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 100
    })
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [location])

  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${
      isDark
        ? 'bg-[#0a0a0f] text-white'
        : 'bg-white text-gray-900'
    }`}>
      <Analytics />
      <SecurityCursor />
      <SecurityElements />
      <VisitorCounter />
      <CookieConsent />

      <header className={`border-b backdrop-blur-md sticky top-0 z-50 shadow-sm transition-colors duration-300 ${
        isDark
          ? 'border-gray-800/60 bg-[#0a0a0f]/95'
          : 'border-gray-200 bg-white/95'
      }`}>
        <div className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.png"
              alt="cyberaipulse Logo"
              className="h-9 sm:h-10 w-auto object-contain"
            />
            <div className="text-lg sm:text-xl font-bold" style={{ fontFamily: "'Space Mono', monospace" }}>
              <span className="text-cyan-400">Cyberai</span><span className={isDark ? 'text-white' : 'text-gray-900'}>Pulse</span>
            </div>
          </Link>
          <div className="flex items-center gap-4 lg:gap-6">
            <nav className="hidden md:flex gap-4 lg:gap-6 text-sm" style={{color: isDark ? '#9CA3AF' : '#374151'}}>
              <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
              <Link to="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link>
              <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
            </nav>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark
                  ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.323 2.677a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm2.828 2.828a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM10 7a3 3 0 100 6 3 3 0 000-6zm3.536 5.464a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM9 17a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm3.536-1.464a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm2.121-2.121a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM2.458 12.067a1 1 0 10-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM2 11a1 1 0 100-2H1a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <Outlet />

      <footer className={`border-t transition-colors duration-300 ${isDark ? 'border-gray-800 bg-[#080810]' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-6 sm:py-8">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>© {new Date().getFullYear()} cyberaipulse. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/faq" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>FAQ</Link>
              <Link to="/privacy" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>Privacy Policy</Link>
              <Link to="/terms" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>Terms of Use</Link>
              <Link to="/contact" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>Contact</Link>
              <Link to="/about" className={`transition-colors ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>About</Link>
            </nav>
          </div>
          <div className="text-center text-xs sm:text-sm">
            <p className="font-bold text-cyan-600">Built By Usman Shafiq</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
