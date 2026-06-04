'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-[#0d1f3c] flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <p className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4">Something went wrong</p>
        <h2 className="text-2xl font-black text-white mb-4">{error.message}</h2>
        <button
          onClick={reset}
          className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-full transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
