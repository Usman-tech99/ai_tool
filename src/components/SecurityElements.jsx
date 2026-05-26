import React from 'react'

const SecurityElements = () => {
  return (
    <>
      {/* Floating security icons background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Top left security elements */}
        <div
          className="absolute text-cyan-400/20 text-6xl font-bold security-float"
          style={{
            top: '10%',
            left: '5%',
            animationDelay: '0s',
          }}
        >
          🔐
        </div>

        {/* Top right security elements */}
        <div
          className="absolute text-blue-400/20 text-5xl font-bold security-float"
          style={{
            top: '15%',
            right: '8%',
            animationDelay: '1s',
          }}
        >
          🛡️
        </div>

        {/* Middle left */}
        <div
          className="absolute text-cyan-400/15 text-7xl font-bold security-float"
          style={{
            top: '40%',
            left: '3%',
            animationDelay: '0.5s',
          }}
        >
          🔒
        </div>

        {/* Middle right */}
        <div
          className="absolute text-blue-400/15 text-6xl font-bold security-float"
          style={{
            top: '50%',
            right: '5%',
            animationDelay: '1.5s',
          }}
        >
          🔑
        </div>

        {/* Bottom left */}
        <div
          className="absolute text-cyan-400/15 text-5xl font-bold security-float"
          style={{
            bottom: '15%',
            left: '8%',
            animationDelay: '1.2s',
          }}
        >
          ⚔️
        </div>

        {/* Bottom right */}
        <div
          className="absolute text-blue-400/20 text-6xl font-bold security-float"
          style={{
            bottom: '20%',
            right: '10%',
            animationDelay: '2s',
          }}
        >
          ✓
        </div>

        {/* Scanning line effect on sections */}
        <div
          className="absolute inset-0 opacity-5 scan-line"
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(34, 211, 238, 0.1), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Security badges on main sections */}
      <style>{`
        section[data-aos] {
          position: relative;
        }

        section[data-aos]::before {
          content: '🔐';
          position: absolute;
          right: -30px;
          top: 20px;
          font-size: 20px;
          opacity: 0;
          animation: slideInSecurity 0.6s ease-out forwards;
          animation-delay: 0.3s;
        }

        @keyframes slideInSecurity {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 0.6;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          section[data-aos]::before {
            right: -20px;
            font-size: 16px;
          }
        }
      `}</style>
    </>
  )
}

export default SecurityElements
