import { useTheme } from '../context/ThemeContext'

const SecurePasswordImportance = () => {
  const { isDark } = useTheme()

  return (
    <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
      <div className={`border rounded-2xl p-8 sm:p-12 transition-colors duration-300 ${isDark ? 'bg-[#111118] border-gray-800' : 'bg-white border-gray-200'}`}>
        <h1 className={`text-4xl sm:text-5xl font-bold mb-4 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Why Secure Passwords Matter
        </h1>
        <p className={`text-lg mb-8 border-l-4 border-cyan-600 pl-4 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          In our digital age, passwords are the first line of defense against cyber attacks. Understanding their importance can save you from identity theft, financial loss, and data breaches.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-cyan-50 border border-cyan-300 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-700 mb-2">2024</div>
            <p className="text-gray-800">password breaches recorded annually</p>
          </div>
          <div className="bg-blue-50 border border-blue-300 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-700 mb-2">4.3B</div>
            <p className="text-gray-800">user credentials exposed in 2023</p>
          </div>
          <div className="bg-cyan-50 border border-cyan-300 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-700 mb-2">81%</div>
            <p className="text-gray-800">of breaches use weak passwords</p>
          </div>
          <div className="bg-blue-50 border border-blue-300 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-700 mb-2">$4.45M</div>
            <p className="text-gray-800">average cost of a data breach</p>
          </div>
        </div>

        <div className={`space-y-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
          <div className="border-l-4 border-cyan-600 pl-6 py-4">
            <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Identity Theft Prevention</h2>
            <p className="leading-relaxed mb-3">Weak passwords invite hackers. Once they gain access to one account, they can steal your Social Security numbers, credit card information, bank account details, and personal documents.</p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6 py-4">
            <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>Protecting Your Money</h2>
            <p className="leading-relaxed mb-3">Hackers do not just steal information - they steal money. Compromised passwords lead to unauthorized purchases, bank transfers to criminal accounts, cryptocurrency theft, and loan fraud in your name.</p>
          </div>

          <div className="border-l-4 border-cyan-600 pl-6 py-4">
            <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Privacy and Data Control</h2>
            <p className="leading-relaxed mb-3">Your emails, social media, and cloud storage contain sensitive data - private messages, photos, location history, and professional credentials. Strong passwords protect all of it.</p>
          </div>

          <div className="border-l-4 border-blue-600 pl-6 py-4">
            <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>The Cascade Effect</h2>
            <p className="leading-relaxed">One weak password can compromise multiple accounts. Many people reuse passwords across sites. If hackers crack one, they attempt it on all major platforms, gaining access to your entire digital life.</p>
          </div>

          <div className={`rounded-lg p-6 transition-colors duration-300 ${isDark ? 'bg-red-900/10 border border-red-500/20' : 'bg-red-50 border border-red-200'}`}>
            <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-red-300' : 'text-red-700'}`}>The Real Cost of Weak Passwords</h2>
            <p className="leading-relaxed mb-3">Beyond financial loss, compromised accounts cause years of credit damage, difficulty obtaining loans, job loss, emotional trauma, and damage to your reputation and relationships.</p>
          </div>

          <div className={`rounded-lg p-6 transition-colors duration-300 ${isDark ? 'bg-cyan-600/10 border border-cyan-500/30' : 'bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200'}`}>
            <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Conclusion</h2>
            <p className="leading-relaxed">Your password is the key to your digital life. A weak password is like leaving your front door unlocked. The 30 seconds it takes to create a strong password pays dividends in security and peace of mind.</p>
            <p className={`font-semibold mt-4 ${isDark ? 'text-cyan-300' : 'text-cyan-600'}`}>Use CyberaiPulse today to generate a truly secure password.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecurePasswordImportance
