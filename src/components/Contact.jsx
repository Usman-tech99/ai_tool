import { useState } from 'react'

const Contact = ({ onBack }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!name || !email || !message) {
      setFormMessage('Please fill in all fields')
      setTimeout(() => setFormMessage(''), 3000)
      return
    }
    
    if (!email.includes('@')) {
      setFormMessage('Please enter a valid email')
      setTimeout(() => setFormMessage(''), 3000)
      return
    }

    // Create pre-filled Gmail message
    const subject = encodeURIComponent('Message from CyberaiPulse Contact Form')
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )
    
    // Open Gmail compose window
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=shafiqusman339@gmail.com&su=${subject}&body=${emailBody}`,
      '_blank',
      'width=700,height=600'
    )

    setFormMessage('✓ Gmail is opening! Review the message and send it manually.')
    setName('')
    setEmail('')
    setMessage('')
    setTimeout(() => setFormMessage(''), 4000)
  }

  return (
    <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6 font-semibold"
      >
        ← Back
      </button>

      {/* Contact Section */}
      <div className="bg-[#111118] border border-gray-800 rounded-2xl p-8 sm:p-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
          Contact Us
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Have questions about cyberaipulse? We'd love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Email Support</h3>
              <p className="text-gray-300">
                For general inquiries and support:
              </p>
              <a href="mailto:support@cyberaipulse.tech" className="text-cyan-400 hover:text-cyan-300 font-mono font-semibold">
                support@cyberaipulse.tech
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Privacy Concerns</h3>
              <p className="text-gray-300">
                Questions about data privacy or GDPR requests:
              </p>
              <a href="mailto:privacy@cyberaipulse.tech" className="text-cyan-400 hover:text-cyan-300 font-mono font-semibold">
                privacy@cyberaipulse.tech
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Legal & Terms</h3>
              <p className="text-gray-300">
                Legal inquiries and terms questions:
              </p>
              <a href="mailto:shafiqusman339@gmail.com" className="text-cyan-400 hover:text-cyan-300 font-mono font-semibold">
                shafiqusman339@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Response Time</h3>
              <p className="text-gray-300">
                We aim to respond to all inquiries within 24-48 business hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0d0d14] border border-gray-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#1a1a22] border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#1a1a22] border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full bg-[#1a1a22] border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none"
                  placeholder="Your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2.5 rounded-lg transition-colors"
              >
                Send Message
              </button>

              {formMessage && (
                <p className={`text-sm font-semibold transition-all ${
                  formMessage.includes('Thank')
                    ? 'text-emerald-400'
                    : 'text-orange-400'
                }`}>
                  {formMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="border-t border-gray-800 pt-12">
          <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">How do I report a security vulnerability?</h3>
              <p className="text-gray-300">
                Please email security@cyberaipulse.tech with details. Do not publicly disclose vulnerabilities. We take security seriously and will investigate all reports promptly.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Is cyberaipulse really free?</h3>
              <p className="text-gray-300">
                Yes, cyberaipulse is completely free. Our password generator and checker operate entirely in your browser. We don't charge for the core tool. Optional newsletter subscriptions are also free.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Can I use cyberaipulse for penetration testing?</h3>
              <p className="text-gray-300">
                Only on systems you own or have explicit written permission to test. Unauthorized penetration testing is illegal. Always obtain proper authorization before security testing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Do you offer API access?</h3>
              <p className="text-gray-300">
                Currently, we offer a browser-based tool only. API access may be available in the future. Contact support@cyberaipulse.tech for enterprise requests.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">How do I unsubscribe from emails?</h3>
              <p className="text-gray-300">
                Click the "Unsubscribe" link at the bottom of any newsletter email. You can also email privacy@cyberaipulse.tech with "Unsubscribe" in the subject line.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-cyan-300 mb-2">Is there a mobile app?</h3>
              <p className="text-gray-300">
                cyberaipulse is web-based and works on all devices (desktop, tablet, mobile). Simply visit our website from your mobile browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
