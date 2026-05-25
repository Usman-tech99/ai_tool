const Privacy = ({ onBack }) => (
  <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
    {/* Back Button */}
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6 font-semibold"
    >
      ← Back
    </button>

    {/* Privacy Policy */}
    <article className="bg-[#111118] border border-gray-800 rounded-2xl p-8 sm:p-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
        Privacy Policy
      </h1>

      <div className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-800/60">
        <span>Last Updated: May 25, 2026</span>
      </div>

      {/* Privacy Content */}
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="text-gray-300 leading-relaxed">
          At cyberaipulse, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our password generator and checker tool.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          1. Information We Do NOT Collect
        </h2>
        <p className="text-gray-300 leading-relaxed">
          <strong className="text-white">Zero-Knowledge Architecture:</strong> We are committed to your privacy. Our password generator operates entirely in your browser using the native <code className="bg-[#0d0d14] px-2 py-1 rounded text-cyan-300 font-mono">crypto.getRandomValues()</code> API. This means:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>We do NOT store your passwords on our servers</li>
          <li>We do NOT transmit your passwords to our servers</li>
          <li>We do NOT have access to any passwords you generate or check</li>
          <li>We do NOT log or track the specific passwords you create</li>
          <li>All processing happens entirely on YOUR device in YOUR browser</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          2. Information We Collect
        </h2>
        <p className="text-gray-300 leading-relaxed">
          <strong className="text-white">Optional Newsletter:</strong> If you subscribe to our security blog newsletter:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>We collect your email address for newsletter delivery</li>
          <li>We use industry-standard email providers to manage subscriptions</li>
          <li>You can unsubscribe at any time (link included in every email)</li>
          <li>We do NOT share your email with third parties</li>
        </ul>

        <p className="text-gray-300 leading-relaxed mt-4">
          <strong className="text-white">Automatic Technical Data:</strong> Like all websites, we automatically collect:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>IP address (used for security and analytics)</li>
          <li>Browser type and version</li>
          <li>Pages visited and time spent on site</li>
          <li>Referrer information</li>
          <li>Device type (mobile, tablet, desktop)</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong className="text-white">Newsletter Emails:</strong> To send you security tips and password best practices</li>
          <li><strong className="text-white">Analytics:</strong> To understand how users interact with our tool and improve it</li>
          <li><strong className="text-white">Security:</strong> To detect and prevent abuse, malware, or attacks</li>
          <li><strong className="text-white">Legal:</strong> To comply with laws and respond to legal requests</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          4. Data Storage & Security
        </h2>
        <p className="text-gray-300 leading-relaxed">
          <strong className="text-white">Encryption in Transit:</strong> All data transmitted between your browser and our servers is encrypted with HTTPS/TLS 1.3, the military-grade encryption standard.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          <strong className="text-white">No Password Storage:</strong> Since passwords never leave your device, we cannot store them. Your generated passwords exist only in your browser's memory.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          <strong className="text-white">Server Security:</strong> Our infrastructure is hosted on Vercel, which meets enterprise security standards including SOC 2 Type II compliance.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          5. Cookies & Local Storage
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Our site uses minimal cookies:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong className="text-white">Session cookies:</strong> Maintain your login state (if applicable)</li>
          <li><strong className="text-white">Analytics cookies:</strong> Track page views and user behavior</li>
          <li><strong className="text-white">No tracking cookies:</strong> We do not use third-party tracking or advertising cookies</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mt-4">
          You can disable cookies in your browser settings at any time.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          6. Third-Party Services
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We use the following third-party services:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong className="text-white">Vercel:</strong> Hosting provider (Privacy Policy: vercel.com/legal/privacy)</li>
          <li><strong className="text-white">Google Fonts:</strong> Typography service (Privacy Policy: google.com/privacy)</li>
          <li><strong className="text-white">Google AdSense:</strong> Ad serving (Privacy Policy: google.com/policies/privacy/partners/)</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mt-4">
          These services may collect data according to their privacy policies. We recommend reviewing them.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          7. Children's Privacy
        </h2>
        <p className="text-gray-300 leading-relaxed">
          cyberaipulse is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we learn we have collected such information, we will delete it immediately.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          8. Your Rights
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Under data protection laws (GDPR, CCPA, etc.), you have the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong className="text-white">Access:</strong> Request what personal data we hold about you</li>
          <li><strong className="text-white">Deletion:</strong> Request deletion of your data (we'll remove your email from our list)</li>
          <li><strong className="text-white">Portability:</strong> Receive your data in a portable format</li>
          <li><strong className="text-white">Opt-Out:</strong> Unsubscribe from newsletters at any time</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          9. Changes to This Policy
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We may update this Privacy Policy occasionally. We'll notify you of significant changes by updating the "Last Updated" date. Your continued use of cyberaipulse constitutes acceptance of any changes.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          10. Contact Us
        </h2>
        <p className="text-gray-300 leading-relaxed">
          If you have questions about this Privacy Policy or our privacy practices, contact us at:
        </p>
        <div className="bg-[#0d0d14] border border-gray-700 rounded-lg p-4 mt-4 text-gray-300">
          <p><strong>Email:</strong> privacy@cyberaipulse.tech</p>
          <p className="mt-2"><strong>Response Time:</strong> We aim to respond to privacy requests within 30 days</p>
        </div>
      </div>
    </article>
  </section>
)

export default Privacy
