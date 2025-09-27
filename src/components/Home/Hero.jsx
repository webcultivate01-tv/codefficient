import { motion } from "framer-motion";
import bgVideo from "../../assets/bg-video.mp4";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Overlay with text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/40 px-4 sm:px-12">
    
        {/* New Section */}
        <div className="relative my-12 flex w-full flex-col items-center sm:mt-24 text-white bg-opacity-70 rounded-lg p-8 max-w-4xl">
            <h1 className="max-w-sm text-center text-4xl font-extrabold sm:max-w-4xl sm:text-6xl">
               Welcome to <span className="text-orange-600">CODE</span>
                <span className="text-white">fficient</span>
           </h1>

            <span className="mt-8 max-w-lg text-center text-2xl leading-relaxed text-white">
            Unlock your potential, master coding, and lead tomorrow.
           </span>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
            <a
              href="https://example.com/new-feature"
              className="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 border border-orange-500 px-10 py-3 text-white hover:bg-gradient-to-r from-orange-600 to-yellow-600 transition"
            >
              <svg
                className="h-[30px] text-white"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                strokeWidth="3"
                // stroke="#000000"
                fill="none"
              >
                <path d="M14,39.87,24.59,50.51s33-14,31.23-42.29C55.82,8.22,29.64,4.28,14,39.87Z"></path>
                <path d="M44.69,9.09a12.3,12.3,0,0,0,3.48,6.73,12.31,12.31,0,0,0,7,3.52"></path>
                <circle cx="39.46" cy="24.56" r="6.2"></circle>
                <path d="M14.89,37.82l-5.3.68a.27.27,0,0,1-.28-.37l3.93-9a2.65,2.65,0,0,1,1.88-1.53l6.59-1.38"></path>
                <path d="M26.55,49.4l-.69,5.3a.27.27,0,0,0,.37.28l9-3.92a2.69,2.69,0,0,0,1.53-1.89l1.38-6.59"></path>
                <path d="M22.21,48.13c-2.37,7.41-14.1,7.78-14.1,7.78S8,44.51,15.76,41.67"></path>
              </svg>
              Get the Latest Update
            </a>
            <a
              href="#demo"
              className="flex flex-row items-center justify-center gap-x-2 rounded-lg border border-orange-500 px-10 py-3 text-white hover:bg-gradient-to-r from-orange-600 to-yellow-600 transition"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
