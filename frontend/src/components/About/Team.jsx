import React from 'react'

export default function Team() {
  return (
    <div>
       <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Meet Our Leadership</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="CEO" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Elena Vasquez</h3>
                  <p className="text-orange-600 font-medium mb-3">CEO & Co-Founder</p>
                  <p className="text-gray-600 leading-relaxed">Full-stack developer with 10+ years experience and PhD in Computer Science. Former tech lead at Google.</p>
                </div>
              </div>
              
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="CTO" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Raj Patel</h3>
                  <p className="text-orange-600 font-medium mb-3">Chief Technology Officer</p>
                  <p className="text-gray-600 leading-relaxed">Senior software engineer specializing in MERN and Java full-stack development. Ex-Microsoft, passionate educator.</p>
                </div>
              </div>
              
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Chief Ethics Officer" 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Dr. Kwame Nkosi</h3>
                  <p className="text-orange-600 font-medium mb-3">Head of Curriculum & Placement</p>
                  <p className="text-gray-600 leading-relaxed">Industry veteran with 15+ years in software development and talent acquisition. Connects students with opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}
