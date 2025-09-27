import React from 'react'

export default function CallToAction() {
  return (
    <div>
       <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experience the CODEfficient Difference</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full mx-auto mb-8"></div>
            <p className="text-xl mb-12 text-gray-300 leading-relaxed">
              Join thousands of learners who have transformed their careers with CODEfficient's comprehensive coding bootcamp.
            </p>
            <button className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-orange-600 to-yellow-600 text-white font-semibold shadow-2xl transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Start Your Journey</span>
              <svg className="relative ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>
    </div>
  )
}
