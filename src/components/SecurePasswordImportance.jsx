import React from 'react'

const SecurePasswordImportance = ({ onBack }) => {
  return (
    <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6 font-semibold"
      >
        ← Back
      </button>

      {/* Main Content */}
      <div className="bg-[#111118] border border-gray-800 rounded-2xl p-8 sm:p-12" data-aos="fade-up">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Why Secure Passwords Matter
        </h1>
        <p className="text-gray-400 text-lg mb-8 border-l-4 border-cyan-400 pl-4">
          In our digital age, passwords are the first line of defense against cyber attacks. Understanding their importance can save you from identity theft, financial loss, and data breaches.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" data-aos="fade-up" data-aos-delay="100">
          <div className="bg-cyan-600/10 border border-cyan-500/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">2024</div>
            <p className="text-gray-300">password breaches recorded annually</p>
          </div>
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">4.3B</div>
            <p className="text-gray-300">user credentials exposed in 2023</p>
          </div>
          <div className="bg-cyan-600/10 border border-cyan-500/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">81%</div>
            <p className="text-gray-300">of breaches use weak passwords</p>
          </div>
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">$4.45M</div>
            <p className="text-gray-300">average cost of a data breach</p>
          </div>
        </div>

        {/* Key Sections */}
        <div className="space-y-8">
          {/* Identity Theft */}
          <div data-aos="fade-up" data-aos-delay="150" className="border-l-4 border-cyan-400 pl-6 py-4">
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">🎯 Identity Theft Prevention</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Weak passwords are an open invitation for hackers. Once they gain access to one account, they can steal your personal information, including:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>✓ Social Security Numbers</li>
              <li>✓ Credit card information</li>
              <li>✓ Bank account details</li>
              <li>✓ Personal identification documents</li>
              <li>✓ Medical records</li>
            </ul>
          </div>

          {/* Financial Security */}
          <div data-aos="fade-up" data-aos-delay="200" className="border-l-4 border-blue-400 pl-6 py-4">
            <h2 className="text-2xl font-bold text-blue-300 mb-3">💰 Protecting Your Money</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Hackers don't just steal information—they steal money. Compromised passwords lead to:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>✓ Unauthorized purchases</li>
              <li>✓ Bank transfers to criminal accounts</li>
              <li>✓ Cryptocurrency theft</li>
              <li>✓ Investment account takeovers</li>
              <li>✓ Loan fraud in your name</li>
            </ul>
          </div>

          {/* Privacy & Data */}
          <div data-aos="fade-up" data-aos-delay="250" className="border-l-4 border-cyan-400 pl-6 py-4">
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">🔐 Privacy & Data Control</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Your emails, social media, and cloud storage contain sensitive personal data:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>✓ Private messages and communications</li>
              <li>✓ Photos and personal documents</li>
              <li>✓ Location history and travel plans</li>
              <li>✓ Family and relationship information</li>
              <li>✓ Professional credentials</li>
            </ul>
          </div>

          {/* Cascade Effect */}
          <div data-aos="fade-up" data-aos-delay="300" className="border-l-4 border-blue-400 pl-6 py-4">
            <h2 className="text-2xl font-bold text-blue-300 mb-3">⛓️ The Cascade Effect</h2>
            <p className="text-gray-300 leading-relaxed">
              One weak password can compromise multiple accounts. Many people reuse passwords or use variations of the same password. If hackers crack one, they attempt it on all major platforms:
            </p>
            <div className="bg-[#0d0d14] border border-gray-700 rounded-lg p-4 mt-4 text-gray-300 space-y-2 font-mono text-sm">
              <div>Attacker cracks email password → </div>
              <div className="ml-4">Tries same password on banking apps → </div>
              <div className="ml-8">Accesses social media accounts → </div>
              <div className="ml-12">Uses "forgot password" features → </div>
              <div className="ml-16">Gains access to ALL accounts 🔓</div>
            </div>
          </div>

          {/* What Makes Passwords Strong */}
          <div data-aos="fade-up" data-aos-delay="350" className="border-l-4 border-cyan-400 pl-6 py-4">
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">✅ What Makes Passwords Strong</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A secure password resists both human guessing and automated cracking attempts:
            </p>
            <div className="space-y-3">
              <div className="bg-cyan-600/10 border border-cyan-500/20 rounded p-4">
                <h4 className="font-semibold text-cyan-300 mb-2">Length (16+ characters)</h4>
                <p className="text-gray-300 text-sm">Every character added exponentially increases cracking time. A 16-character password is 281 trillion times harder to crack than an 8-character one.</p>
              </div>
              <div className="bg-cyan-600/10 border border-cyan-500/20 rounded p-4">
                <h4 className="font-semibold text-cyan-300 mb-2">Complexity (Mixed character types)</h4>
                <p className="text-gray-300 text-sm">Use uppercase, lowercase, numbers, and symbols. This dramatically increases the character set from 26 to 94+ possible characters.</p>
              </div>
              <div className="bg-cyan-600/10 border border-cyan-500/20 rounded p-4">
                <h4 className="font-semibold text-cyan-300 mb-2">Unpredictability (No dictionary words)</h4>
                <p className="text-gray-300 text-sm">Avoid dictionary words, names, dates, or patterns. Hackers use dictionary attacks that try millions of common words first.</p>
              </div>
              <div className="bg-cyan-600/10 border border-cyan-500/20 rounded p-4">
                <h4 className="font-semibold text-cyan-300 mb-2">Uniqueness (One per service)</h4>
                <p className="text-gray-300 text-sm">Never reuse passwords. If one service is breached, all your accounts with that password are compromised.</p>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div data-aos="fade-up" data-aos-delay="400" className="border-l-4 border-blue-400 pl-6 py-4">
            <h2 className="text-2xl font-bold text-blue-300 mb-3">🛡️ Best Security Practices</h2>
            <ol className="text-gray-300 space-y-3 ml-4">
              <li><strong className="text-blue-300">1. Generate Strong Passwords</strong> - Use tools like CyberaiPulse to create cryptographically random passwords</li>
              <li><strong className="text-blue-300">2. Use a Password Manager</strong> - Services like Bitwarden, 1Password, or LastPass securely store and autofill passwords</li>
              <li><strong className="text-blue-300">3. Enable Two-Factor Authentication</strong> - Even if password is compromised, 2FA adds another protection layer</li>
              <li><strong className="text-blue-300">4. Never Share Passwords</strong> - Don't share via email, message, or over the phone</li>
              <li><strong className="text-blue-300">5. Update Regularly</strong> - Change passwords every 3 months or after any suspected breach</li>
              <li><strong className="text-blue-300">6. Check for Breaches</strong> - Use haveibeenpwned.com to see if your accounts were compromised</li>
            </ol>
          </div>

          {/* The Real Cost */}
          <div data-aos="fade-up" data-aos-delay="450" className="border-l-4 border-cyan-400 pl-6 py-4 bg-red-900/10 border-red-500/20 border-l-red-500 rounded p-4 ml-0 pl-6">
            <h2 className="text-2xl font-bold text-red-300 mb-3">⚠️ The Real Cost of Weak Passwords</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Beyond financial loss, compromised accounts cause:
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li>✗ Years of credit damage</li>
              <li>✗ Difficulty obtaining loans and mortgages</li>
              <li>✗ Job loss (if professional accounts compromised)</li>
              <li>✗ Emotional trauma and stress</li>
              <li>✗ Time spent recovering from identity theft</li>
              <li>✗ Damage to reputation and relationships</li>
            </ul>
          </div>

          {/* Conclusion */}
          <div data-aos="fade-up" data-aos-delay="500" className="bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-3">🎯 Conclusion</h2>
            <p className="text-gray-300 leading-relaxed">
              Your password is literally the key to your digital life. A weak password is like leaving your front door unlocked in a neighborhood full of thieves. 
              The investment of 30 seconds to create a strong password pays dividends in security, peace of mind, and protection from devastating consequences.
            </p>
            <p className="text-cyan-300 font-semibold mt-4">
              Use CyberaiPulse today to generate a truly secure password. Your digital future depends on it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecurePasswordImportance
