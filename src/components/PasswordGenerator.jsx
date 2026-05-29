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
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg w-full">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 tracking-tight">
        Password Generator
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
        Customize options and hit <span className="text-cyan-600 font-semibold">Generate</span>.
      </p>

      {/* Password display */}
      <div className="mb-4 sm:mb-6">
        <div className="bg-gray-50 border border-gray-300 rounded-xl px-3 sm:px-4 py-3 sm:py-4 min-h-[56px] flex items-center overflow-hidden w-full">
          <span className="font-mono text-sm sm:text-base md:text-lg text-emerald-700 break-all tracking-wider leading-relaxed w-full">
            {password || (
              <span className="text-gray-500 italic text-xs sm:text-sm">Click Generate…</span>
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
              ? 'bg-emerald-100 text-emerald-700 border border-emerald-300'
              : 'bg-cyan-100 text-cyan-700 border border-cyan-300 hover:bg-cyan-200 hover:border-cyan-400'}
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
          <label className="text-sm text-gray-700 font-medium">Length</label>
          <span className="font-mono text-cyan-600 font-bold text-lg w-10 text-right">
            {length}
          </span>
        </div>
        <input
          type="range"
          min={8}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full accent-cyan-600"
        />
        <div className="flex justify-between text-[11px] text-gray-700 font-mono mt-1">
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
                ? 'border-cyan-400 bg-cyan-50 text-gray-900'
                : 'border-gray-300 bg-gray-50 text-gray-600 hover:border-gray-400'}
            `}
          >
            <input
              type="checkbox"
              checked={options[key]}
              onChange={() => toggleOption(key)}
              className="flex-shrink-0 accent-cyan-600"
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
          bg-gradient-to-r from-cyan-600 to-blue-600
          hover:from-cyan-500 hover:to-blue-500
          active:scale-[0.98]
          text-white shadow-lg shadow-cyan-400/30
          transition-all duration-200
        "
      >
        ⚡ Generate Password
      </button>
    </div>
  )
}

export default PasswordGenerator
