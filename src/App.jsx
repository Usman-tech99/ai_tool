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
    <div className="min-h-screen w-full bg-white text-gray-900 overflow-x-hidden">
      <SecurityCursor />
      <SecurityElements />
      <VisitorCounter />

      {/* ── Header ── */}
      <header className="border-b border-gray-200 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.png"
              alt="cyberaipulse Logo"
              className="h-9 sm:h-10 w-auto object-contain"
            />
            <div className="text-lg sm:text-xl font-bold">
              <span className="text-cyan-400">Cyberai</span><span className="text-white">Pulse</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 lg:gap-6 text-sm text-gray-700">
            <a href="#generator" className="hover:text-cyan-600 transition-colors">Generator</a>
            <a href="#checker"   className="hover:text-cyan-600 transition-colors">Checker</a>
            <a href="#learn"     className="hover:text-cyan-600 transition-colors">Learn</a>
            <a href="#blog"      className="hover:text-cyan-600 transition-colors">Blog</a>
            <button onClick={() => handleNavigate('faq')} className="hover:text-cyan-600 transition-colors cursor-pointer">FAQ</button>
            <button onClick={() => handleNavigate('importance')} className="hover:text-cyan-600 transition-colors cursor-pointer">Importance</button>
          </nav>
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
            <div className="inline-flex flex-wrap justify-center items-center gap-2 bg-cyan-100 border border-cyan-300 rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs text-cyan-700 font-mono uppercase tracking-widest mb-4 sm:mb-6" data-aos="fade-up" data-aos-delay="100">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse flex-shrink-0" />
              Cryptographically Secure · 100% Client-Side · AI Crack Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-3 sm:mb-4 px-2 text-gray-900" data-aos="fade-up" data-aos-delay="200">
              Generate & Test{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Secure Passwords
              </span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
              Create uncrackable passwords and instantly see how long it would take
              a brute-force attacker — or an <span className="text-cyan-600 font-medium">AI neural network</span> — to break yours.
            </p>
          </section>

          {/* ── Main Grid ── */}
          <main id="generator" className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">

              {/* Password Generator */}
              <div id="generator" className="min-w-0" data-aos="fade-up" data-aos-delay="300">
                <PasswordGenerator />
              </div>

              {/* Password Checker */}
              <div id="checker" className="min-w-0" data-aos="fade-up" data-aos-delay="400">
                <PasswordChecker />
              </div>

            </div>
          </main>

          {/* ── SEO Content ── */}
          <div id="learn" data-aos="fade-up" data-aos-delay="500">
            <SeoContent />
          </div>

          {/* ── Blog ── */}
          <div id="blog" className="border-t border-gray-800/60" data-aos="fade-up" data-aos-delay="600">
            <Blog />
          </div>
        </>
      )}

      {/* ── Footer ── */}
      <footer className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
            <p>© {new Date().getFullYear()} cyberaipulse. All rights reserved.</p>
            <nav id="privacy" className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <button onClick={() => handleNavigate('faq')} className="text-gray-600 hover:text-cyan-600 transition-colors cursor-pointer">FAQ</button>
              <button onClick={() => handleNavigate('privacy')} className="text-gray-600 hover:text-cyan-600 transition-colors cursor-pointer">Privacy Policy</button>
              <button onClick={() => handleNavigate('terms')} className="text-gray-600 hover:text-cyan-600 transition-colors cursor-pointer">Terms of Use</button>
              <button onClick={() => handleNavigate('contact')} className="text-gray-600 hover:text-cyan-600 transition-colors cursor-pointer">Contact</button>
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
