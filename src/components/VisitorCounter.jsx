import { useState, useEffect } from 'react'

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Try local count first for instant display
    const localCount = localStorage.getItem('visitorCount')
    if (localCount) {
      setVisitorCount(parseInt(localCount, 10))
    }

    const fetchVisitorCount = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.countapi.xyz/hit/cyberaipulse/visits')
        const data = await response.json()

        if (data.value !== undefined && data.value !== null) {
          const count = Number(data.value)
          setVisitorCount(count)
          localStorage.setItem('visitorCount', count.toString())
        }
      } catch (err) {
        console.error('Visitor counter unavailable:', err)
        setError(true)

        // Increment local counter as fallback
        const prev = parseInt(localStorage.getItem('visitorCount') || '0', 10)
        const next = prev + 1
        setVisitorCount(next)
        localStorage.setItem('visitorCount', next.toString())
      } finally {
        setLoading(false)
      }
    }

    fetchVisitorCount()
  }, [])

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className="fixed bottom-6 right-6 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 border border-cyan-400/60 rounded-full px-4 py-3 backdrop-blur-sm hover:border-cyan-500/80 transition-all duration-300 group">
      <div className="flex items-center gap-2 text-xs sm:text-sm font-mono">
        <span className={`inline-flex items-center justify-center w-3 h-3 rounded-full ${
          error ? 'bg-orange-500' : 'bg-emerald-500 animate-pulse'
        }`} />
        <span className="text-gray-700 whitespace-nowrap">
          {loading ? (
            <span className="text-gray-500">Loading...</span>
          ) : (
            <>
              <span className="text-cyan-700 font-bold">{formatNumber(visitorCount)}</span>
              <span className="text-gray-600 ml-1">visitor{visitorCount !== 1 ? 's' : ''}</span>
            </>
          )}
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-xs text-gray-600 whitespace-nowrap">
          You are here
        </div>
      </div>
    </div>
  )
}

export default VisitorCounter
