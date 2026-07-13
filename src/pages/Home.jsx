import { useTheme } from '../context/ThemeContext'
import PasswordGenerator from '../components/PasswordGenerator'
import PasswordChecker from '../components/PasswordChecker'
import Blog from '../components/Blog'
import SeoContent from '../components/SeoContent'

const Home = () => {
  const { isDark } = useTheme()

  return (
    <>
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

      <main id="generator" className="max-w-6xl mx-auto w-full px-3 sm:px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
          <div id="generator" className="min-w-0" data-aos="fade-up" data-aos-delay="300">
            <PasswordGenerator isDark={isDark} />
          </div>
          <div id="checker" className="min-w-0" data-aos="fade-up" data-aos-delay="400">
            <PasswordChecker isDark={isDark} />
          </div>
        </div>
      </main>

      <SeoContent isDark={isDark} />

      <div id="blog" className={`border-t transition-colors duration-300 ${isDark ? 'border-gray-800/60' : 'border-gray-200'}`} data-aos="fade-up" data-aos-delay="600">
        <Blog isDark={isDark} />
      </div>
    </>
  )
}

export default Home
