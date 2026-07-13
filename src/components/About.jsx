import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { isDark } = useTheme()

  return (
    <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
      <div className={`border rounded-2xl p-8 sm:p-12 transition-colors duration-300 ${isDark ? 'bg-[#111118] border-gray-800' : 'bg-white border-gray-200'}`}>
        <h1 className={`text-4xl sm:text-5xl font-bold mb-4 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          About CyberaiPulse
        </h1>

        <div className={`text-sm mb-8 pb-8 border-b transition-colors duration-300 ${isDark ? 'text-gray-500 border-gray-800' : 'text-gray-600 border-gray-300'}`}>
          <span>Your trusted password security tool — built for privacy, powered by cryptography.</span>
        </div>

        <div className={`space-y-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
          <p className="leading-relaxed">
            <strong className={isDark ? 'text-white' : 'text-gray-900'}>CyberaiPulse</strong> is a free, privacy-first online tool that helps you generate cryptographically secure passwords and analyze their strength against real-world attack scenarios — including AI-powered pattern recognition.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Mission</h2>
          <p className="leading-relaxed">
            We believe that strong password security should be accessible to everyone. Our mission is to provide a free, open, and private tool that educates users about password security while giving them the means to protect themselves — without collecting their data or compromising their privacy.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Zero-Knowledge Architecture</h2>
          <p className="leading-relaxed">
            Every password you generate or check on CyberaiPulse stays on your device. We use your browser's native <code className={`px-2 py-1 rounded font-mono text-sm ${isDark ? 'bg-gray-800 text-emerald-300' : 'bg-gray-100 text-emerald-700'}`}>crypto.getRandomValues()</code> API — the same cryptographic standard used by governments and financial institutions worldwide. Your passwords never touch our servers.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Why We Built This</h2>
          <p className="leading-relaxed">
            Data breaches expose billions of credentials every year. Traditional password strength meters give users a false sense of security by relying on simple entropy formulas that don't account for how attackers actually work. We built CyberaiPulse to give users realistic, practical assessments using the same techniques real attackers use — GPU-accelerated hash cracking, dictionary attacks, and AI pattern recognition.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Our Technology</h2>
          <ul className={`list-disc list-inside space-y-2 ml-4`}>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Frontend:</strong> React 18 with Vite for lightning-fast performance</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Cryptography:</strong> Web Crypto API (crypto.getRandomValues)</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Password Analysis:</strong> zxcvbn library for realistic attack simulation</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Hosting:</strong> Vercel Edge Network with global CDN</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Zero Tracking:</strong> No user tracking, no data collection, no cookies for analytics</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Built By Usman Shafiq</h2>
          <p className="leading-relaxed">
            CyberaiPulse was created by <strong className={isDark ? 'text-white' : 'text-gray-900'}>Usman Shafiq</strong>, a security-focused developer passionate about making cybersecurity tools accessible to everyone. The tool is completely free to use, with no account required, no data collection, and no hidden agendas.
          </p>

          <div className={`rounded-lg p-4 mt-6 transition-colors duration-300 ${isDark ? 'bg-cyan-600/10 border border-cyan-500/30' : 'bg-cyan-50 border border-cyan-200'}`}>
            <p className={`text-sm font-semibold ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
              Questions or feedback? Reach out through our <a href="/contact" className="underline hover:no-underline">Contact page</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
