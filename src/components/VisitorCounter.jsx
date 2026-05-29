import { useState, useEffect } from 'react'

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Fetch visitor count from CountAPI (free service)
    const fetchVisitorCount = async () => {
      try {
        setLoading(true)
        // Using CountAPI - a free counter service
        // Replace 'cyberaipulse' with your site identifier
        const response = await fetch('https://api.countapi.xyz/hit/cyberaipulse/visits')
        const data = await response.json()
        
        if (data.value) {
          setVisitorCount(data.value)
        }
        setLoading(false)
      } catch (err) {
        console.error('Error fetching visitor count:', err)
        setError(true)
        setLoading(false)
        
        // Fallback: try to read from localStorage
        const localCount = localStorage.getItem('visitorCount')
        if (localCount) {
          setVisitorCount(parseInt(localCount))
        }
      }
    }

    fetchVisitorCount()
  }, [])

  // Format large numbers with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className="fixed bottom-6 right-6 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/40 rounded-full px-4 py-3 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 group">
      <div className="flex items-center gap-2 text-xs sm:text-sm font-mono">
        <span className={`inline-flex items-center justify-center w-3 h-3 rounded-full ${
          error ? 'bg-orange-500' : 'bg-emerald-500 animate-pulse'
        }`} />
        <span className="text-gray-300 whitespace-nowrap">
          {loading ? (
            <span className="text-gray-500">Loading...</span>
          ) : (
            <>
              <span className="text-cyan-300 font-bold">{formatNumber(visitorCount)}</span>
              <span className="text-gray-500 ml-1">visitor{visitorCount !== 1 ? 's' : ''}</span>
            </>
          )}
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-xs text-gray-400 whitespace-nowrap">
          You are here
        </div>
      </div>
    </div>
  )
}

export default VisitorCounter
