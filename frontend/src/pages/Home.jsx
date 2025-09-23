import { motion } from "framer-motion";
import bgVideo from "../assets/bg-video.mp4";

const Home = () => {
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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black/40">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 text-center"
        >
          Welcome to <span className="text-orange-500">CODE</span><span className="text-gray-500">fficient</span> 
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-center max-w-2xl"
        >
          Premium Training in Full Stack Development
        </motion.p>
      </div>
    </div>
  );
};

export default Home;

