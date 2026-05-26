import { useEffect, useState } from 'react'

const SecurityCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trails, setTrails] = useState([])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Add trail effect
      if (Math.random() > 0.7) {
        const newTrail = {
          id: Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
        }
        setTrails((prev) => [...prev, newTrail].slice(-15))
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Main cursor */}
      <div
        className="cursor-custom"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Trail effects */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-custom-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: 'translate(-50%, -50%)',
            animation: `fadeOut 0.5s ease-out forwards`,
          }}
        />
      ))}

      <style>{`
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
          }
        }
      `}</style>
    </>
  )
}

export default SecurityCursor
