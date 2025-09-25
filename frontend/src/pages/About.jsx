import React from 'react';
import { motion } from "framer-motion";

export default function AboutPage() {
  const items = [
    "Teach Full Stack Development – from Java to MERN & MEAN stacks",
    "Train Through Projects – Build apps you can showcase",
    "Certify Your Skills – Get a Full Stack Web Development Certification",
    "Place You with Companies – Our full stack developer course with placement ensures you're not alone after training",
  ];

  return (
    <div className="min-h-screen bg-black font-sans antialiased">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-90"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
        //   style={{
        //     backgroundImage: "url('https://www.leadsnextech.com/_next/static/media/bg.153fe1e6.jpg')",
        //     filter: "brightness(0.4)"
        //   }}
        ></div>

        <div className="container mx-auto lg:px-12 px-5 py-24 md:py-32 relative z-10 lg:h-[90vh]">
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
              <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
                Code
                <br />
                <span className="bg-gradient-to-r from-orange-600 to-yellow-600 inline-block text-transparent bg-clip-text">
                  Efficient
                </span>
              </h1>

              <p className="text-xl mb-5 text-gray-300">
                India's Fast-Growing Coding Bootcamp
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg lg:blur-md blur-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="relative flex items-center justify-center gap-2">
                    <span className="text-white font-medium">Get Started</span>
                    <svg
                      className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </button>

                <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-orange-500/30 bg-orange-500/10 backdrop-blur-lg text-orange-200 hover:bg-orange-500/20 hover:text-white transition-all min-w-[160px]">
                  Documentation
                </button>
              </div>
            </div>

            <div className="w-full md:w-2/5 md:pl-12">
              <div className="bg-white bg-opacity-10 backdrop-filter md:backdrop-blur-lg relative rounded-xl p-8 shadow-2xl">
                <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
                
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-3 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <span>Industry-Leading Coding Education</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-3 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>Expert Mentorship & Support</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-3 text-orange-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                    <span>Job-Ready Skills & Career Placement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-white">
        {/* About CODEfficient Section */}
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

        {/* Know Us Section */}
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

        {/* What We Do Section */}
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

        {/* Our Vision Section */}
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
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-700 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
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

        {/* Our Mission Section */}
        <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-full mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                "To bridge the skill gap in technology by providing high-quality, practical coding education that transforms learners into industry-ready professionals."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Education</h3>
                <p className="text-gray-600 leading-relaxed">Comprehensive curriculum designed by industry experts for real-world applications.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Career Support</h3>
                <p className="text-gray-600 leading-relaxed">Dedicated placement assistance and ongoing mentorship for career growth.</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Learning</h3>
                <p className="text-gray-600 leading-relaxed">Our proprietary architecture mimics human neural pathways.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Meet Our Leadership</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
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
                  <p className="text-blue-600 font-medium mb-3">CEO & Co-Founder</p>
                  <p className="text-gray-600 leading-relaxed">Cognitive computing pioneer with a PhD in Computational Neuroscience from Stanford.</p>
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
                  <p className="text-blue-600 font-medium mb-3">Chief Technology Officer</p>
                  <p className="text-gray-600 leading-relaxed">Former lead architect at DeepMind, specializes in neural-symbolic integration.</p>
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
                  <p className="text-blue-600 font-medium mb-3">Chief Ethics Officer</p>
                  <p className="text-gray-600 leading-relaxed">Author of "The Moral Algorithm" and AI policy advisor to the EU Parliament.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Experience the CODEfficient Difference</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl mb-12 text-gray-300 leading-relaxed">
              Join forward-thinking organizations leveraging our platform to transform their development capabilities.
            </p>
            <button className="group relative inline-flex items-center px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-2xl transition-all duration-300 hover:scale-105">
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">Schedule a Demo</span>
              <svg className="relative ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
