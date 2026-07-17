import { useTheme } from '../context/ThemeContext'

const Terms = () => {
  const { isDark } = useTheme()

  return (
    <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
      <div className={`border rounded-2xl p-8 sm:p-12 transition-colors duration-300 ${isDark ? 'bg-[#111118] border-gray-800' : 'bg-white border-gray-200'}`}>
        <h1 className={`text-4xl sm:text-5xl font-bold mb-4 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Terms of Service
        </h1>
        <div className={`text-sm mb-8 pb-8 border-b transition-colors duration-300 ${isDark ? 'text-gray-500 border-gray-800' : 'text-gray-600 border-gray-300'}`}>
          <span>Last Updated: July 13, 2026</span>
        </div>

        <div className={`space-y-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
          <p className="leading-relaxed">These Terms of Service govern your use of cyberaipulse. By accessing and using cyberaipulse, you agree to be bound by these Terms.</p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>1. Use License</h2>
          <p className="leading-relaxed">We grant you a limited, non-exclusive, non-transferable license to access and use cyberaipulse for personal, non-commercial purposes. You agree not to modify or copy materials, use the Service for commercial purposes without authorization, or attempt to reverse engineer the source code.</p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>2. Disclaimer of Warranties</h2>
          <p className="leading-relaxed">cyberaipulse is provided on an "as-is" basis without warranties of any kind. We do not guarantee that generated passwords will never be cracked, uninterrupted operation, or absolute security. You use cyberaipulse at your own risk.</p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>3. Limitation of Liability</h2>
          <p className="leading-relaxed">To the fullest extent permitted by law, cyberaipulse shall not be liable for any indirect, incidental, special, or consequential damages, loss of data, or unauthorized access to your accounts.</p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>4. Acceptable Use Policy</h2>
          <p className="leading-relaxed">You agree not to use cyberaipulse for attempting unauthorized access to accounts, unauthorized penetration testing, conducting attacks against the Service, phishing, or any illegal activities.</p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>5. Intellectual Property</h2>
          <p className="leading-relaxed">All content, features, and functionality of cyberaipulse are owned by cyberaipulse and protected by international copyright and trademark laws. You retain ownership of passwords you generate, which remain on your device.</p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>6. Third-Party Services</h2>
          <p className="leading-relaxed">cyberaipulse uses third-party services including Vercel (hosting), Google Fonts (typography), and Google AdSense (advertising). These services have their own terms and privacy policies.</p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>7. Service Modifications</h2>
          <p className="leading-relaxed">We reserve the right to modify or discontinue the Service, change features, or suspend access for violations of these Terms.</p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>8. Governing Law</h2>
          <p className="leading-relaxed">These Terms are governed by applicable laws. If any provision is invalid, the remaining provisions remain in effect.</p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>9. Contact</h2>
          <p className="leading-relaxed">For questions about these Terms: <a href="mailto:support@cyberaipulse.tech" className="text-cyan-600 hover:text-cyan-700 font-mono font-semibold">support@cyberaipulse.tech</a></p>

          <div className={`rounded-lg p-4 mt-8 transition-colors duration-300 ${isDark ? 'bg-cyan-600/10 border border-cyan-500/30' : 'bg-cyan-50 border border-cyan-200'}`}>
            <p className={`font-semibold ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Last Updated: July 13, 2026</p>
            <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Your continued use of cyberaipulse after changes to these Terms constitutes acceptance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Terms
