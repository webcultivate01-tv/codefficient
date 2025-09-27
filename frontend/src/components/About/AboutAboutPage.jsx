import React from 'react'

export default function AboutAboutPage() {
  return (
    <div>
      <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-relaxed">
                    India's Fast-Growing 
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 pb-1">
                      Coding Bootcamp
                    </span>
                  </h2>
                  
                </div>

                <p className="text-lg text-gray-700 leading-relaxed">
                  CODEfficient is an edtech initiative built by passionate software engineers, educators, and hiring
                  experts who believe in accessible, affordable, and outcome-driven coding education. Our
                  aim is to make every learner job-ready through structured learning paths, live mentorship, and
                  certified full stack web development training.
                </p>

                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-900">We specialize in:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Programming courses for undergraduates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Full stack training for engineering graduates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">Custom learning paths for beginners with zero coding background</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  With a growing community across India, we're here to turn your learning into real employment
                  opportunities.
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Coding Bootcamp Visualization"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
