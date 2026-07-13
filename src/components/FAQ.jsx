import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const faqs = [
  {
    question: 'How strong does my password really need to be?',
    answer: 'Security experts recommend 16+ characters for critical accounts (email, banking). For casually important accounts, 12+ characters suffices. Length matters more than complexity - a 16-character random password is stronger than a 12-character one with special characters.'
  },
  {
    question: 'Can I use the same password for multiple sites?',
    answer: 'No. Absolutely avoid reusing passwords. When one site gets breached, attackers immediately test that password on other sites (credential stuffing). Use a password manager to generate and store unique passwords for each site.'
  },
  {
    question: 'Is my password stored on cyberaipulse servers?',
    answer: 'Never. All password generation happens in your browser using the crypto.getRandomValues() API. Passwords are generated locally on your device and never transmitted to our servers.'
  },
  {
    question: 'What is the difference between online and offline password attacks?',
    answer: 'Online attacks use login forms (rate-limited to 10 attempts/second), so even weak passwords stay safe due to account lockout. Offline attacks occur after a data breach when attackers have password hashes and can try 10+ billion guesses/second using GPU clusters.'
  },
  {
    question: 'Should I write down my passwords?',
    answer: 'Never on paper or digital notes. Use an encrypted password manager instead. Password managers provide zero-knowledge encryption, so even if your device is compromised, attackers cannot access your passwords without your master password.'
  },
  {
    question: 'How often should I change my passwords?',
    answer: 'NIST no longer recommends regular password changes. Focus on strength instead. Only change passwords if you suspect compromise, a site announces a breach, or it is your first time using a site.'
  },
  {
    question: 'Is SMS 2FA better than no 2FA?',
    answer: 'Yes, but barely. SMS 2FA is vulnerable to SIM swapping and SS7 interception attacks. Authenticator apps (Google Authenticator, Authy) are dramatically more secure and free. Hardware keys provide the strongest protection.'
  },
  {
    question: 'What is a passphrase and why is it secure?',
    answer: 'A passphrase combines random words like "purple-elephant-coffee-42" instead of random characters. At 25+ characters, it is extremely secure while staying memorable. Use our generator to create random passphrases.'
  },
  {
    question: 'Can AI or quantum computers crack strong passwords?',
    answer: 'Current AI and quantum computers cannot crack strong passwords. A 16+ character random password provides 100+ bits of entropy, mathematically resistant to current technology for centuries.'
  },
  {
    question: 'What should I do if my password appears in a data breach?',
    answer: 'Visit haveibeenpwned.com and search your email. If found, immediately change that password, check if it was used elsewhere, enable 2FA, and monitor your accounts for suspicious activity.'
  },
  {
    question: 'Is biometric authentication better than passwords?',
    answer: 'Biometrics are convenient but cannot be changed if compromised. Best approach: combine biometrics with passwords (2FA with authenticator app) or use passwordless authentication with hardware keys.'
  },
  {
    question: 'How do password managers keep my passwords safe?',
    answer: 'Password managers use AES-256 encryption. Your passwords are encrypted with a master password that only you know. Reputable managers like Bitwarden use zero-knowledge architecture.'
  },
  {
    question: 'Should I let my browser save passwords?',
    answer: 'Not recommended for critical accounts. Browser password saving is convenient but less secure than dedicated password managers. Use a dedicated manager with strong encryption.'
  }
]

const FAQ = () => {
  const [openId, setOpenId] = useState(null)
  const navigate = useNavigate()
  const { isDark } = useTheme()

  return (
    <section className={`max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
      <div className="mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-3 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Frequently Asked Questions
        </h2>
        <p className={`text-sm sm:text-base transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Common questions about password security, strength analysis, and best practices.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`border rounded-xl overflow-hidden hover:border-cyan-400 transition-colors duration-300 ${
            isDark ? 'bg-[#111118] border-gray-800' : 'bg-white border-gray-200'
          }`}>
            <button
              onClick={() => setOpenId(openId === idx ? null : idx)}
              className={`w-full px-6 sm:px-8 py-4 flex items-center justify-between text-left transition-colors duration-300 ${
                isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'
              }`}
            >
              <h3 className={`text-base sm:text-lg font-semibold pr-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {faq.question}
              </h3>
              <span className={`text-cyan-600 text-2xl font-light transition-transform flex-shrink-0 ${
                openId === idx ? 'rotate-180' : ''
              }`}>
                &#8963;
              </span>
            </button>

            {openId === idx && (
              <div className={`px-6 sm:px-8 py-4 border-t transition-colors duration-300 ${
                isDark ? 'border-gray-800 bg-gray-800/30' : 'border-gray-200 bg-gray-50'
              }`}>
                <p className={`leading-relaxed text-sm sm:text-base transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={`mt-12 border rounded-2xl p-8 sm:p-12 transition-colors duration-300 ${
        isDark ? 'bg-cyan-600/10 border-cyan-500/40' : 'bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200'
      }`}>
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Did not find your answer?
        </h3>
        <p className={`mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Check out our security blog for in-depth articles on password entropy, attack methods, and best practices.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors"
          >
            Read Our Blog
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-2 border border-cyan-400 text-cyan-700 hover:bg-cyan-50 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
