import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const blogPosts = [
  {
    id: '1',
    category: 'Security Tips',
    title: 'Why Password Security Matters More Than Ever in 2026',
    excerpt: 'Learn why strong, unique passwords are your first defense against cyber threats and how to build your security foundation.',
    date: 'July 10, 2026',
    readTime: '6 min',
    content: `Strong passwords are your foundation for cybersecurity in 2026. With data breaches becoming more frequent and sophisticated, understanding password security is no longer optional.

## Why Passwords Matter

Passwords protect your email, banking, social media, and sensitive data. A weak password puts everything at risk. In 2025 alone, over 4.3 billion credentials were exposed in data breaches.

## The Current Threat Landscape

Modern attackers use:
- GPU clusters that can try 10+ billion passwords per second
- AI neural networks trained on billions of leaked passwords
- Credential stuffing bots that test stolen passwords across thousands of sites
- Phishing campaigns designed to trick users into revealing credentials

## Key Recommendations

- Use 16+ character passwords for critical accounts
- Make them unique for each account
- Never reuse passwords across sites
- Use a password manager to store them securely
- Enable two-factor authentication wherever possible

## Getting Started

Start with our password generator to create secure passwords today. Remember: the time you invest in creating strong passwords is nothing compared to the cost of a breach.`
  },
  {
    id: '2',
    category: 'Best Practices',
    title: 'The 16-Character Rule: Why Length Trumps Complexity',
    excerpt: 'Security experts recommend 16+ characters. Here is why length is the single most important factor in password strength.',
    date: 'July 8, 2026',
    readTime: '7 min',
    content: `Password length provides exponential security. Here is the science behind the 16-character recommendation and why modern security standards have shifted toward prioritizing length over arbitrary complexity rules.

## The Math Behind Password Length

- 8 characters: Weak, can be cracked in hours with a GPU cluster
- 12 characters: Moderate, cracked in months
- 16 characters: Strong, would take 200+ years to crack
- 20 characters: Very strong, takes 200,000+ years

## Why 16 Is the Sweet Spot

Sixteen characters balances security and practicality:
- Strong enough for critical accounts like email and banking
- Practical to generate with automated tools
- Resistant to modern GPU attacks
- Immune to current AI pattern recognition
- Compatible with most password managers

## The NIST Recommendation

The U.S. National Institute of Standards and Technology (NIST) now recommends focusing on password length rather than requiring special characters and frequent changes. Their SP 800-63B guidelines suggest:
- Minimum 8 characters for all accounts
- 12+ characters recommended
- 16+ characters for high-security accounts
- No arbitrary complexity requirements
- No mandatory periodic changes (change only when compromised)

## Implementation

Use a password manager to store 16+ character random passwords for all your accounts. This eliminates the need to remember complex passwords while maintaining maximum security.`
  },
  {
    id: '3',
    category: 'Threat Analysis',
    title: 'Understanding Password Attack Types: Online vs Offline Threats',
    excerpt: 'Not all password attacks are created equal. Learn the difference between rate-limited online attacks, GPU-powered offline cracks, and AI-accelerated pattern matching.',
    date: 'July 5, 2026',
    readTime: '8 min',
    content: `Attackers use different strategies depending on their access level and resources. Understanding these threat models helps you choose appropriately strong passwords for different accounts.

## Online Attacks (Rate-Limited)

**Threat Level: Low** - Attackers try passwords against a live login page. Account lockout after 5-10 failed attempts prevents brute force. Even moderately weak passwords are protected here.

## Offline Hash Crack (GPU)

**Threat Level: High** - Attackers have stolen password hashes from a database breach and use GPU clusters to crack them offline. Without rate limiting, they can try billions of passwords per second.

## AI Pattern Recognition

**Threat Level: Critical** - Attackers use neural networks trained on billions of leaked passwords to predict likely patterns before attempting random combinations. This defeats many "complex" passwords that follow predictable human patterns.

## Protection Strategy

For online attacks: any reasonable password works. For offline attacks: 16+ characters are essential. For AI attacks: use truly random, machine-generated passwords that contain no patterns.`
  },
  {
    id: '4',
    category: 'Technical Guide',
    title: 'Understanding Password Entropy: The Math Behind Strong Passwords',
    excerpt: 'What exactly is password entropy and why do security experts obsess over it? Learn the mathematical foundation that determines password strength.',
    date: 'July 3, 2026',
    readTime: '10 min',
    content: `Password entropy is a mathematical measure of password strength. Understanding it helps you recognize why some passwords are genuinely strong while others appear complex but remain weak.

## What is Entropy?

Entropy, in cryptography, measures the randomness and unpredictability of a password. Higher entropy means harder to crack. The formula is Entropy = log₂(N × L) where N is the character pool size and L is the password length.

## What Entropy Means in Practice

- 50 bits: Acceptable for low-risk accounts
- 70 bits: Recommended for banking and email
- 90+ bits: Critical systems and master passwords
- 128+ bits: Effectively uncrackable with current technology

## Why Length Matters More Than Complexity

A 12-character password with all character types reaches about 80 bits of entropy. A 20-character password using only lowercase letters reaches about 94 bits. Length consistently provides more security than complexity.

## Common Misconceptions

**Myth: "Special characters make passwords secure"** - Length matters far more. A 16-character lowercase password beats an 8-character one with special characters.

**Myth: "I should change my password regularly"** - NIST now recommends against regular changes. Focus on strength instead.

**Myth: "Complexity requirements ensure strong passwords"** - Humans create predictable patterns to meet complexity requirements. True randomness matters far more.`
  },
  {
    id: '5',
    category: 'Security Tips',
    title: 'Two-Factor Authentication: Why SMS is Not Enough',
    excerpt: 'Two-factor authentication protects your accounts, but not all methods are equal. SMS-based 2FA has critical vulnerabilities you need to know about.',
    date: 'June 28, 2026',
    readTime: '9 min',
    content: `Two-factor authentication (2FA) adds a critical second layer of security to your accounts. However, not all 2FA methods offer equal protection.

## The 2FA Hierarchy

**SMS (Weakest):** Vulnerable to SIM swapping attacks and SS7 protocol interception. Use only as a last resort.

**Email (Moderate):** More resistant than SMS but depends on email account security.

**Authenticator Apps (Strong):** Google Authenticator, Authy, and Microsoft Authenticator generate time-based codes locally on your device. Immune to SIM swapping.

**Hardware Keys (Strongest):** YubiKey and Titan Security Keys provide physical authentication that cannot be phished or intercepted.

## Recommended Strategy

Use authenticator apps as your primary 2FA method for most accounts. Invest in hardware keys for critical accounts like email, banking, and password managers. Avoid SMS-based 2FA whenever alternatives are available.

## Action Items

1. Install an authenticator app on your phone
2. Enable 2FA on your email account first
3. Enable 2FA on your banking accounts
4. Enable 2FA on social media
5. Store backup codes in a secure location
6. Consider purchasing a hardware security key`
  },
  {
    id: '6',
    category: 'Technical Guide',
    title: 'How Our Password Generator Works: Client-Side Cryptography Explained',
    excerpt: 'Every password generated uses your browser native crypto API for true randomness. We never store data on servers. Here is how it works.',
    date: 'June 25, 2026',
    readTime: '6 min',
    content: `Our password generator uses military-grade cryptography right in your browser. Here is how it works and why it matters for your security.

## Why Browser-Side Generation?

Your passwords never leave your computer. We use the browser's built-in crypto.getRandomValues() API, the same cryptographic standard used by financial institutions and government agencies worldwide.

## What This Means

- No server storage - we cannot see your passwords
- No network transmission - passwords never leave your device
- No logging - nothing is recorded or tracked
- Maximum privacy - only you see your passwords

## The Generation Process

1. Your browser generates random values using the operating system's entropy sources
2. These values are mapped to the character sets you selected
3. The resulting password is displayed only in your browser
4. You copy it to your clipboard
5. The password exists nowhere except on your device

## Why This Matters

Traditional online password generators that send passwords to servers create a security risk. A compromised server could leak passwords. Our zero-knowledge architecture eliminates this risk entirely.`
  },
  {
    id: '7',
    category: 'Best Practices',
    title: 'Password Managers: Your Digital Security Vault',
    excerpt: 'A password manager is the single best tool for maintaining strong, unique passwords across all your accounts. Here is how to choose and use one.',
    date: 'June 22, 2026',
    readTime: '7 min',
    content: `Password managers securely store all your passwords encrypted with military-grade AES-256 encryption. You only need to remember one strong master password.

## Why You Need a Password Manager

The average person has over 100 online accounts. Remembering strong, unique passwords for each is impossible without help. Password managers solve this by:
- Generating and storing strong random passwords
- Auto-filling login forms
- Syncing across all your devices
- Alerting you to weak or reused passwords
- Notifying you about data breaches

## Top Password Managers

**Bitwarden:** Free, open-source, audited, works everywhere. Best overall choice.

**1Password:** Premium, polished, excellent family sharing features.

**KeePass:** Free, offline-only, maximum control for advanced users.

**iCloud Keychain:** Built into Apple devices, convenient for Apple-only users.

## Setting Up Your Password Manager

1. Choose a manager (Bitwarden recommended for most users)
2. Create a strong master password (16+ characters, use our generator)
3. Install browser extensions and mobile apps
4. Start adding accounts - generate new strong passwords
5. Enable 2FA on your password manager account
6. Export and store a backup of your vault in a secure location`
  },
  {
    id: '8',
    category: 'Threat Analysis',
    title: 'The Anatomy of a Data Breach: What Happens to Your Password',
    excerpt: 'When a service you use gets breached, here is exactly what happens to your password and how strong passwords protect you.',
    date: 'June 20, 2026',
    readTime: '8 min',
    content: `Understanding the data breach lifecycle helps explain why strong passwords are essential even for services you trust.

## Stage 1: The Breach

Attackers exploit a vulnerability to access the service's database. They extract password hashes, emails, usernames, and sometimes payment information.

## Stage 2: Analysis

Hackers attempt to crack password hashes using GPU clusters. Weak passwords get cracked quickly. They identify high-value targets and test stolen credentials against other websites.

## Stage 3: Exploitation

Attackers use cracked passwords to access other accounts, install malware, exfiltrate data, and sell credentials on dark web marketplaces.

## How Strong Passwords Help

When your password is strong (16+ random characters), even with the stolen hash, attackers cannot crack it within any reasonable timeframe. Your account remains secure even when the service you use is breached.

## What to Do After a Breach

1. Check haveibeenpwned.com to see if your email was affected
2. Change your password on the breached service immediately
3. If you reused that password elsewhere, change those too
4. Enable 2FA on all critical accounts
5. Monitor your credit reports for fraud`
  },
  {
    id: '9',
    category: 'Security Tips',
    title: 'Common Password Mistakes and How to Avoid Them',
    excerpt: 'Even security-conscious users make password mistakes. Here are the most common errors and how to fix them.',
    date: 'June 18, 2026',
    readTime: '5 min',
    content: `Avoiding common password mistakes dramatically improves your security posture. Here are the most frequent errors we see.

## Mistake 1: Password Reuse

Using the same password on multiple sites is the single biggest security risk. When one site is breached, all your accounts with that password are compromised.

## Mistake 2: Predictable Patterns

Adding "2024" or "!" to the end of a password is predictable. AI-powered attackers know these patterns and test them first.

## Mistake 3: Personal Information

Using birthdays, pet names, or anniversary dates makes passwords easy to guess through social engineering.

## Mistake 4: Short Passwords

Any password under 12 characters is vulnerable to GPU-based cracking. Aim for 16+ characters.

## Mistake 5: Writing Passwords Down

Sticky notes, notebooks, and digital notes are insecure. Use a password manager instead.

## Mistake 6: Falling for Phishing

Even the strongest password is useless if you type it into a fake website. Always verify URLs before entering credentials.

## Fix Your Password Habits Today

Start by auditing your most important accounts. Use our password checker to evaluate current passwords. Generate new strong passwords for any that are weak or reused.`
  },
  {
    id: '10',
    category: 'Technical Guide',
    title: 'What is a Passphrase? The Secure and Memorable Alternative',
    excerpt: 'Passphrases combine random words for security that is both strong and memorable. Learn how to create and use them effectively.',
    date: 'June 15, 2026',
    readTime: '5 min',
    content: `A passphrase is a sequence of random words used as a password. When done correctly, passphrases provide excellent security while being easier to remember than random character strings.

## The Classic Example

"correct horse battery staple" - made famous by the xkcd comic - demonstrates how four random words create a password that is both secure and memorable.

## Why Passphrases Work

Each word adds significant entropy. With a dictionary of 7,776 common words, each word adds about 12.9 bits of entropy. Four random words provide 51.6 bits - comparable to a 10-character random password.

## Creating Strong Passphrases

- Use at least 5 random words
- Separate words with spaces, hyphens, or special characters
- Consider adding a number for additional entropy
- Never use phrases from songs, books, or movies
- Use a random word generator, not your own creativity

## When to Use Passphrases

Passphrases are ideal for master passwords (password manager, device login) where you need to remember the password. For other accounts, use randomly generated passwords stored in your password manager.`
  },
  {
    id: '11',
    category: 'Privacy',
    title: 'Understanding Browser Password Storage: Convenience vs Security',
    excerpt: 'Browsers offer to save your passwords, but is it safe? Here is what you need to know about built-in password managers in Chrome, Firefox, and Safari.',
    date: 'June 12, 2026',
    readTime: '6 min',
    content: `Modern browsers offer built-in password management, but dedicated password managers provide significantly better security.

## How Browser Password Managers Work

Chrome, Firefox, Safari, and Edge all offer to save passwords. They sync across devices and auto-fill login forms. While convenient, they have limitations.

## Security Concerns

- Browser-stored passwords can be accessed if your device is compromised
- Most browsers don't encrypt passwords with a master password
- Browser sync may expose passwords to cloud provider vulnerabilities
- Limited breach monitoring compared to dedicated services

## When Browser Storage is Acceptable

For low-risk accounts where convenience matters more than security, browser storage is acceptable. For critical accounts (email, banking, password manager itself), use a dedicated password manager.

## Best Practice

Use a dedicated password manager (Bitwarden, 1Password) as your primary password storage. Only use browser storage as a secondary convenience for non-critical accounts. Never store your password manager master password in your browser.`
  },
  {
    id: '12',
    category: 'Security Tips',
    title: 'How to Check If Your Password Has Been Compromised',
    excerpt: 'Learn how to verify if your passwords have appeared in data breaches and what steps to take if they have.',
    date: 'June 10, 2026',
    readTime: '5 min',
    content: `Knowing whether your passwords have been compromised is crucial for maintaining your security posture. Here is how to check and what to do.

## Checking for Breaches

Visit haveibeenpwned.com and search for your email address. This free service maintained by security expert Troy Hunt aggregates data from thousands of known breaches.

## What to Look For

If your email appears in a breach, check:
- Which sites were affected
- What type of data was exposed (passwords, emails, payment info)
- When the breach occurred
- Whether your password was stored in plain text or hashed

## Immediate Actions

1. Change passwords on affected accounts immediately
2. If you reused those passwords elsewhere, change them too
3. Enable 2FA on all critical accounts
4. Monitor your accounts for suspicious activity
5. Sign up for breach notifications

## Long-Term Protection

Subscribe to haveibeenpwned.com notifications for your email. Use a password manager that includes breach monitoring. Consider identity theft protection if your financial information was exposed.`
  },
  {
    id: '13',
    category: 'Technical Guide',
    title: 'HTTPS, SSL, and TLS: The Encryption That Protects Your Data',
    excerpt: 'Every time you visit cyberaipulse, your connection is encrypted. Learn how HTTPS and TLS protect your data in transit.',
    date: 'June 8, 2026',
    readTime: '6 min',
    content: `HTTPS and TLS are the technologies that encrypt data between your browser and websites. Understanding them helps you recognize secure connections.

## What is HTTPS?

HTTPS (Hypertext Transfer Protocol Secure) encrypts communication between your browser and a website. It prevents attackers from intercepting or modifying data in transit.

## How TLS Works

TLS (Transport Layer Security) uses asymmetric cryptography to establish a secure connection, then symmetric encryption for data transfer. This two-step process ensures both authentication and privacy.

## Why It Matters for Passwords

When you generate or check a password on cyberaipulse:
- Your connection is encrypted with TLS 1.3
- No third party can see what you type
- The website identity is verified by a certificate authority
- Data integrity is guaranteed (data cannot be modified in transit)

## Identifying Secure Connections

Look for:
- HTTPS in the URL (not HTTP)
- A padlock icon in your browser address bar
- Valid SSL/TLS certificate (click the padlock to verify)

Never enter passwords on websites without HTTPS. Our site uses HTTPS with TLS 1.3 and an A+ security rating.`
  },
  {
    id: '14',
    category: 'Best Practices',
    title: 'Creating a Personal Cybersecurity Routine',
    excerpt: 'Security is not a one-time setup. Here is how to build and maintain good security habits that protect you year-round.',
    date: 'June 5, 2026',
    readTime: '7 min',
    content: `Cybersecurity is an ongoing practice, not a one-time setup. Building good habits protects you from evolving threats.

## Weekly Habits

- Check your email for breach notifications
- Review your password manager for weak or reused passwords
- Verify that 2FA is working on critical accounts
- Update your browser and operating system

## Monthly Habits

- Review account activity on banking and email
- Check haveibeenpwned.com for new breaches
- Audit app permissions on your phone
- Clear browser cookies and cache

## Quarterly Habits

- Generate new passwords for critical accounts
- Review and update your privacy settings
- Back up your password manager vault
- Test your backup and recovery procedures

## Annual Habits

- Conduct a full security audit of all accounts
- Review and update your digital will (who gets access to what)
- Replace aging hardware that no longer receives security updates
- Refresh your security knowledge with current best practices

## Building the Habit

Start small. Pick one weekly habit and stick with it for a month. Add more as they become automatic. Use our password generator and checker as part of your regular security routine.`
  },
  {
    id: '15',
    category: 'Security Tips',
    title: 'Biometric Authentication: Fingerprints, Face ID, and Beyond',
    excerpt: 'Biometric authentication is convenient, but it has different security properties than passwords. Here is what you need to know.',
    date: 'June 3, 2026',
    readTime: '5 min',
    content: `Biometric authentication uses unique physical characteristics to verify identity. While convenient, it has important security considerations.

## Types of Biometrics

**Fingerprint:** Widely available, fast, but can be copied from surfaces.

**Facial Recognition:** Convenient, but can be fooled by photos or videos (though modern systems use depth sensing).

**Iris Scan:** Very accurate, but requires specialized hardware.

**Voice Recognition:** Convenient for phone systems, but can be recorded.

## The Key Limitation

Unlike passwords, biometrics cannot be changed. If your fingerprint is compromised, you have only 10 fingerprints. If your face data is stolen, you cannot get a new face. This makes biometrics best used as a convenience layer rather than a sole security measure.

## Best Practice

Use biometrics as part of multi-factor authentication. For example:
- Something you have (phone) + something you are (fingerprint)
- Something you know (password) + something you are (face)
- Never use biometrics as your only authentication method

## The Future

Passwordless authentication (passkeys) combines biometrics with cryptographic keys stored on your device. This provides both convenience and security. Major platforms including Google, Apple, and Microsoft are already rolling out passkey support.`
  }
]

const Blog = ({ isDark: propsDark }) => {
  const { isDark: contextDark } = useTheme()
  const isDark = propsDark !== undefined ? propsDark : contextDark
  const { id } = useParams()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [subscriptionMessage, setSubscriptionMessage] = useState('')

  const handleSubscribe = () => {
    if (!email || !email.includes('@')) {
      setSubscriptionMessage('Please enter a valid email')
      setTimeout(() => setSubscriptionMessage(''), 3000)
      return
    }
    setSubscriptionMessage('Thank you for subscribing!')
    setEmail('')
    setTimeout(() => setSubscriptionMessage(''), 3000)
  }

  if (id) {
    const post = blogPosts.find(p => p.id === id)
    if (!post) {
      return (
        <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20 text-center">
          <div className={`border rounded-2xl p-12 transition-colors duration-300 ${isDark ? 'bg-[#111118] border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="text-6xl mb-6">🔍</div>
            <h1 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Post Not Found
            </h1>
            <p className={`mb-8 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              The blog post you are looking for does not exist.
            </p>
            <button
              onClick={() => navigate('/blog')}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors"
            >
              Back to Blog
            </button>
          </div>
        </section>
      )
    }

    return (
      <section className={`max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
        <button
          onClick={() => navigate('/blog')}
          className={`flex items-center gap-2 transition-colors mb-6 font-semibold ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}
        >
          &larr; Back to Blog
        </button>

        <article className={`border rounded-2xl p-8 sm:p-12 transition-colors duration-300 ${isDark ? 'bg-[#111118] border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 text-xs font-mono rounded-full border ${
              isDark ? 'text-cyan-300 bg-cyan-600/20 border-cyan-500/40' : 'text-cyan-700 bg-cyan-50 border-cyan-300'
            }`}>
              {post.category}
            </span>
          </div>
          <h1 className={`text-3xl sm:text-4xl font-bold mb-4 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {post.title}
          </h1>

          <div className={`flex items-center gap-4 text-sm mb-8 pb-8 border-b transition-colors duration-300 ${isDark ? 'text-gray-500 border-gray-800' : 'text-gray-600 border-gray-300'}`}>
            <span>{post.date}</span>
            <span>&bull;</span>
            <span>{post.readTime}</span>
          </div>

          <div className={`space-y-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={idx} className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2">
                    {paragraph.split('\n').map((item, lidx) => (
                      <li key={lidx} className="ml-4">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              )
            })}
          </div>
        </article>
      </section>
    )
  }

  return (
    <section className={`max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20 transition-colors duration-300 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
      <div className="mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-3 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Security Blog
        </h2>
        <p className={`text-sm sm:text-base transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Expert insights on password security, threat analysis, and best practices to keep your digital life safe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <article key={post.id} className={`border rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400 ${isDark ? 'bg-[#111118] border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="mb-3">
              <span className={`inline-block px-2.5 py-1 text-[10px] font-mono rounded-full border ${
                isDark ? 'text-cyan-300 bg-cyan-600/20 border-cyan-500/40' : 'text-cyan-700 bg-cyan-50 border-cyan-300'
              }`}>
                {post.category}
              </span>
            </div>
            <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-cyan-400 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <Link to={`/blog/${post.id}`} className="hover:text-cyan-400 transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-700'}`}>
              {post.excerpt}
            </p>
            <div className={`flex items-center justify-between text-xs transition-colors duration-300 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
              <span>{post.date}</span>
              <Link to={`/blog/${post.id}`} className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                Read More &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className={`mt-16 border rounded-2xl p-8 sm:p-12 transition-colors duration-300 ${
        isDark ? 'bg-cyan-600/10 border-cyan-500/40' : 'bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200'
      }`}>
        <h3 className={`text-2xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Stay Updated on Security Trends
        </h3>
        <p className={`mb-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Get monthly insights on password security, AI threats, and best practices delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
            className={`flex-1 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 transition-all duration-300 ${
              isDark
                ? 'bg-[#0d0d14] border border-gray-700 text-white placeholder-gray-600 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-400/50'
            }`}
          />
          <button
            onClick={handleSubscribe}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
        {subscriptionMessage && (
          <p className={`mt-3 text-sm font-semibold transition-all ${
            subscriptionMessage.includes('Thank')
              ? isDark ? 'text-emerald-400' : 'text-emerald-600'
              : isDark ? 'text-orange-400' : 'text-orange-600'
          }`}>
            {subscriptionMessage}
          </p>
        )}
      </div>
    </section>
  )
}

export default Blog
