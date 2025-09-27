import React from 'react'

export default function WhatWeDo() {
    const items = [
    "Teach Full Stack Development – from Java to MERN & MEAN stacks",
    "Train Through Projects – Build apps you can showcase",
    "Certify Your Skills – Get a Full Stack Web Development Certification",
    "Place You with Companies – Our full stack developer course with placement ensures you're not alone after training",
  ];
  return (
    <div>
       <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
                <div className="container mx-auto px-6 max-w-6xl">
                  <div className="text-center mb-16">
                    <motion.h2
                      initial={{ opacity: 0, y: -30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      className="text-4xl lg:text-5xl font-bold mb-6"
                    >
                      What We Do
                    </motion.h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full mx-auto mb-8"></div>
      
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                      From Learning to Earning—Your Full Stack Career Partner.  
                      We guide you through every step of your journey:
                    </motion.p>
                  </div>
      
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((text, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-xl font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <p className="text-gray-200 leading-relaxed group-hover:text-white transition-colors">
                              {text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
      
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-12 text-center text-gray-300 text-lg max-w-4xl mx-auto"
                  >
                    Whether you're starting from scratch or looking to specialize in a specific tech stack, 
                    our learning paths are tailored for your growth.
                  </motion.p>
                </div>
              </section>
    </div>
  )
}
