const AdPlaceholder = ({ type = 'banner' }) => {
  const isBanner = type === 'banner'

  return (
    <div
      className={`
        flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-700
        bg-gray-900/50 text-gray-500 select-none
        ${isBanner ? 'w-full h-16 sm:h-20 md:h-24' : 'w-full h-48 sm:h-64 lg:h-[calc(100vh-8rem)] max-h-[600px] sticky top-6'}
      `}
    >
      <svg
        className="w-6 h-6 mb-2 opacity-40"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
      <p className="text-xs font-mono uppercase tracking-widest opacity-50">
        {isBanner ? 'AdSense — Top Banner (728×90)' : 'AdSense — Sidebar (300×600)'}
      </p>
      <p className="text-[10px] mt-1 opacity-30">[ Replace with Google AdSense code ]</p>
    </div>
  )
}

export default AdPlaceholder
