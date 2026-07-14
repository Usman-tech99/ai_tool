import { useState, useEffect } from 'react'

const VisitorCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const counted = sessionStorage.getItem('visitorCounted')
    if (!counted) {
      const prev = parseInt(localStorage.getItem('visitorCount') || '0', 10)
      const next = prev + 1
      localStorage.setItem('visitorCount', next.toString())
      sessionStorage.setItem('visitorCounted', '1')
      setCount(next)
    } else {
      setCount(parseInt(localStorage.getItem('visitorCount') || '0', 10))
    }
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-40 bg-gradient-to-br from-cyan-100/40 to-blue-100/40 border border-cyan-400/60 rounded-full px-4 py-3 backdrop-blur-sm hover:border-cyan-500/80 transition-all duration-300 group pointer-events-none">
      <div className="flex items-center gap-2 text-xs sm:text-sm font-mono">
        <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-gray-700 whitespace-nowrap">
          <span className="text-cyan-700 font-bold">{count.toLocaleString()}</span>
          <span className="text-gray-600 ml-1">visitor{count !== 1 ? 's' : ''}</span>
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-xs text-gray-600 whitespace-nowrap pointer-events-auto">
          You are here
        </div>
      </div>
    </div>
  )
}

export default VisitorCounter
