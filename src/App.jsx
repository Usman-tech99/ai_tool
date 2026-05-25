import { useState } from 'react'
import PasswordGenerator from './components/PasswordGenerator'
import PasswordChecker from './components/PasswordChecker'
import SeoContent from './components/SeoContent'
import Blog from './components/Blog'
import Privacy from './components/Privacy'
import Terms from './components/Terms'
import Contact from './components/Contact'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')
  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white overflow-x-hidden">

      {/* ── Header ── */}
      <header className="border-b border-gray-800/60 bg-[#0a0a0f]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="cyberaipulse Logo"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex gap-4 lg:gap-6 text-sm text-gray-400">
            <a href="#generator" className="hover:text-cyan-300 transition-colors">Generator</a>
            <a href="#checker"   className="hover:text-cyan-300 transition-colors">Checker</a>
            <a href="#learn"     className="hover:text-cyan-300 transition-colors">Learn</a>
            <a href="#blog"      className="hover:text-cyan-300 transition-colors">Blog</a>
          </nav>
        </div>
      </header>

      {/* ── Content Management ── */}
      {currentPage === 'privacy' && (
        <Privacy onBack={() => setCurrentPage('home')} />
      )}

      {currentPage === 'terms' && (
        <Terms onBack={() => setCurrentPage('home')} />
      )}

      {currentPage === 'contact' && (
        <Contact onBack={() => setCurrentPage('home')} />
      )}

      {currentPage === 'home' && (
        <>
          {/* ── Hero ── */}
          <section className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-2 bg-cyan-600/10 border border-cyan-500/20 rounded-full px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs text-cyan-300 font-mono uppercase tracking-widest mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
              Cryptographically Secure · 100% Client-Side · AI Crack Analysis
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-3 sm:mb-4 px-2">
              Generate & Test{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Secure Passwords
              </span>
            </h1>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-2">
              Create uncrackable passwords and instantly see how long it would take
              a brute-force attacker — or an <span className="text-cyan-300 font-medium">AI neural network</span> — to break yours.
            </p>
          </section>

          {/* ── Main Grid ── */}
          <main id="generator" className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">

              {/* Password Generator */}
              <div id="generator" className="min-w-0">
                <PasswordGenerator />
              </div>

              {/* Password Checker */}
              <div id="checker" className="min-w-0">
                <PasswordChecker />
              </div>

            </div>
          </main>

          {/* ── SEO Content ── */}
          <div id="learn">
            <SeoContent />
          </div>

          {/* ── Blog ── */}
          <div id="blog" className="border-t border-gray-800/60">
            <Blog />
          </div>
        </>
      )}

      {/* ── Footer ── */}
      <footer className="border-t border-gray-800/60 bg-[#080810]">
        <div className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
          <p>© {new Date().getFullYear()} cyberaipulse. All rights reserved.</p>
          <nav id="privacy" className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <button onClick={() => setCurrentPage('privacy')} className="hover:text-gray-300 transition-colors">Privacy Policy</button>
            <button onClick={() => setCurrentPage('terms')} className="hover:text-gray-300 transition-colors">Terms of Use</button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-gray-300 transition-colors">Contact</button>
          </nav>
        </div>
      </footer>

    </div>
  )
}

export default App
