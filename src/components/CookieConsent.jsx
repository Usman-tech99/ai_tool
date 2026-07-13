import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)
  const { isDark } = useTheme()

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className={`max-w-4xl mx-auto rounded-2xl shadow-2xl border p-4 sm:p-6 transition-colors duration-300 ${
        isDark
          ? 'bg-[#111118] border-gray-700'
          : 'bg-white border-gray-200'
      }`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className={`text-sm font-semibold mb-1 transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              This Site Uses Cookies
            </p>
            <p className={`text-xs leading-relaxed transition-colors duration-300 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              We use cookies to improve your experience and show ads from Google AdSense. 
              Google uses cookies to serve personalized ads based on your visits. 
              By clicking "Accept", you consent to our use of cookies. 
              Read our <Link to="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">Privacy Policy</Link> for details.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={decline}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                isDark
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
              }`}
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-700 text-white transition-colors"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
