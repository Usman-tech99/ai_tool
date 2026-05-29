import { useState } from 'react'

const faqs = [
  {
    question: 'How strong does my password really need to be?',
    answer: 'Security experts recommend 16+ characters for critical accounts (email, banking). For casually important accounts, 12+ characters suffices. Length matters more than complexity—a 16-character random password is stronger than a 12-character one with special characters. Our AI crack analysis helps you test if your password meets modern security standards.'
  },
  {
    question: 'Can I use the same password for multiple sites?',
    answer: 'No. Absolutely avoid reusing passwords. When one site gets breached, attackers immediately test that password on other sites (credential stuffing). If you reuse, all your accounts become compromised. Use a password manager like Bitwarden to generate and store unique passwords for each site.'
  },
  {
    question: 'Is my password stored on cyberaipulse servers?',
    answer: 'Never. All password generation happens in your browser using the crypto.getRandomValues() API. Passwords are generated locally on your device and never transmitted to our servers. We have zero-knowledge architecture—we cannot see or store any passwords you generate or test.'
  },
  {
    question: 'Why does cyberaipulse sometimes say my password is weak if it looks complex?',
    answer: 'Our AI crack analysis detects patterns that traditional entropy calculators miss. Common patterns include: keyboard walks (qwerty), substitutions (P@ssw0rd), sequential numbers (123), or dictionary words. A password might look complex but could be cracked in hours by pattern-aware attackers. Truly random 16+ character passwords resist this analysis.'
  },
  {
    question: 'What\'s the difference between online and offline password attacks?',
    answer: 'Online attacks use login forms (rate-limited to 10 attempts/second), so even weak passwords stay safe due to account lockout. Offline attacks occur after a data breach when attackers have password hashes and can try 10+ billion guesses/second using GPU clusters. This is why 16+ characters matters—it protects you if you\'re ever in a breach.'
  },
  {
    question: 'Should I write down my passwords?',
    answer: 'Never on paper or digital notes. Use an encrypted password manager instead. If you must write them, store the physical paper in a secure safe or safety deposit box. Password managers provide zero-knowledge encryption, so even if your device is compromised, attackers cannot access your passwords without your master password.'
  },
  {
    question: 'How often should I change my passwords?',
    answer: 'NIST (U.S. National Institute of Standards) no longer recommends regular password changes. Focus on strength instead. Only change passwords if: (1) you suspect compromise, (2) a site announces a breach, (3) it\'s your first time using a site. Mandatory regular changes encourage weaker passwords that people can remember.'
  },
  {
    question: 'Is SMS 2FA better than no 2FA?',
    answer: 'Yes, but barely. SMS 2FA is vulnerable to SIM swapping and SS7 interception attacks. Authenticator apps (Google Authenticator, Authy) are dramatically more secure and free. Hardware keys (YubiKey, ~$50) provide the strongest protection. For critical accounts, use authenticator apps at minimum.'
  },
  {
    question: 'What\'s a passphrase and why is it secure?',
    answer: 'A passphrase combines random words like "purple-elephant-coffee-42-dance" instead of random characters. At 25+ characters, it\'s extremely secure while staying memorable. AI crack attempts learn common word combinations, but passphrases using truly random words resist pattern recognition. Use our generator to create random passphrases.'
  },
  {
    question: 'Can AI or quantum computers crack strong passwords?',
    answer: 'Current AI and quantum computers cannot crack strong passwords. A 16+ character random password provides 100+ bits of entropy—mathematically resistant to current technology for centuries. Future quantum computers might threaten 128-bit encryption, but cybersecurity standards evolve. Use 16+ characters for protection against current and foreseeable threats.'
  },
  {
    question: 'Why does cyberaipulse say my password has weak patterns?',
    answer: 'Our system analyzes passwords like real attackers do—looking for: common dictionary words, keyboard patterns (qwerty), personal info correlations, and predictable substitutions. A password like "TechUser2024!" appears strong but uses predictable patterns. Truly random passwords like "kR9@pL2#mX$vQ7" avoid all these weaknesses.'
  },
  {
    question: 'What should I do if I see my password in a data breach?',
    answer: 'Visit haveibeenpwned.com and search your email. If found, immediately: (1) Change password on that site, (2) Check if it was used elsewhere and change those passwords too, (3) Enable 2FA if available, (4) Monitor credit reports for fraud. Enable breach monitoring to get alerts for future breaches.'
  },
  {
    question: 'Is biometric authentication (fingerprint) better than passwords?',
    answer: 'Biometric authentication is convenient but has different security properties. Fingerprints are unique but can\'t be changed if compromised—you have only 10 fingerprints. Strong passwords can be changed infinitely. Best approach: combine biometrics with passwords (2FA with authenticator app) or use passwordless authentication with hardware keys.'
  },
  {
    question: 'How do password managers keep my passwords safe?',
    answer: 'Password managers use AES-256 encryption (military-grade). Your passwords are encrypted with a master password that only you know. Reputable managers like Bitwarden use zero-knowledge architecture—even employees can\'t see your passwords. If you choose a strong master password (16+ characters), your vault stays secure even if the company is breached.'
  },
  {
    question: 'Should my password be stored in the browser?',
    answer: 'Not recommended. Browser password saving is convenient but less secure than dedicated password managers. If your device is compromised, attackers can access browser-stored passwords. Use a dedicated manager with strong encryption (Bitwarden, 1Password, LastPass). For critical accounts, manually enter passwords instead of autofill.'
  }
]

const FAQ = () => {
  const [openId, setOpenId] = useState(null)

  return (
    <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Common questions about password security, strength analysis, and best practices.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-[#111118] border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-colors">
            <button
              onClick={() => setOpenId(openId === idx ? null : idx)}
              className="w-full px-6 sm:px-8 py-4 flex items-center justify-between text-left hover:bg-[#15151c] transition-colors"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white pr-4">
                {faq.question}
              </h3>
              <span className={`text-cyan-400 text-2xl font-light transition-transform flex-shrink-0 ${
                openId === idx ? 'rotate-180' : ''
              }`}>
                ⌄
              </span>
            </button>

            {openId === idx && (
              <div className="px-6 sm:px-8 py-4 border-t border-gray-800/60 bg-[#0d0d14]/50">
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
        <h3 className="text-xl font-bold text-white mb-3">Didn't find your answer?</h3>
        <p className="text-gray-400 mb-6">
          Check out our security blog for in-depth articles on password entropy, attack methods, and best practices. Or contact us through the contact page with your questions.
        </p>
        <div className="flex gap-3">
          <button className="px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-semibold transition-colors">
            Read Our Blog
          </button>
          <button className="px-6 py-2 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default FAQ
