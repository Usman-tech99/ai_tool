import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const { isDark } = useTheme()

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

    const subject = encodeURIComponent('Message from CyberaiPulse Contact Form')
    const emailBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=shafiqusman339@gmail.com&su=${subject}&body=${emailBody}`,
      '_blank',
      'width=700,height=600'
    )

    setFormMessage('Gmail is opening! Review the message and send it manually.')
    setName('')
    setEmail('')
    setMessage('')
    setTimeout(() => setFormMessage(''), 4000)
  }

  return (
    <section className="max-w-4xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-16 sm:py-20">
      <div className={`border rounded-2xl p-8 sm:p-12 transition-colors duration-300 ${isDark ? 'bg-[#111118] border-gray-800' : 'bg-white border-gray-200'}`}>
        <h1 className={`text-4xl sm:text-5xl font-bold mb-4 tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Contact Us
        </h1>
        <p className={`text-lg mb-8 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          Have questions about cyberaipulse? We would love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Email Support</h3>
              <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>For general inquiries and support:</p>
              <a href="mailto:support@cyberaipulse.tech" className="text-cyan-600 hover:text-cyan-700 font-mono font-semibold">support@cyberaipulse.tech</a>
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Privacy Concerns</h3>
              <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Questions about data privacy or GDPR requests:</p>
              <a href="mailto:privacy@cyberaipulse.tech" className="text-cyan-600 hover:text-cyan-700 font-mono font-semibold">privacy@cyberaipulse.tech</a>
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Legal and Terms</h3>
              <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Legal inquiries and terms questions:</p>
              <a href="mailto:shafiqusman339@gmail.com" className="text-cyan-600 hover:text-cyan-700 font-mono font-semibold">shafiqusman339@gmail.com</a>
            </div>
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Response Time</h3>
              <p className={`transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>We aim to respond to all inquiries within 24-48 business hours.</p>
            </div>
          </div>

          <div className={`rounded-xl p-6 transition-colors duration-300 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-50 border border-gray-300'}`}>
            <h3 className={`text-xl font-semibold mb-6 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name"
                  className={`w-full rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 transition-all ${
                    isDark ? 'bg-[#0d0d14] border border-gray-700 text-white placeholder-gray-600 focus:border-cyan-500/60 focus:ring-cyan-500/30' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-400/50'
                  }`} />
              </div>
              <div>
                <label className={`block text-sm mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email"
                  className={`w-full rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 transition-all ${
                    isDark ? 'bg-[#0d0d14] border border-gray-700 text-white placeholder-gray-600 focus:border-cyan-500/60 focus:ring-cyan-500/30' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-400/50'
                  }`} />
              </div>
              <div>
                <label className={`block text-sm mb-2 transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="4" placeholder="Your message"
                  className={`w-full rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 transition-all resize-none ${
                    isDark ? 'bg-[#0d0d14] border border-gray-700 text-white placeholder-gray-600 focus:border-cyan-500/60 focus:ring-cyan-500/30' : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-400/50'
                  }`} />
              </div>
              <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2.5 rounded-lg transition-colors">Send Message</button>
              {formMessage && (
                <p className={`text-sm font-semibold transition-all ${
                  formMessage.includes('Gmail') ? 'text-emerald-600' : 'text-orange-600'
                }`}>{formMessage}</p>
              )}
            </form>
          </div>
        </div>

        <div className={`border-t pt-12 transition-colors duration-300 ${isDark ? 'border-gray-800' : 'border-gray-300'}`}>
          <h2 className={`text-2xl font-bold mb-8 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>How do I report a security vulnerability?</h3>
              <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Please email security@cyberaipulse.tech with details. Do not publicly disclose vulnerabilities.</p>
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Is cyberaipulse really free?</h3>
              <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Yes, cyberaipulse is completely free. Our password generator and checker operate entirely in your browser.</p>
            </div>
            <div>
              <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Do you offer API access?</h3>
              <p className={`leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>Currently we offer a browser-based tool only. API access may be available in the future.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
