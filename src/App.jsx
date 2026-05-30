import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PasswordGenerator from './components/PasswordGenerator'
import PasswordChecker from './components/PasswordChecker'
import SeoContent from './components/SeoContent'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Contact from './components/Contact'
import SecurePasswordImportance from './components/SecurePasswordImportance'
import SecurityCursor from './components/SecurityCursor'
import SecurityElements from './components/SecurityElements'
import VisitorCounter from './components/VisitorCounter'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev
      localStorage.setItem('theme', newValue ? 'dark' : 'light')
      return newValue
    })
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      offset: 100
    })
    
    // Refresh AOS on page change
    AOS.refresh()
  }, [currentPage])
  return (
    <div className={`min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${
      isDark 
        ? 'bg-[#0a0a0f] text-white' 
        : 'bg-white text-gray-900'
    }`}>
      <SecurityCursor />
      <SecurityElements />
      <VisitorCounter />

      {/* ── Header ── */}
      <header className={`border-b backdrop-blur-md sticky top-0 z-50 shadow-sm transition-colors duration-300 ${
        isDark
          ? 'border-gray-800/60 bg-[#0a0a0f]/95'
          : 'border-gray-200 bg-white/95'
      }`}>
        <div className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.png"
              alt="cyberaipulse Logo"
              className="h-9 sm:h-10 w-auto object-contain"
            />
            <div className="text-lg sm:text-xl font-bold">
              <span className="text-cyan-400">Cyberai</span><span className={isDark ? 'text-white' : 'text-gray-900'}>Pulse</span>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:gap-6">
            <nav className="hidden md:flex gap-4 lg:gap-6 text-sm" style={{color: isDark ? '#9CA3AF' : '#374151'}}>
              <a href="#generator" className={`hover:${isDark ? 'text-cyan-400' : 'text-cyan-600'} transition-colors`}>Generator</a>
              <a href="#checker"   className={`hover:${isDark ? 'text-cyan-400' : 'text-cyan-600'} transition-colors`}>Checker</a>
              <a href="#learn"     className={`hover:${isDark ? 'text-cyan-400' : 'text-cyan-600'} transition-colors`}>Learn</a>
              <a href="#blog"      className={`hover:${isDark ? 'text-cyan-400' : 'text-cyan-600'} transition-colors`}>Blog</a>
              <button onClick={() => handleNavigate('faq')} className={`hover:${isDark ? 'text-cyan-400' : 'text-cyan-600'} transition-colors cursor-pointer`}>FAQ</button>
              <button onClick={() => handleNavigate('importance')} className={`hover:${isDark ? 'text-cyan-400' : 'text-cyan-600'} transition-colors cursor-pointer`}>Importance</button>
            </nav>
            
            {/* Theme Toggle Button */}
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

      {/* ── Content Management ── */}
      {currentPage === 'privacy' && (
        <Privacy onBack={() => handleNavigate('home')} />
      )}

      {currentPage === 'terms' && (
        <Terms onBack={() => handleNavigate('home')} />
      )}

      {currentPage === 'contact' && (
        <Contact onBack={() => handleNavigate('home')} />
      )}

      {currentPage === 'faq' && (
        <FAQ />
      )}

      {currentPage === 'importance' && (
        <SecurePasswordImportance onBack={() => handleNavigate('home')} />
      )}

      {currentPage === 'home' && (
        <>
          {/* ── Hero ── */}
          <section className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 text-center" data-aos="fade-up">
            <div className={`inline-flex flex-wrap justify-center items-center gap-2 rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-4 sm:mb-6 transition-colors duration-300 ${
              isDark
                ? 'bg-cyan-600/20 border border-cyan-500/40 text-cyan-300'
                : 'bg-cyan-100 border border-cyan-300 text-cyan-700'
            }`} data-aos="fade-up" data-aos-delay="100">
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0 ${isDark ? 'bg-cyan-400' : 'bg-cyan-600'}`} />
              Cryptographically Secure · 100% Client-Side · AI Crack Analysis
            </div>
            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-3 sm:mb-4 px-2 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`} data-aos="fade-up" data-aos-delay="200">
              Generate & Test{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Secure Passwords
              </span>
            </h1>
            <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Create uncrackable passwords and instantly see how long it would take
              a brute-force attacker — or an <span className={`font-medium ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>AI neural network</span> — to break yours.
            </p>
          </section>

          {/* ── Main Grid ── */}
          <main id="generator" className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">

              {/* Password Generator */}
              <div id="generator" className="min-w-0" data-aos="fade-up" data-aos-delay="300">
                <PasswordGenerator isDark={isDark} />
              </div>

              {/* Password Checker */}
              <div id="checker" className="min-w-0" data-aos="fade-up" data-aos-delay="400">
                <PasswordChecker isDark={isDark} />
              </div>

            </div>
          </main>

          {/* ── SEO Content ── */}
          <div id="learn" data-aos="fade-up" data-aos-delay="500">
            <SeoContent isDark={isDark} />
          </div>

          {/* ── Blog ── */}
          <div id="blog" className={`border-t transition-colors duration-300 ${isDark ? 'border-gray-800/60' : 'border-gray-200'}`} data-aos="fade-up" data-aos-delay="600">
            <Blog isDark={isDark} />
          </div>
        </>
      )}

      {/* ── Footer ── */}
      <footer className={`border-t transition-colors duration-300 ${isDark ? 'border-gray-800 bg-[#080810]' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-6 sm:py-8">
          <div className={`flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <p>© {new Date().getFullYear()} cyberaipulse. All rights reserved.</p>
            <nav id="privacy" className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button onClick={() => handleNavigate('faq')} className={`transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>FAQ</button>
              <button onClick={() => handleNavigate('privacy')} className={`transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>Privacy Policy</button>
              <button onClick={() => handleNavigate('terms')} className={`transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>Terms of Use</button>
              <button onClick={() => handleNavigate('contact')} className={`transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>Contact</button>
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

export default App
