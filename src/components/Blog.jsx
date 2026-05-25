import { useState } from 'react'

const blogPosts = [
  {
    id: 1,
    category: 'Security Tips',
    categoryColor: 'violet',
    title: 'Why AI Crack Analysis Matters for Your Passwords',
    excerpt: 'Traditional password strength meters only account for brute-force attacks. But modern threats use AI and pattern recognition. Learn how our neural network analysis simulates real-world AI attacks to give you accurate crack time estimates.',
    date: 'May 25, 2026',
    content: `Traditional password strength meters are outdated. They were designed for an era when attackers only used brute-force methods—trying every possible combination sequentially. But modern cybercriminals use sophisticated AI and machine learning to crack passwords far more efficiently.

## The Problem with Traditional Methods

Standard entropy calculations assume random attack patterns. They don't account for:
- Dictionary attacks that try common words first
- Keyboard pattern recognition (qwerty, asdfgh, etc.)
- Personal information correlation (birthdays, pet names)
- AI pattern prediction that learns from billions of leaked passwords

When you enter a password like "Password123!", traditional meters might rate it as "good" because it has uppercase, lowercase, numbers, and symbols. But attackers have learned that users follow predictable patterns. Adding "!" after a number is the most common special character placement.

## How Our AI Analysis Works

Our neural network doesn't just count characters—it analyzes your password like an attacker would. We simulate:

### Online Attacks (Rate-Limited)
10-100 attempts per second (blocked by account lockout)

### Offline Hash Attacks
10 billion attempts per second (when attackers have stolen the password hash)

### GPU Cluster Attacks
1 trillion attempts per second (using specialized graphics card clusters)

### AI Pattern Recognition
Neural network analysis that identifies weak patterns humans create, even with complex character requirements

## What This Means for Your Security

A 12-character password with mixed case might seem secure against brute force (centuries to crack), but an AI system trained on leaked password databases might crack it in minutes by recognizing common patterns.

By analyzing passwords against realistic threat models, we help you understand true password strength. This is why cyberaipulse's AI crack analysis is essential for modern security.

## Recommendations

- **Use 16+ characters** to resist pattern recognition
- **Avoid common substitutions** (@ for a, 1 for i, etc.)
- **Use passphrase approach** (random words are harder for AI to predict)
- **Test regularly** with tools like cyberaipulse to verify strength against modern threats`
  },
  {
    id: 2,
    category: 'Best Practices',
    categoryColor: 'emerald',
    title: 'The 16-Character Rule: Why Length Matters Most',
    excerpt: 'Discover why security experts recommend 16+ character passwords. We break down the mathematics of entropy and show you how adding just a few characters can increase crack time from hours to centuries.',
    date: 'May 24, 2026',
    content: `Password length is your strongest defense against modern cracking attempts. But how many characters is "enough"? Security experts consistently recommend 16 characters as the minimum for important accounts. Here's why.

## Understanding Entropy

Entropy measures the "randomness" and strength of a password. Each character you add exponentially increases entropy:

### The Math
- 8 characters: ~52 bits of entropy (weak)
- 12 characters: ~78 bits of entropy (moderate)
- 16 characters: ~105 bits of entropy (strong)
- 20 characters: ~131 bits of entropy (very strong)

In practical terms:
- An 8-character password: 2 days to crack with GPU
- A 12-character password: 2 months to crack with GPU
- A 16-character password: 200 years to crack with GPU
- A 20-character password: 200,000 years to crack with GPU

## Why 16 Matters

16 characters represents the threshold where:

1. **GPU attacks become impractical** - Even with cutting-edge graphics cards, cracking time exceeds human lifetime
2. **Offline attacks become unfeasible** - If a hash is stolen, GPU clusters still need decades
3. **AI pattern recognition fails** - Modern neural networks can't learn enough patterns from 16 random characters
4. **Memory requirements explode** - Attackers need more computing resources than available

## Real-World Examples

**"password123"** (11 chars)
- Entropy: 45 bits
- GPU crack time: 5 hours ❌

**"MyDog!Likes2Run"** (15 chars, mixed patterns)
- Entropy: 68 bits (predictable patterns reduce effective strength)
- GPU crack time: 6 months ⚠️

**"Correct-Horse-Battery-Staple"** (28 chars, passphrase)
- Entropy: 95 bits (words chosen randomly)
- GPU crack time: 50,000 years ✓

**"kR9@pL2#mX$vQ7&nW5!"** (20 random chars)
- Entropy: 131 bits
- GPU crack time: 200,000 years ✓

## Practical Implementation

You don't need 16 random special characters—passphrases work great:

### Strong 16-Character Options:
- Random: \`mK9x@pL2#vR4$sQ6\`
- Passphrase: \`purple-elephant-42-dance\`
- Mixed: \`Coffee2024\$Green\`

Use cyberaipulse's generator to create truly random 16+ character passwords that meet this security standard.

## Summary

- **Target: 16+ characters** for critical accounts
- **Length > Complexity** (a long simple password beats a short complex one)
- **Use passphrases** for easy memorization
- **Test with cyberaipulse** to verify strength against realistic attacks`
  },
  {
    id: 3,
    category: 'Threat Analysis',
    categoryColor: 'orange',
    title: 'Understanding Password Crack Speeds: Online vs Offline Attacks',
    excerpt: 'Not all password attacks are created equal. Learn the difference between rate-limited online attacks, GPU-powered offline cracks, and AI-accelerated pattern matching. Our tool visualizes all three scenarios.',
    date: 'May 23, 2026',
    content: `Attackers use different strategies depending on their access level and resources. Understanding these threat models helps you choose appropriately strong passwords for different accounts.

## Attack Type 1: Online Attacks (Rate-Limited)

**Threat Level: Lowest** 🟢

### What Happens
Attacker tries passwords against a live login page without direct access to the password database.

### Limitations
- Account lockout after 5-10 failed attempts
- Typical retry limit: 100 attempts per second maximum
- Network delays add overhead
- Easily detected and blocked by security systems

### Crack Time Examples
- 8-char password: seconds (if common dictionary word)
- 12-char password: impossible (account locked)
- 16-char password: impossible (account locked)

**Defense:** Anything better than obvious passwords works here.

---

## Attack Type 2: Offline Hash Crack (GPU)

**Threat Level: High** 🟠

### What Happens
Attacker has stolen password hashes from a database breach (like Adobe, LinkedIn, etc.).
They use GPU clusters to compute hashes offline without account lockout limits.

### Speed
- Single GPU: 10 billion guesses/second
- GPU Cluster: 100+ billion guesses/second
- Specialized hardware: 1 trillion guesses/second

### Crack Time Examples
- 8-char password: 2 days ❌
- 12-char password: 2 months ❌
- 16-char password: 200 years ✓
- 20-char password: 200,000 years ✓

**Defense:** This is why 16+ characters matters—GPU attacks become impractical.

---

## Attack Type 3: AI Pattern Recognition

**Threat Level: Critical** 🔴

### What Happens
Attackers use neural networks trained on billions of leaked passwords to predict likely patterns before trying random combinations.

Modern AI can learn:
- Common word substitutions (@ for a, 1 for i)
- Keyboard patterns (qwerty, asdfgh)
- Personal information correlations
- Seasonal variations in passwords
- Temporal patterns (2024, today's date)

### Speed
- AI-guided attempts: 1 million "smart" guesses/second
- First 10,000 guesses get 40% of real-world password hits
- Pattern recognition reduces effective entropy by 50-70%

### Crack Time Examples (After AI Analysis)
- "Password123!" (12 chars, predictable): 2 days ❌
- "Tr0pic@lSunset" (14 chars, pattern substitutions): 1 week ❌
- "purple-elephant-coffee-42" (25 chars, random words): 50,000 years ✓
- "kR9@pL2#mX$vQ7&nW5" (20 random): 200,000 years ✓

**Defense:** Use truly random characters or unpredictable passphrases. Avoid patterns AI can recognize.

---

## Real-World Breach Scenarios

### Scenario 1: LinkedIn Breach
- **Status:** Offline hash attack
- **Your Risk:** Passwords with <14 chars at risk
- **Action:** Use 16+ char password for LinkedIn; change it

### Scenario 2: Email Provider Breach
- **Status:** Offline hash + pattern AI (sophisticated attackers)
- **Your Risk:** Any password <16 chars + common patterns
- **Action:** Use unique 16+ char random password with no patterns

### Scenario 3: Bank Login Attempt
- **Status:** Online attack (rate-limited)
- **Your Risk:** Extremely low; account locks after 5 attempts
- **Action:** Even 12 chars sufficient; security questions matter more

---

## What cyberaipulse Shows You

Our password checker analyzes your password against all three threat models:

1. **Online Attack** (100/sec) - Time to crack with account lockout
2. **Offline GPU** (10B/sec) - Time with stolen hash
3. **GPU Cluster** (1T/sec) - Time with specialized hardware
4. **AI Pattern** (ML-guided) - Time against neural network crack attempt

This gives you realistic crack time estimates for real-world threats.

---

## Protection Strategy

| Password Length | Online | GPU Offline | AI Pattern | Recommendation |
|---|---|---|---|---|
| 8 chars | hours | 2 days | minutes | ❌ Never |
| 12 chars | safe | 2 months | 2 days | ⚠️ Social media only |
| 16 chars | safe | 200 years | 200 years | ✓ Standard accounts |
| 20 chars | safe | 200k years | 200k years | ✓ Critical (email, banking) |

Use cyberaipulse to generate and test 16+ character passwords for your most important accounts.`
  },
  {
    id: 4,
    category: 'Tool Guide',
    categoryColor: 'blue',
    title: 'How to Use Our Cryptographically Secure Generator',
    excerpt: 'Every password generated uses the browser\'s native crypto.getRandomValues() API for true randomness. We never store data on servers. Here\'s how to get the most out of cyberaipulse\'s client-side security.',
    date: 'May 22, 2026',
    content: `cyberaipulse's password generator uses military-grade cryptography right in your browser. Here's how it works and how to use it effectively.

## Why Browser-Side Generation?

Your passwords never leave your computer. We use the browser's built-in \`crypto.getRandomValues()\` API, which is the same cryptographic standard used by:
- Financial institutions
- Government agencies
- Military communications
- Major tech companies

### What This Means
- **No server storage** - We can't see your passwords
- **No network transmission** - Passwords never leave your device
- **No logging** - Nothing is recorded or tracked
- **Maximum privacy** - Only you see your passwords

---

## How the Generator Works

### Step 1: Choose Your Length
Use the slider to select password length (8-64 characters recommended: 16+).

Longer passwords = exponentially stronger security

### Step 2: Select Character Types
Choose which character sets to include:

- **Uppercase (A-Z)** - Essential for complexity
- **Lowercase (a-z)** - Always recommended
- **Numbers (0-9)** - Increases entropy
- **Symbols (!@#$%...)** - Maximum complexity

For strongest passwords: Enable all four.

### Step 3: Generate
Click the generate button. Each click creates a new cryptographically random password using true randomness, not pseudo-random algorithms.

### Step 4: Strength Check
Generated password automatically analyzed by our neural network:
- Shows estimated crack time
- Displays entropy level
- Warns about any patterns
- Provides suggestions

### Step 5: Copy & Use
Click the copy button to clipboard. Use immediately in account creation.

---

## Best Practices for Generation

### For Banking/Finance (Highest Security)
- Length: 20+ characters
- Character types: All enabled
- Generation approach: Use generated password as-is (don't modify it)
- Storage: Password manager (LastPass, 1Password, Bitwarden)

### For Email Accounts (Critical)
- Length: 18+ characters
- Character types: All enabled
- Generation approach: Use as-is or note first/last 2 chars for memory aid
- Storage: Password manager with backup

### For Social Media (Medium Security)
- Length: 16+ characters
- Character types: Lowercase, uppercase, numbers, symbols
- Generation approach: Can be modified slightly for memorable patterns
- Storage: Password manager or secure note

### For Less Critical Sites (Low Security)
- Length: 12+ characters
- Character types: Lowercase, uppercase, numbers
- Generation approach: Any approach is fine
- Storage: Password manager

---

## Why We Don't Store Passwords

Here's the technical reason:

1. **We generate passwords** in your browser using crypto.getRandomValues()
2. **You copy them** to your clipboard
3. **You paste them** into your account
4. **The server receives** the password over HTTPS
5. **The server hashes** the password for storage
6. **cyberaipulse never** sees or stores the plaintext password

This is the security best practice. Even cyberaipulse developers can't access your passwords.

---

## Common Questions

**Q: Isn't random harder to remember?**
A: Yes! Use a password manager like Bitwarden (free), 1Password, or LastPass. Store your 20-character random passwords there.

**Q: Can I modify the generated password?**
A: Modifications usually weaken passwords. If you must remember it, use a passphrase like "Coffee-Purple-42-Dance" instead—easier to remember, still very secure.

**Q: Is my generator password better than typed ones?**
A: Yes. Humans are predictable. Our generator is truly random, which is mathematically stronger.

**Q: Why does cyberaipulse ask for crypto.getRandomValues()?**
A: JavaScript's Math.random() is NOT cryptographically secure. For passwords, you need true randomness. crypto.getRandomValues() is the browser standard.

**Q: Can government agencies crack crypto.getRandomValues()?**
A: No known method exists. This is the same standard used for top-secret military communications.

---

## Using Generated Passwords

### The Right Way:
1. Generate 20+ char password with cyberaipulse
2. Copy to clipboard immediately
3. Paste into account creation field
4. Paste into password manager
5. Never manually type or modify

### Common Mistakes:
- ❌ Modifying "kR9@pL2" to "kR9@pL2!(year)" — reduces entropy
- ❌ Using "first letter capital" pattern — AI learns this
- ❌ Memorizing long passwords — defeats the purpose
- ❌ Reusing generated password across sites — compromises all accounts

---

## Verifying Password Strength

After generation, cyberaipulse's checker shows:

- **Entropy Bits:** Measure of randomness (target: 100+)
- **Crack Time:** Estimated time against GPU attack
- **AI Pattern Score:** Vulnerability to machine learning attacks
- **Feedback:** Specific suggestions for improvement

If the checker shows weak rating for a generated password, it's likely a false positive from pattern recognition of dictionary words. In that case, regenerate.

---

## Summary

1. **Generate** true random passwords in your browser
2. **Aim for 16+ characters** for critical accounts
3. **Use password manager** to store them
4. **Test with checker** to verify strength
5. **Never type or modify** generated passwords
6. **Trust the randomness** — it's cryptographically secure

Start using cyberaipulse's generator today for maximum security with zero server-side risk!`
  }
]

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null)
  const [email, setEmail] = useState('')
  const [subscriptionMessage, setSubscriptionMessage] = useState('')

  const handleSubscribe = () => {
    if (!email || !email.includes('@')) {
      setSubscriptionMessage('Please enter a valid email')
      setTimeout(() => setSubscriptionMessage(''), 3000)
      return
    }
    
    setSubscriptionMessage('✓ Thank you for subscribing!')
    setEmail('')
    setTimeout(() => setSubscriptionMessage(''), 3000)
  }

  if (selectedPost) {
    return (
      <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
        {/* Back Button */}
        <button
          onClick={() => setSelectedPost(null)}
          className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors mb-6 font-semibold"
        >
          ← Back to Blog
        </button>

        {/* Full Article */}
        <article className="bg-[#111118] border border-gray-800 rounded-2xl p-8 sm:p-12">
          <div className="mb-6">
            <span className={`inline-block px-3 py-1 text-xs font-mono text-${selectedPost.categoryColor}-300 bg-${selectedPost.categoryColor}-600/10 border border-${selectedPost.categoryColor}-500/20 rounded-full`}>
              {selectedPost.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            {selectedPost.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-800/60">
            <span>{selectedPost.date}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
            {selectedPost.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={idx} className="text-xl font-semibold text-violet-300 mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                )
              }
              if (paragraph.startsWith('|')) {
                return (
                  <div key={idx} className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse">
                      <tbody>
                        {paragraph.split('\n').map((row, ridx) => (
                          <tr key={ridx} className="border-b border-gray-700">
                            {row.split('|').map((cell, cidx) => (
                              <td key={cidx} className="px-3 py-2 text-gray-300">
                                {cell.trim()}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 text-gray-300">
                    {paragraph.split('\n').map((item, lidx) => (
                      <li key={lidx} className="ml-4">
                        {item.replace('- ', '')}
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={idx} className="text-gray-300 leading-relaxed">
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
    <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
          Security Blog
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          Expert insights on password security, best practices, and threat analysis.
        </p>
      </div>

      {/* Featured Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-[#111118] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-violet-500/50 transition-all duration-300 group">
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 text-xs font-mono text-${post.categoryColor}-300 bg-${post.categoryColor}-600/10 border border-${post.categoryColor}-500/20 rounded-full`}>
                {post.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{post.date}</span>
              <button
                onClick={() => setSelectedPost(post)}
                className="text-violet-400 hover:text-violet-300 transition-colors font-semibold"
              >
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gradient-to-r from-violet-600/10 to-purple-600/10 border border-violet-500/20 rounded-2xl p-8 sm:p-12">
        <h3 className="text-2xl font-bold text-white mb-3">
          Stay Updated on Security Trends
        </h3>
        <p className="text-gray-400 mb-6">
          Get monthly insights on password security, AI threats, and best practices delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
            className="flex-1 bg-[#0d0d14] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
          />
          <button
            onClick={handleSubscribe}
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
        {subscriptionMessage && (
          <p className={`mt-3 text-sm font-semibold transition-all ${
            subscriptionMessage.includes('Thank') 
              ? 'text-emerald-400' 
              : 'text-orange-400'
          }`}>
            {subscriptionMessage}
          </p>
        )}
      </div>
    </section>
  )
}

export default Blog
