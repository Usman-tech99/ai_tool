const levels = [
  { label: 'Weak',   color: 'bg-red-500',    glow: 'shadow-red-500/50',    text: 'text-red-400'    },
  { label: 'Fair',   color: 'bg-yellow-400', glow: 'shadow-yellow-400/50', text: 'text-yellow-300' },
  { label: 'Good',   color: 'bg-blue-400',   glow: 'shadow-blue-400/50',   text: 'text-blue-300'   },
  { label: 'Strong', color: 'bg-emerald-400',glow: 'shadow-emerald-400/50',text: 'text-emerald-300'},
]

const StrengthMeter = ({ score }) => {
  const safeScore = Math.min(Math.max(score, 0), 3)
  const current = levels[safeScore]

  return (
    <div className="mt-5">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-400 uppercase tracking-widest font-mono">
          Password Strength
        </span>
        <span className={`text-xs font-bold uppercase tracking-widest font-mono ${current.text}`}>
          {current.label}
        </span>
      </div>

      <div className="flex gap-1.5">
        {levels.map((level, i) => (
          <div
            key={level.label}
            className={`
              flex-1 h-2 rounded-full transition-all duration-500 ease-in-out
              ${i <= safeScore
                ? `${level.color} shadow-md ${level.glow}`
                : 'bg-gray-800'
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default StrengthMeter
