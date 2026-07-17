import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-6">
          <div className="bg-[#111118] border border-red-500/30 rounded-2xl p-8 max-w-md w-full text-center">
            <div className="text-4xl mb-4">!</div>
            <h2 className="text-white font-bold text-lg mb-2">Something went wrong</h2>
            <p className="text-gray-500 text-sm mb-6">An unexpected error occurred. Please refresh the page.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
