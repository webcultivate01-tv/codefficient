import React from 'react'

export default function KnowUs() {
  return (
    <div>
      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl blur opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Developers collaboration"
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="space-y-4 text-center lg:text-left">
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    Know Us
                  </h2>
                  
                </div>

                <p className="text-xl font-semibold text-gray-900">
                  Built by Developers. Trusted by Learners.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe coding should not just be taught—it should be experienced. That's why CODEfficient
                  is built on:
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Real mentors, not just pre-recorded videos.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Real projects, not just toy apps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Real placement opportunities, not vague promises.</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  Our training is tailored for India's talent, offering <strong>full stack course online India</strong>,
                  ensuring every learner—regardless of background—gets an equal chance at success.
                </p>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}
