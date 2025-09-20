import React from 'react';
import { motion } from "framer-motion";

export default function AboutPage() {

     const items = [
    "Teach Full Stack Development – from Java to MERN & MEAN stacks",
    "Train Through Projects – Build apps you can showcase",
    "Certify Your Skills – Get a Full Stack Web Development Certification",
    "Place You with Companies – Our full stack developer course with placement ensures you’re not alone after training",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-t from-black to-blue-100 font-sans antialiased">

      {/* Hero Section */}
    <header className="bg-gradient-to-r from-black to-white text-white py-20">
       <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Codefficient
         </h1>
           <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-gray-200">
            India’s Fast-Growing Coding Bootcamp
          </p>
      </div>
    </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        {/* Our Story */}


       <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
    {/* Left Side Content */}
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-dark mb-6">
        India’s Fast-Growing Coding Bootcamp
      </h2>
      <p className="text-gray-700 mb-4">
        CODEfficient is an edtech initiative built by passionate software engineers, educators, and hiring
        experts who believe in accessible, affordable, and outcome-driven coding education. Our
        aim is to make every learner job-ready through structured learning paths, live mentorship, and
        certified full stack web development training.
      </p>
      <p className="text-gray-700 mb-4">We specialize in:</p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Programming courses for undergraduates</li>
        <li>Full stack training for engineering graduates</li>
        <li>Custom learning paths for beginners with zero coding background</li>
      </ul>
      <p className="text-gray-700">
        With a growing community across India, we’re here to turn your learning into real employment
        opportunities.
      </p>
    </div>

    {/* Right Side Image */}
    <div className="md:w-1/2">
      <img
        src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        alt="Coding Bootcamp Visualization"
        className="rounded-lg shadow-xl w-full h-auto"
      />
    </div>
  </div>
</section>

             <section className="mb-20">
  <div className="flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Side Image */}
    <div className="md:w-1/2 order-2 md:order-1">
      <img
        src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
        alt="Developers collaboration"
        className="rounded-lg shadow-xl w-full h-auto"
      />
    </div>

    {/* Right Side Content */}
    <div className="md:w-1/2 order-1 md:order-2">
      <h2 className="text-3xl font-bold text-dark mb-6">Know Us</h2>
      <p className="text-gray-700 mb-4 text-lg font-semibold">
        Built by Developers. Trusted by Learners.
      </p>
      <p className="text-gray-700 mb-4">
        We believe coding should not just be taught—it should be experienced. That’s why CODEfficient
        is built on:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Real mentors, not just pre-recorded videos.</li>
        <li>Real projects, not just toy apps.</li>
        <li>Real placement opportunities, not vague promises.</li>
      </ul>
      <p className="text-gray-700">
        Our training is tailored for India’s talent, offering <strong>full stack course online India</strong>,
        ensuring every learner—regardless of background—gets an equal chance at success.
      </p>
    </div>

  </div>
</section>
  

    <section className="bg-black text-white py-16 px-6 md:px-12 rounded-xl mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-6"
        >
          What We Do
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg text-gray-300 mb-10"
        >
          From Learning to Earning—Your Full Stack Career Partner.  
          We guide you through every step of your journey:
        </motion.p>

        <ul className="space-y-6 text-left">
          {items.map((text, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="flex items-start space-x-4 bg-white/10 p-4 rounded-lg shadow-md hover:bg-white/20 transition"
            >
              <span className="text-white text-2xl">⚡</span>
              <p className="text-gray-200">{text}</p>
            </motion.li>
          ))}
        </ul>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-10 text-gray-300 text-lg"
        >
          Whether you’re starting from scratch or looking to specialize in a specific tech stack, 
          our learning paths are tailored for your growth.
        </motion.p>
      </div>
    </section>

     

        {/* Our Mission */}
        <section className="bg-primary-50 rounded-xl p-12 mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-dark mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-8">
              "To create symbiotic intelligence systems that amplify human potential while maintaining ethical boundaries and transparency."
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                <div className="text-primary-600 mb-4">
                  <i className="fas fa-lightbulb text-3xl"></i>
                </div>
                <h3 className="font-bold text-dark mb-2">Augmented Intelligence</h3>
                <p className="text-gray-600">We build tools that enhance human cognition, not replace it.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                <div className="text-primary-600 mb-4">
                  <i className="fas fa-shield-alt text-3xl"></i>
                </div>
                <h3 className="font-bold text-dark mb-2">Ethical Framework</h3>
                <p className="text-gray-600">Every system undergoes rigorous ethical review before deployment.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                <div className="text-primary-600 mb-4">
                  <i className="fas fa-project-diagram text-3xl"></i>
                </div>
                <h3 className="font-bold text-dark mb-2">Neural Synthesis</h3>
                <p className="text-gray-600">Our proprietary architecture mimics human neural pathways.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-dark mb-12 text-center">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="CEO" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-dark mb-1">Dr. Elena Vasquez</h3>
                <p className="text-primary-600 font-medium mb-3">CEO & Co-Founder</p>
                <p className="text-gray-600">Cognitive computing pioneer with a PhD in Computational Neuroscience from Stanford.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="CTO" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-dark mb-1">Raj Patel</h3>
                <p className="text-primary-600 font-medium mb-3">Chief Technology Officer</p>
                <p className="text-gray-600">Former lead architect at DeepMind, specializes in neural-symbolic integration.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Chief Ethics Officer" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-dark mb-1">Dr. Kwame Nkosi</h3>
                <p className="text-primary-600 font-medium mb-3">Chief Ethics Officer</p>
                <p className="text-gray-600">Author of "The Moral Algorithm" and AI policy advisor to the EU Parliament.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        {/* <section className="bg-dark text-white rounded-xl p-12 mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">37+</div>
              <div className="text-gray-300">Peer-Reviewed Papers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">84+</div>
              <div className="text-gray-300">Patents Granted</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">22M+</div>
              <div className="text-gray-300">Daily Predictions</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-400 mb-2">98%</div>
              <div className="text-gray-300">Client Retention</div>
            </div>
          </div>
        </section> */}

        {/* Call to Action */}
           <section className="bg-black text-white rounded-xl p-12 text-center">
  <h2 className="text-3xl font-bold mb-6">Experience the Codefficient Difference</h2>
  <p className="text-xl mb-8 max-w-2xl mx-auto">
    Join forward-thinking organizations leveraging our platform.
  </p>
  <button className="bg-white text-black font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg">
    Schedule a Demo
  </button>
</section>

      </main>

     
    </div>
  );
}
