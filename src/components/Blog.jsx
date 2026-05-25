const Blog = () => (
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
      {/* Blog Post 1 */}
      <article className="bg-[#111118] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-violet-500/50 transition-all duration-300 group">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-mono text-violet-300 bg-violet-600/10 border border-violet-500/20 rounded-full">
            Security Tips
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
          Why AI Crack Analysis Matters for Your Passwords
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
          Traditional password strength meters only account for brute-force attacks. But modern threats use AI and pattern recognition. Learn how our neural network analysis simulates real-world AI attacks to give you accurate crack time estimates.
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>May 25, 2026</span>
          <button className="text-violet-400 hover:text-violet-300 transition-colors font-semibold">
            Read More →
          </button>
        </div>
      </article>

      {/* Blog Post 2 */}
      <article className="bg-[#111118] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-violet-500/50 transition-all duration-300 group">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-mono text-emerald-300 bg-emerald-600/10 border border-emerald-500/20 rounded-full">
            Best Practices
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
          The 16-Character Rule: Why Length Matters Most
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
          Discover why security experts recommend 16+ character passwords. We break down the mathematics of entropy and show you how adding just a few characters can increase crack time from hours to centuries.
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>May 24, 2026</span>
          <button className="text-violet-400 hover:text-violet-300 transition-colors font-semibold">
            Read More →
          </button>
        </div>
      </article>

      {/* Blog Post 3 */}
      <article className="bg-[#111118] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-violet-500/50 transition-all duration-300 group">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-mono text-orange-300 bg-orange-600/10 border border-orange-500/20 rounded-full">
            Threat Analysis
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
          Understanding Password Crack Speeds: Online vs Offline Attacks
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
          Not all password attacks are created equal. Learn the difference between rate-limited online attacks, GPU-powered offline cracks, and AI-accelerated pattern matching. Our tool visualizes all three scenarios.
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>May 23, 2026</span>
          <button className="text-violet-400 hover:text-violet-300 transition-colors font-semibold">
            Read More →
          </button>
        </div>
      </article>

      {/* Blog Post 4 */}
      <article className="bg-[#111118] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-violet-500/50 transition-all duration-300 group">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-mono text-blue-300 bg-blue-600/10 border border-blue-500/20 rounded-full">
            Tool Guide
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
          How to Use Our Cryptographically Secure Generator
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
          Every password generated uses the browser's native crypto.getRandomValues() API for true randomness. We never store data on servers. Here's how to get the most out of cyberaipulse's client-side security.
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>May 22, 2026</span>
          <button className="text-violet-400 hover:text-violet-300 transition-colors font-semibold">
            Read More →
          </button>
        </div>
      </article>
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
          className="flex-1 bg-[#0d0d14] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-all"
        />
        <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
          Subscribe
        </button>
      </div>
    </div>
  </section>
)

export default Blog
