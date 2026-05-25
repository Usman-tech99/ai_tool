const Terms = ({ onBack }) => (
  <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
    {/* Back Button */}
    <button
      onClick={onBack}
      className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6 font-semibold"
    >
      ← Back
    </button>

    {/* Terms of Service */}
    <article className="bg-[#111118] border border-gray-800 rounded-2xl p-8 sm:p-12">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
        Terms of Service
      </h1>

      <div className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-800/60">
        <span>Last Updated: May 25, 2026</span>
      </div>

      {/* Terms Content */}
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p className="text-gray-300 leading-relaxed">
          These Terms of Service ("Terms") govern your use of cyberaipulse ("Service", "we", "us", "our"). By accessing and using cyberaipulse, you agree to be bound by these Terms. If you do not agree, please do not use our Service.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          1. Use License
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We grant you a limited, non-exclusive, non-transferable license to access and use cyberaipulse for personal, non-commercial purposes. You agree not to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Modify or copy any materials from the Service</li>
          <li>Use the Service for commercial purposes without authorization</li>
          <li>Attempt to decompile, reverse engineer, or discover any source code</li>
          <li>Remove any copyright, trademark, or other proprietary notices</li>
          <li>Transfer the materials to another person or "mirror" them on another website</li>
          <li>Use automated tools (bots, scrapers, scripts) to access the Service</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          2. Disclaimer of Warranties
        </h2>
        <p className="text-gray-300 leading-relaxed">
          <strong className="text-white">IMPORTANT:</strong> cyberaipulse is provided on an "as-is" basis without warranties of any kind. We do NOT guarantee:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>That generated passwords will never be cracked</li>
          <li>Uninterrupted or error-free operation of the Service</li>
          <li>That the Service is completely secure or free from vulnerabilities</li>
          <li>Accuracy of estimated crack times (they are approximations)</li>
          <li>That accessing the Service will be problem-free or continuous</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mt-4">
          <strong className="text-white">You use cyberaipulse at your own risk.</strong> While we employ industry-standard security practices, no security system is 100% impenetrable.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          3. Limitation of Liability
        </h2>
        <p className="text-gray-300 leading-relaxed">
          To the fullest extent permitted by law, cyberaipulse shall not be liable for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Any indirect, incidental, special, or consequential damages</li>
          <li>Loss of data, revenue, profits, or goodwill</li>
          <li>Damage to your devices or data</li>
          <li>Unauthorized access to your accounts (even if caused by our Service)</li>
          <li>Any claim arising from passwords you generate or check</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mt-4">
          Our total liability shall not exceed the amount you paid for our Service (which is free).
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          4. Acceptable Use Policy
        </h2>
        <p className="text-gray-300 leading-relaxed">
          You agree not to use cyberaipulse for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Attempting to gain unauthorized access to other accounts or systems</li>
          <li>Testing security of others' systems without permission (unauthorized penetration testing)</li>
          <li>Conducting attacks against the Service itself (DDoS, malware, etc.)</li>
          <li>Harassing, threatening, or defaming other users</li>
          <li>Posting illegal content or violating local laws</li>
          <li>Phishing, social engineering, or other fraudulent activities</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          5. Intellectual Property
        </h2>
        <p className="text-gray-300 leading-relaxed">
          All content, features, and functionality of cyberaipulse (including design, algorithms, text, graphics) are owned by cyberaipulse and are protected by international copyright and trademark laws.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          You retain ownership of any content you create (passwords), which remain entirely on your device.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          6. Third-Party Links & Content
        </h2>
        <p className="text-gray-300 leading-relaxed">
          cyberaipulse may contain links to third-party websites. We are not responsible for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Content or practices of linked websites</li>
          <li>Availability or accuracy of third-party information</li>
          <li>Any transactions you conduct on external sites</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mt-4">
          Review the terms and privacy policies of any third-party sites before using them.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          7. Service Modifications & Termination
        </h2>
        <p className="text-gray-300 leading-relaxed">
          We reserve the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Modify or discontinue the Service (with notice when possible)</li>
          <li>Change features, functionality, or pricing</li>
          <li>Suspend or terminate access for violations of these Terms</li>
          <li>Remove content that violates our policies</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          8. User Conduct
        </h2>
        <p className="text-gray-300 leading-relaxed">
          You agree to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Use the Service only for lawful purposes</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Not violate others' rights (privacy, intellectual property, etc.)</li>
          <li>Not misrepresent your identity or affiliation</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          9. Educational Use
        </h2>
        <p className="text-gray-300 leading-relaxed">
          cyberaipulse is designed for <strong className="text-white">legitimate security purposes</strong>:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>✓ Testing your own passwords</li>
          <li>✓ Learning about password security</li>
          <li>✓ Generating strong passwords for your accounts</li>
          <li>✗ Attempting to crack other people's passwords</li>
          <li>✗ Conducting attacks against others' systems</li>
        </ul>
        <p className="text-gray-300 leading-relaxed mt-4">
          Unauthorized access to computer systems is illegal. Use this tool responsibly.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          10. Indemnification
        </h2>
        <p className="text-gray-300 leading-relaxed">
          You agree to indemnify and hold harmless cyberaipulse from any claims, damages, or losses arising from:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Your use of the Service</li>
          <li>Violation of these Terms</li>
          <li>Violation of any laws or rights of others</li>
          <li>Any claim arising from generated or checked passwords</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          11. Governing Law
        </h2>
        <p className="text-gray-300 leading-relaxed">
          These Terms are governed by and construed in accordance with the laws of the jurisdiction where cyberaipulse operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          12. Entire Agreement
        </h2>
        <p className="text-gray-300 leading-relaxed">
          These Terms, along with our Privacy Policy, constitute the entire agreement between you and cyberaipulse regarding the Service. If any provision is invalid, the remaining provisions remain in effect.
        </p>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">
          13. Contact for Legal Matters
        </h2>
        <p className="text-gray-300 leading-relaxed">
          For questions about these Terms of Service:
        </p>
        <div className="bg-[#0d0d14] border border-gray-700 rounded-lg p-4 mt-4 text-gray-300">
          <p><strong>Email:</strong> legal@cyberaipulse.tech</p>
          <p className="mt-2"><strong>Subject:</strong> "Terms of Service Inquiry"</p>
        </div>

        <div className="bg-cyan-600/10 border border-cyan-500/20 rounded-lg p-4 mt-8 text-cyan-300">
          <p className="font-semibold">Last Updated: May 25, 2026</p>
          <p className="text-sm mt-2">Your continued use of cyberaipulse after changes to these Terms constitutes acceptance.</p>
        </div>
      </div>
    </article>
  </section>
)

export default Terms
