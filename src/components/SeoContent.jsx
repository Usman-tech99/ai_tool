import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const SeoContent = ({ isDark: propsDark }) => {
  const { isDark: contextDark } = useTheme()
  const isDark = propsDark !== undefined ? propsDark : contextDark

  return (
    <section className="mt-8 sm:mt-12 lg:mt-16 max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 pb-10 sm:pb-16">
      <div className={`border rounded-2xl p-5 sm:p-8 md:p-10 transition-colors duration-300 ${isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <h2 className={`text-2xl md:text-3xl font-bold mb-5 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Free Online Password Generator & Strength Checker
        </h2>
        <p className={`leading-relaxed mb-5 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Welcome to <strong className={isDark ? 'text-white' : 'text-gray-900'}>CyberaiPulse</strong>, a completely free and privacy-focused online password generator and password strength checker. Our tool helps you create cryptographically secure passwords that resist brute-force attacks, GPU-accelerated hash cracking, and AI-powered pattern recognition. Whether you need a <strong className={isDark ? 'text-white' : 'text-gray-900'}>strong password generator</strong> for your email, banking, or social media accounts, or a <strong className={isDark ? 'text-white' : 'text-gray-900'}>password strength checker</strong> to evaluate your existing passwords, CyberaiPulse provides enterprise-grade security entirely in your browser with zero server-side storage.
        </p>
        <p className={`leading-relaxed mb-5 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Unlike many online password generators that send your data across the internet, our <strong className={isDark ? 'text-white' : 'text-gray-900'}>random password generator</strong> uses your browser's native <code className={`px-2 py-0.5 rounded font-mono text-sm ${isDark ? 'bg-gray-800 text-emerald-300' : 'bg-gray-200 text-emerald-700'}`}>crypto.getRandomValues()</code> API to generate truly unpredictable passwords. Your passwords never leave your device, ensuring complete privacy and security.
        </p>

        <h3 className={`text-lg font-semibold mb-3 mt-6 transition-colors duration-300 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
          What Makes a Strong Password?
        </h3>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Creating a <strong className={isDark ? 'text-white' : 'text-gray-900'}>secure password</strong> requires understanding how modern attackers crack passwords. Our free online password generator creates passwords that follow these security principles:
        </p>
        <ul className={`list-disc list-inside space-y-2 mb-5 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Length over complexity</strong> — A 16-character password provides exponentially more security than an 8-character one, even with special characters. Our password generator defaults to 16 characters, the recommended minimum for critical accounts.</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>True randomness</strong> — Human-created passwords follow predictable patterns that AI can learn. Our secure password generator uses cryptographic randomness that no pattern-detection algorithm can predict.</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Unique per account</strong> — Reusing passwords across sites means a single data breach compromises all your accounts. Generate a unique strong password for every service you use.</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Mixed character types</strong> — Combining uppercase letters, lowercase letters, numbers, and symbols dramatically increases the search space for attackers, making brute-force attacks impractical.</li>
        </ul>

        <h3 className={`text-lg font-semibold mb-3 mt-6 transition-colors duration-300 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
          How Our AI Password Strength Checker Works
        </h3>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Most <strong className={isDark ? 'text-white' : 'text-gray-900'}>password strength checkers</strong> use simple entropy formulas that overestimate password security. Our <strong className={isDark ? 'text-white' : 'text-gray-900'}>AI-powered password analyzer</strong> uses the zxcvbn library, developed by Dropbox, which simulates how real attackers crack passwords. It checks against:
        </p>
        <ul className={`list-disc list-inside space-y-2 mb-5 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <li>30,000+ common passwords and leaked credentials</li>
          <li>Common English words, names, and phrases from Wikipedia and US Census data</li>
          <li>Keyboard patterns (qwerty, asdfgh) and repeating patterns</li>
          <li>Common substitutions (P@ssw0rd, l33t speak) that AI pattern recognition targets</li>
          <li>Date formats, sequences, and personal information patterns</li>
        </ul>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          After analysis, our <strong className={isDark ? 'text-white' : 'text-gray-900'}>password checker</strong> provides estimated crack times for four attack scenarios: online rate-limited attacks, standard offline GPU cracking, high-end GPU cluster attacks, and worst-case AI neural network pattern matching. This gives you a realistic understanding of your password's security against current threats.
        </p>

        <h3 className={`text-lg font-semibold mb-3 mt-6 transition-colors duration-300 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
          Password Entropy Calculator: Understanding the Math
        </h3>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <strong className={isDark ? 'text-white' : 'text-gray-900'}>Password entropy</strong> is the mathematical measure of password strength. It represents how many guesses an attacker would need, on average, to crack your password. Our built-in entropy calculator displays this value for every password you generate or test. Higher entropy means stronger security:
        </p>
        <ul className={`list-disc list-inside space-y-2 mb-5 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>40-50 bits</strong> (8-10 characters): Weak — vulnerable to GPU cracking within days</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>60-70 bits</strong> (12-14 characters): Moderate — adequate for low-risk accounts</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>80-100 bits</strong> (16-20 characters): Strong — resistant to GPU attacks for centuries</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>100+ bits</strong> (20+ characters): Very strong — effectively uncrackable with current technology</li>
        </ul>

        <h3 className={`text-lg font-semibold mb-3 mt-6 transition-colors duration-300 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
          Why Use a Free Online Password Generator?
        </h3>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Many people rely on memorable but weak passwords, putting their digital identity at risk. Using a <strong className={isDark ? 'text-white' : 'text-gray-900'}>free password generator</strong> like CyberaiPulse eliminates the weakest link in your security chain: human predictability. Our tool generates passwords that are:
        </p>
        <ul className={`list-disc list-inside space-y-2 mb-5 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Cryptographically secure</strong> — Uses the Web Crypto API, the same standard used by financial institutions and government agencies worldwide.</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Completely private</strong> — Zero-knowledge architecture means your passwords never touch any server. Not even we can see them.</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Instantly analyzed</strong> — Every generated password is automatically checked against our AI-powered strength analyzer to verify its security.</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Customizable</strong> — Adjust length from 8 to 64 characters and choose which character types to include. Our <strong className={isDark ? 'text-white' : 'text-gray-900'}>password generator online</strong> gives you full control.</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>100% free</strong> — No account required, no hidden costs, no data collection. Just enterprise-grade password security for everyone.</li>
        </ul>

        <h3 className={`text-lg font-semibold mb-3 mt-6 transition-colors duration-300 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
          Understanding Password Attack Types
        </h3>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          To understand why a <strong className={isDark ? 'text-white' : 'text-gray-900'}>strong password generator</strong> is essential, you need to know how attackers operate. Our password checker simulates four distinct attack scenarios:
        </p>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <strong className={isDark ? 'text-white' : 'text-gray-900'}>Online attacks</strong> target live login pages. Servers limit attempts to about 100 per second and lock accounts after 5-10 failures. Even relatively weak passwords are usually safe from online attacks.
        </p>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <strong className={isDark ? 'text-white' : 'text-gray-900'}>Offline GPU attacks</strong> occur after a data breach. Attackers obtain password hashes and use graphics cards to try 10-100 billion guesses per second without rate limits. This is where password length becomes critical — a 16-character random password requires centuries to crack.
        </p>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <strong className={isDark ? 'text-white' : 'text-gray-900'}>AI pattern recognition</strong> represents the newest threat. Neural networks trained on billions of leaked passwords learn to predict human-created patterns, dramatically reducing the effective strength of predictable passwords. Truly random passwords from our generator resist these attacks entirely.
        </p>

        <h3 className={`text-lg font-semibold mb-3 mt-6 transition-colors duration-300 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
          Password Security Best Practices
        </h3>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Our <strong className={isDark ? 'text-white' : 'text-gray-900'}>free online password checker</strong> helps you audit existing passwords, but long-term security requires good habits. Follow these best practices recommended by NIST and security experts:
        </p>
        <ul className={`list-disc list-inside space-y-2 mb-5 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Use a password manager</strong> — Tools like Bitwarden, 1Password, and KeePass securely store all your passwords with AES-256 encryption. You only need to remember one strong master password. Our generator can create that master password for you.</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Enable two-factor authentication</strong> — Add a second layer of protection to critical accounts. Authenticator apps (Google Authenticator, Authy) are free and dramatically more secure than SMS-based 2FA, which is vulnerable to SIM swapping attacks.</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Never reuse passwords</strong> — Each account needs a unique password. When one service is breached (and most eventually are), attackers immediately test stolen credentials on other platforms. This is called credential stuffing.</li>
          <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Monitor for breaches</strong> — Use services like Have I Been Pwned to receive notifications when your email appears in known data breaches. Our <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 underline">security blog</Link> covers breach monitoring in detail.</li>
        </ul>

        <h3 className={`text-lg font-semibold mb-3 mt-6 transition-colors duration-300 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
          Client-Side Password Generation: Maximum Privacy
        </h3>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          What sets CyberaiPulse apart from other <strong className={isDark ? 'text-white' : 'text-gray-900'}>online password generators</strong> is our commitment to privacy. All password generation and analysis happens client-side, in your browser. We use the <code className={`px-2 py-0.5 rounded font-mono text-sm ${isDark ? 'bg-gray-800 text-emerald-300' : 'bg-gray-200 text-emerald-700'}`}>crypto.getRandomValues()</code> API, which draws entropy from your operating system's random number generator — the same source used for SSH keys, TLS certificates, and disk encryption.
        </p>
        <p className={`leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          This means:
        </p>
        <ul className={`list-disc list-inside space-y-2 mb-5 leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          <li>Your passwords are never sent over the network</li>
          <li>Your passwords are never stored on any server</li>
          <li>No logs or analytics track what you generate</li>
          <li>No account creation is required</li>
          <li>Even we cannot access the passwords you create</li>
        </ul>

        <h3 className={`text-lg font-semibold mb-3 mt-6 transition-colors duration-300 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>
          Frequently Asked Questions About Password Security
        </h3>

        <div className={`rounded-lg p-4 mb-4 transition-colors duration-300 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>How long should my password be?</h4>
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Security experts and NIST recommend 16 characters as the minimum for critical accounts like email and banking. Our free password generator defaults to 16 characters. For maximum security, use 20+ character passwords generated by a secure password creator.</p>
        </div>

        <div className={`rounded-lg p-4 mb-4 transition-colors duration-300 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>How does the AI password strength checker work?</h4>
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Our password analyzer uses the zxcvbn library to simulate real-world attack scenarios. It checks against dictionaries of common passwords, leaked credentials, keyboard patterns, and AI-detectable patterns to give you a realistic strength assessment rather than an overly optimistic entropy calculation.</p>
        </div>

        <div className={`rounded-lg p-4 mb-4 transition-colors duration-300 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Can I use this password generator for business accounts?</h4>
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Yes. CyberaiPulse generates enterprise-grade cryptographically secure passwords suitable for any account, including business, government, and personal use. Our client-side architecture ensures sensitive corporate passwords never leave your device.</p>
        </div>

        <div className={`rounded-lg p-4 mb-4 transition-colors duration-300 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Is this better than using a password manager's generator?</h4>
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Our generator uses the same cryptographic standards as most password managers. Use it alongside a password manager — generate strong passwords here, store them in your password manager of choice. We recommend Bitwarden (free, open-source), 1Password, or KeePass.</p>
        </div>

        <div className={`rounded-lg p-4 mb-4 transition-colors duration-300 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <h4 className={`font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>What does the entropy score mean?</h4>
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Entropy measures password randomness in bits. Each bit doubles the number of guesses needed. A password with 80 bits of entropy requires 2^80 guesses — far beyond the capability of any current or foreseeable technology. Our password entropy calculator displays this value for every generated password.</p>
        </div>

        <p className={`leading-relaxed text-sm pt-5 mt-6 transition-colors duration-300 ${isDark ? 'text-gray-500 border-t border-gray-800' : 'text-gray-500 border-t border-gray-300'}`}>
          CyberaiPulse is a comprehensive <strong className={isDark ? 'text-gray-300' : 'text-gray-700'}>password generator</strong> and <strong className={isDark ? 'text-gray-300' : 'text-gray-700'}>password strength checker</strong> designed for anyone who values their online security. Whether you are creating new accounts, updating old passwords after a data breach, or auditing your current password security, our <strong className={isDark ? 'text-gray-300' : 'text-gray-700'}>free online password generator</strong> provides the tools you need — with zero compromises on privacy. For more in-depth guides, visit our <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 underline">security blog</Link> covering password entropy, multi-factor authentication, breach response, and other essential cybersecurity topics. Check our <Link to="/faq" className="text-cyan-400 hover:text-cyan-300 underline">FAQ page</Link> for common questions or <Link to="/contact" className="text-cyan-400 hover:text-cyan-300 underline">contact us</Link> for support.
        </p>
      </div>
    </section>
  )
}

export default SeoContent
