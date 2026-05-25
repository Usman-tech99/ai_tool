import { useState, useCallback, useEffect } from 'react'
import StrengthMeter from './StrengthMeter'

const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz'
const NUMBERS   = '0123456789'
const SYMBOLS   = '!@#$%^&*()_+-=[]{}|;:,.<>?'

const calcStrength = (password, opts) => {
  if (!password) return 0
  let score = 0
  if (password.length >= 12) score++
  if (password.length >= 20) score++
  const activeTypes = [opts.uppercase, opts.lowercase, opts.numbers, opts.symbols].filter(Boolean).length
  if (activeTypes >= 3) score++
  if (activeTypes === 4) score++
  return Math.min(score, 3)
}

const PasswordGenerator = () => {
  const [length, setLength] = useState(16)
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers:   true,
    symbols:   false,
  })
  const [password, setPassword] = useState('')
  const [copied, setCopied]     = useState(false)
  const [strength, setStrength] = useState(0)

  const generate = useCallback(() => {
    const pool = [
      options.uppercase ? UPPERCASE : '',
      options.lowercase ? LOWERCASE : '',
      options.numbers   ? NUMBERS   : '',
      options.symbols   ? SYMBOLS   : '',
    ].join('')

    if (!pool) return

    const arr = new Uint32Array(length)
    crypto.getRandomValues(arr)
    const pwd = Array.from(arr).map((n) => pool[n % pool.length]).join('')
    setPassword(pwd)
    setStrength(calcStrength(pwd, options))
  }, [length, options])

  useEffect(() => {
    generate()
  }, [])

  const handleCopy = async () => {
    if (!password) return
    await navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const toggleOption = (key) => {
    const next = { ...options, [key]: !options[key] }
    const anyActive = Object.values(next).some(Boolean)
    if (!anyActive) return
    setOptions(next)
  }

  const checkboxes = [
    { key: 'uppercase', label: 'Uppercase  A–Z' },
    { key: 'lowercase', label: 'Lowercase  a–z' },
    { key: 'numbers',   label: 'Numbers  0–9'  },
    { key: 'symbols',   label: 'Symbols  !@#$' },
  ]

  return (
    <div className="bg-[#111118] border border-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl shadow-black/60 w-full">
      <h2 className="text-lg sm:text-xl font-bold text-white mb-1 tracking-tight">
        Password Generator
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
        Customize options and hit <span className="text-violet-400 font-semibold">Generate</span>.
      </p>

      {/* Password display */}
      <div className="mb-4 sm:mb-6">
        <div className="bg-[#0d0d14] border border-gray-700 rounded-xl px-3 sm:px-4 py-3 sm:py-4 min-h-[56px] flex items-center overflow-hidden w-full">
          <span className="font-mono text-sm sm:text-base md:text-lg text-emerald-300 break-all tracking-wider leading-relaxed w-full">
            {password || (
              <span className="text-gray-600 italic text-xs sm:text-sm">Click Generate…</span>
            )}
          </span>
        </div>
        <button
          onClick={handleCopy}
          disabled={!password}
          className={`
            mt-2 w-full py-2 sm:py-2.5 rounded-lg text-xs font-semibold font-mono uppercase tracking-widest
            transition-all duration-200
            ${copied
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
              : 'bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600/40 hover:border-violet-400'}
          `}
        >
          {copied ? '✓ Copied!' : 'Copy to Clipboard'}
        </button>
      </div>

      {/* Strength meter */}
      <StrengthMeter score={strength} />

      {/* Length slider */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm text-gray-300 font-medium">Length</label>
          <span className="font-mono text-violet-300 font-bold text-lg w-10 text-right">
            {length}
          </span>
        </div>
        <input
          type="range"
          min={8}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-[11px] text-gray-600 font-mono mt-1">
          <span>8</span>
          <span>64</span>
        </div>
      </div>

      {/* Options checkboxes */}
      <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3">
        {checkboxes.map(({ key, label }) => (
          <label
            key={key}
            className={`
              flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl border cursor-pointer
              transition-all duration-150 select-none
              ${options[key]
                ? 'border-violet-500/50 bg-violet-600/10 text-gray-200'
                : 'border-gray-700 bg-gray-900/40 text-gray-500 hover:border-gray-600'}
            `}
          >
            <input
              type="checkbox"
              checked={options[key]}
              onChange={() => toggleOption(key)}
              className="flex-shrink-0"
            />
            <span className="text-xs sm:text-sm font-mono truncate">{label}</span>
          </label>
        ))}
      </div>

      {/* Generate button */}
      <button
        onClick={generate}
        className="
          mt-4 sm:mt-6 w-full py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base tracking-wide
          bg-gradient-to-r from-violet-600 to-purple-600
          hover:from-violet-500 hover:to-purple-500
          active:scale-[0.98]
          text-white shadow-lg shadow-violet-900/40
          transition-all duration-200
        "
      >
        ⚡ Generate Password
      </button>
    </div>
  )
}

export default PasswordGenerator
