import { useTheme } from '../context/ThemeContext'

const Privacy = () => {
  const { isDark } = useTheme()

  return (
    <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
      <div className={`border rounded-2xl p-8 sm:p-12 transition-colors duration-300 ${isDark ? 'bg-[#111118] border-gray-800' : 'bg-white border-gray-200'}`}>
        <h1 className={`text-4xl sm:text-5xl font-bold mb-4 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Privacy Policy
        </h1>

        <div className={`text-sm mb-8 pb-8 border-b transition-colors duration-300 ${isDark ? 'text-gray-500 border-gray-800' : 'text-gray-600 border-gray-300'}`}>
          <span>Last Updated: July 13, 2026</span>
        </div>

        <div className={`space-y-6 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
          <p className="leading-relaxed">
            At cyberaipulse, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our password generator and checker tool.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            1. Information We Do NOT Collect
          </h2>
          <p className="leading-relaxed">
            <strong className={isDark ? 'text-white' : 'text-gray-900'}>Zero-Knowledge Architecture:</strong> Our password generator operates entirely in your browser using the native <code className={`px-2 py-1 rounded font-mono text-sm ${isDark ? 'bg-gray-800 text-emerald-300' : 'bg-gray-100 text-emerald-700'}`}>crypto.getRandomValues()</code> API. This means:
          </p>
          <ul className={`list-disc list-inside space-y-2 ml-4`}>
            <li>We do NOT store your passwords on our servers</li>
            <li>We do NOT transmit your passwords to our servers</li>
            <li>We do NOT have access to any passwords you generate or check</li>
            <li>We do NOT log or track the specific passwords you create</li>
            <li>All processing happens entirely on YOUR device in YOUR browser</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            2. Information We Collect
          </h2>
          <p className="leading-relaxed">
            <strong className={isDark ? 'text-white' : 'text-gray-900'}>Optional Newsletter:</strong> If you subscribe to our security blog newsletter:
          </p>
          <ul className={`list-disc list-inside space-y-2 ml-4`}>
            <li>We collect your email address for newsletter delivery</li>
            <li>We use industry-standard email providers to manage subscriptions</li>
            <li>You can unsubscribe at any time (link included in every email)</li>
            <li>We do NOT share your email with third parties</li>
          </ul>

          <p className="leading-relaxed mt-4">
            <strong className={isDark ? 'text-white' : 'text-gray-900'}>Automatic Technical Data:</strong> Like all websites, we automatically collect:
          </p>
          <ul className={`list-disc list-inside space-y-2 ml-4`}>
            <li>IP address (used for security and analytics)</li>
            <li>Browser type and version</li>
            <li>Pages visited and time spent on site</li>
            <li>Referrer information</li>
            <li>Device type (mobile, tablet, desktop)</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            3. How Google AdSense Uses Your Data
          </h2>
          <p className="leading-relaxed">
            We use <strong className={isDark ? 'text-white' : 'text-gray-900'}>Google AdSense</strong> to display advertisements on our website. Google AdSense uses cookies and web beacons to serve ads based on your prior visits to our website and other websites on the internet.
          </p>
          <p className="leading-relaxed mt-4">
            Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Google's Ads Settings</a>.
          </p>
          <p className="leading-relaxed mt-4">
            <strong className={isDark ? 'text-white' : 'text-gray-900'}>How Google uses data:</strong> When you visit a website that uses Google AdSense, Google may use cookies, device identifiers, and other data to:
          </p>
          <ul className={`list-disc list-inside space-y-2 ml-4`}>
            <li>Serve personalized ads based on your interests</li>
            <li>Measure ad performance and effectiveness</li>
            <li>Prevent fraud and abuse</li>
            <li>Improve the quality of Google's advertising services</li>
          </ul>
          <p className="leading-relaxed mt-4">
            You can read more about how Google uses data when you use our site at <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">How Google uses information from sites or apps that use our services</a>.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            4. Cookies & Local Storage
          </h2>
          <p className="leading-relaxed">
            Our site uses the following types of cookies:
          </p>
          <ul className={`list-disc list-inside space-y-2 ml-4`}>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Essential cookies:</strong> Required for basic site functionality (theme preference, cookie consent)</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Google AdSense cookies:</strong> Used by Google to personalize ads, measure performance, and prevent fraud</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Analytics cookies:</strong> Help us understand how visitors use our site</li>
          </ul>
          <p className="leading-relaxed mt-4">
            You can control cookie settings through your browser preferences. Disabling certain cookies may affect ad personalization but will not prevent you from using our core password tools.
          </p>
          <p className="leading-relaxed mt-4">
            Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            5. Data Storage & Security
          </h2>
          <p className="leading-relaxed">
            <strong className={isDark ? 'text-white' : 'text-gray-900'}>Encryption in Transit:</strong> All data transmitted between your browser and our servers is encrypted with HTTPS/TLS 1.3.
          </p>
          <p className="leading-relaxed mt-4">
            <strong className={isDark ? 'text-white' : 'text-gray-900'}>No Password Storage:</strong> Since passwords never leave your device, we cannot store them.
          </p>
          <p className="leading-relaxed mt-4">
            <strong className={isDark ? 'text-white' : 'text-gray-900'}>Server Security:</strong> Our infrastructure is hosted on Vercel, which meets enterprise security standards including SOC 2 Type II compliance.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            6. Third-Party Services
          </h2>
          <p className="leading-relaxed">
            We use the following third-party services:
          </p>
          <ul className={`list-disc list-inside space-y-2 ml-4`}>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Vercel:</strong> Hosting provider</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Google Fonts:</strong> Typography service</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Google AdSense:</strong> Advertising service</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>CountAPI:</strong> Visitor counting (anonymous, non-personal data only)</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            7. Children's Privacy
          </h2>
          <p className="leading-relaxed">
            cyberaipulse is not intended for children under 13. We do not knowingly collect personal information from children under 13.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            8. Your Rights
          </h2>
          <p className="leading-relaxed">
            Under data protection laws (GDPR, CCPA, etc.), you have the right to:
          </p>
          <ul className={`list-disc list-inside space-y-2 ml-4`}>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Access:</strong> Request what personal data we hold about you</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Deletion:</strong> Request deletion of your data</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Portability:</strong> Receive your data in a portable format</li>
            <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Opt-Out:</strong> Unsubscribe from newsletters or opt out of personalized ads</li>
          </ul>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            9. Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy occasionally. We'll notify you of significant changes by updating the "Last Updated" date.
          </p>

          <h2 className={`text-2xl font-bold mt-8 mb-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            10. Contact Us
          </h2>
          <p className="leading-relaxed">
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <div className={`rounded-lg p-4 mt-4 transition-colors duration-300 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-300'}`}>
            <p>Email: privacy@cyberaipulse.tech</p>
            <p className="mt-2">Response Time: We aim to respond to privacy requests within 30 days</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Privacy
