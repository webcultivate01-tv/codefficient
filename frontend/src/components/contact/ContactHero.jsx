import React from 'react'

export default function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="w-full flex items-center justify-center min-h-[500px] overflow-hidden bg-gradient-to-b from-[#121212] to-orange-900 relative">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1
            className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ lineHeight: "1.2" }}
          >
            Catching Life&apos;s{" "}
            <span className="relative whitespace-nowrap text-purple-400">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-purple-400/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686..."></path>
              </svg>
              <span className="relative">Beautiful</span>
            </span>{" "}
            Stories
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Professional photography services for weddings, events, portraits, and commercial
            shoots. Let us tell your story through our lens.
          </p>

          {/* CTA */}
          <div className="flex justify-center items-center mt-8">
            <a
              href="#pricing"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <span className="absolute inset-0 rounded-full bg-purple-600 opacity-50 animate-ping"></span>
              <span className="relative z-10 pr-2">Book Now</span>
            </a>
          </div>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute sm:bottom-14 bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
