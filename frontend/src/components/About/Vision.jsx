import React from 'react'

export default function Vision() {
  return (
    <div>
       <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
                "To democratize coding education and bridge the skill gap in technology, empowering every individual to transform their career through accessible, practical, and industry-relevant programming education."
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8 lg:col-span-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Accessible Education</h3>
                      <p className="text-gray-700 leading-relaxed">Making quality coding education available to everyone, regardless of their background or location.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Industry Integration</h3>
                      <p className="text-gray-700 leading-relaxed">Creating direct pathways between learning and employment opportunities in the tech industry.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation in Learning</h3>
                      <p className="text-gray-700 leading-relaxed">Continuously evolving our teaching methods to stay ahead of technology trends and industry demands.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative lg:col-span-1">
                <div className="absolute -inset-3 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Vision and Future"
                  className="relative rounded-2xl shadow-2xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}
