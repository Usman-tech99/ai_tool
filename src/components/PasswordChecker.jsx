import { useState, useMemo } from 'react'
import zxcvbn from 'zxcvbn'

/*
 * WHY zxcvbn?
 * Pure entropy math (length × log2 charset) only works for truly random passwords.
 * Real attackers use wordlists, rules, and pattern databases — zxcvbn simulates
 * that and returns realistic "guesses needed" based on real-world attack simulations.
 */

/* ── Format seconds → human string ── */
function formatTime(seconds) {
  if (!isFinite(seconds) || seconds > 1e100)
    return { value: '∞', unit: 'eternity', tier: 'safe' }
  if (seconds < 0.001)
    return { value: 'Instant', unit: '', tier: 'critical' }
  if (seconds < 1)
    return { value: `${(seconds * 1000).toFixed(0)}`, unit: 'milliseconds', tier: 'critical' }
  if (seconds < 60)
    return { value: `${seconds.toFixed(1)}`, unit: 'seconds', tier: 'critical' }
  if (seconds < 3_600)
    return { value: `${(seconds / 60).toFixed(1)}`, unit: 'minutes', tier: 'danger' }
  if (seconds < 86_400)
    return { value: `${(seconds / 3_600).toFixed(1)}`, unit: 'hours', tier: 'danger' }
  if (seconds < 86_400 * 30)
    return { value: `${(seconds / 86_400).toFixed(0)}`, unit: 'days', tier: 'warn' }
  if (seconds < 86_400 * 365)
    return { value: `${(seconds / (86_400 * 30)).toFixed(0)}`, unit: 'months', tier: 'warn' }
  const yrs = seconds / (86_400 * 365.25)
  if (yrs < 100)   return { value: `${yrs.toFixed(0)}`,           unit: 'years',         tier: 'warn' }
  if (yrs < 1_000) return { value: `${yrs.toFixed(0)}`,           unit: 'years',         tier: 'safe' }
  if (yrs < 1e6)   return { value: `${(yrs / 1_000).toFixed(1)}`, unit: 'thousand years',tier: 'safe' }
  if (yrs < 1e9)   return { value: `${(yrs / 1e6).toFixed(1)}`,   unit: 'million years', tier: 'safe' }
  if (yrs < 1e12)  return { value: `${(yrs / 1e9).toFixed(1)}`,   unit: 'billion years', tier: 'safe' }
  return { value: '> 1 trillion', unit: 'years', tier: 'safe' }
}

/* ── Tier colours ── */
const TIER = {
  critical: { text: 'text-red-400',     dot: 'bg-red-500'     },
  danger:   { text: 'text-orange-400',  dot: 'bg-orange-500'  },
  warn:     { text: 'text-yellow-400',  dot: 'bg-yellow-400'  },
  safe:     { text: 'text-emerald-400', dot: 'bg-emerald-400' },
}

const STRENGTH = [
  { label: 'Weak',   bar: 'bg-red-500',     text: 'text-red-400',     glow: 'shadow-red-500/40'     },
  { label: 'Fair',   bar: 'bg-yellow-400',  text: 'text-yellow-300',  glow: 'shadow-yellow-400/40'  },
  { label: 'Good',   bar: 'bg-blue-400',    text: 'text-blue-300',    glow: 'shadow-blue-400/40'    },
  { label: 'Strong', bar: 'bg-emerald-400', text: 'text-emerald-300', glow: 'shadow-emerald-400/40' },
]

/* ════════════════════════════════════════════════════ */
const PasswordChecker = () => {
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)

  const analysis = useMemo(() => {
    if (!password) return null

    /* zxcvbn gives us realistic guesses that account for:
       - 30k common passwords, 170k Wikipedia words, US/UK names, TV/film titles
       - keyboard spatial patterns (qwerty, dvorak)
       - l33t substitutions, date patterns, repeats, sequences              */
    const result = zxcvbn(password)
    const guesses = result.guesses                        // realistic guess count
    const score   = Math.min(result.score, 3)             // zxcvbn: 0-4, clamp to 0-3 to match STRENGTH[]

    /* Crack times per scenario: guesses / speed */
    const times = {
      online:  formatTime(guesses / 100),          // rate-limited login
      offline: formatTime(guesses / 1e10),         // MD5/SHA-1 offline
      gpu:     formatTime(guesses / 1e12),         // high-end GPU cluster
      /* AI: zxcvbn already models intelligent attacks; multiply guesses by
         0.01 to represent modern neural-net pattern-generation acceleration */
      ai:      formatTime((guesses * 0.01) / 1e12),
    }

    /* Warnings & suggestions from zxcvbn */
    const warning     = result.feedback?.warning || null
    const suggestions = result.feedback?.suggestions || []

    const hasLower = /[a-z]/.test(password)
    const hasUpper = /[A-Z]/.test(password)
    const hasNum   = /[0-9]/.test(password)
    const hasSym   = /[^a-zA-Z0-9]/.test(password)

    /* Entropy for display only (informational) */
    let pool = 0
    if (hasLower) pool += 26
    if (hasUpper) pool += 26
    if (hasNum)   pool += 10
    if (hasSym)   pool += 32
    const entropy = (password.length * Math.log2(pool || 1)).toFixed(1)

    return {
      score,
      guesses,
      times,
      warning,
      suggestions,
      hasLower, hasUpper, hasNum, hasSym,
      entropy,
      length: password.length,
    }
  }, [password])

  const strength = analysis ? STRENGTH[analysis.score] : null

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg w-full h-full">

      {/* Header */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 tracking-tight">
        Password Checker
      </h2>
      <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
        See how fast an attacker — or an{' '}
        <span className="text-cyan-600 font-semibold">AI</span> — would crack it.
      </p>

      {/* Input */}
      <div className="relative mb-5">
        <input
          type={visible ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type or paste a password…"
          className="
            w-full bg-gray-50 border border-gray-300 rounded-xl
            px-4 py-3 pr-12
            font-mono text-sm sm:text-base text-gray-900 placeholder-gray-500
            focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-400/50
            transition-all duration-200
          "
        />
        <button
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Toggle visibility"
        >
          {visible ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )}
        </button>
      </div>

      {/* Empty state */}
      {!analysis && (
        <div className="flex flex-col items-center justify-center py-10 sm:py-16 text-gray-400">
          <svg className="w-10 h-10 mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
          </svg>
          <p className="text-sm font-mono opacity-50">Awaiting input…</p>
        </div>
      )}

      {analysis && (
        <>
          {/* Strength + entropy */}
          <div className="bg-gray-50 border border-gray-300 rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[10px] text-gray-600 uppercase tracking-widest font-mono">Strength</span>
              <span className={`text-sm font-bold font-mono uppercase tracking-wide ${strength.text}`}>
                {strength.label}
              </span>
            </div>
            <div className="flex gap-1.5 mb-3">
              {STRENGTH.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex-1 h-2 rounded-full transition-all duration-500 ${
                    i <= analysis.score ? `${s.bar} shadow-md ${s.glow}` : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex justify-between text-[11px] font-mono text-gray-700">
              <span>Entropy: <span className="text-gray-900">{analysis.entropy} bits</span></span>
              <span>Length: <span className="text-gray-900">{analysis.length} chars</span></span>
            </div>
          </div>

          {/* Character composition */}
          <div className="grid grid-cols-4 gap-1.5 mb-4">
            {[
              { label: 'a–z', active: analysis.hasLower },
              { label: 'A–Z', active: analysis.hasUpper },
              { label: '0–9', active: analysis.hasNum },
              { label: '!@#', active: analysis.hasSym },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex flex-col items-center py-2 rounded-lg border text-xs font-mono transition-all ${
                  item.active
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                    : 'border-gray-300 bg-gray-50 text-gray-600'
                }`}
              >
                <span className="text-[10px] mb-0.5">{item.active ? '✓' : '✗'}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* zxcvbn feedback: warning + suggestions */}
          {(analysis.warning || analysis.suggestions.length > 0) && (
            <div className="mb-4 bg-amber-50 border border-amber-300 rounded-xl p-3">
              <p className="text-[10px] text-amber-900 font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <span>⚠</span> Security Feedback
              </p>
              {analysis.warning && (
                <p className="text-[11px] text-amber-900 font-mono mb-1.5 flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-700 flex-shrink-0 mt-1.5" />
                  {analysis.warning}
                </p>
              )}
              <ul className="space-y-1.5">
                {analysis.suggestions.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-[11px] text-amber-800 font-mono">
                    <span className="w-1 h-1 rounded-full bg-amber-700 flex-shrink-0 mt-1.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Time to crack */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <p className="text-[10px] text-gray-600 uppercase tracking-widest font-mono">
                Time to Crack
              </p>
              <span className="text-[10px] text-gray-700 font-mono">faster attack → less time</span>
            </div>
            <div className="space-y-2">
              {[
                { id: 'online',  icon: '🌐', label: 'Online Attack',  sub: 'Rate-limited login • 100/s',           badge: null                    },
                { id: 'offline', icon: '💻', label: 'Offline Hash',   sub: 'Standard PC • 10 billion/s',           badge: null                    },
                { id: 'gpu',     icon: '⚡', label: 'GPU Cluster',    sub: 'High-end array • 1 trillion/s',        badge: '100× faster'           },
                { id: 'ai',      icon: '🤖', label: 'AI / Neural Net',sub: 'Pattern-aware ML crack',               badge: 'worst case'            },
              ].map(({ id, icon, label, sub, badge }) => {
                const time = analysis.times[id]
                const tier = TIER[time.tier]
                return (
                  <div
                    key={id}
                    className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-300"
                  >
                    <span className="text-base flex-shrink-0 w-6 text-center">{icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <p className="text-xs text-gray-900 font-semibold leading-tight">{label}</p>
                        {badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-gray-200 text-gray-700 border border-gray-300 leading-none">
                            {badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-gray-600 font-mono truncate">{sub}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className={`text-xs font-bold font-mono leading-tight ${tier.text}`}>
                        {time.value}
                      </p>
                      {time.unit && (
                        <p className="text-[10px] text-gray-600 font-mono">{time.unit}</p>
                      )}
                    </div>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${tier.dot}`} />
                  </div>
                )
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
              {[
                { dot: 'bg-red-500',     label: 'Critical' },
                { dot: 'bg-orange-500',  label: 'Danger'   },
                { dot: 'bg-yellow-400',  label: 'Moderate' },
                { dot: 'bg-emerald-400', label: 'Safe'     },
              ].map(({ dot, label }) => (
                <span key={label} className="flex items-center gap-1.5 text-[10px] text-gray-700 font-mono">
                  <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default PasswordChecker
