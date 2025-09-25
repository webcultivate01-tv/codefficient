import { useState, useEffect } from "react";

// Import your local images
import mernStack from "../assets/mernStack.jpg";
import meanStack from "../assets/meanStack.jpg";
import javaFullStack from "../assets/javaFullStack.jpg";

const AnimatedCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    javaFullStack,
    mernStack,
    meanStack,
    mernStack, // You can add more images or duplicate for demo
  ];

  // Auto-reset after 5 seconds
  useEffect(() => {
    if (activeIndex !== null) {
      const timer = setTimeout(() => {
        setActiveIndex(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <section className="bg-black overflow-hidden ">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-4 md:px-12 mx-auto py-20 flex flex-col justify-center space-y-16">

        {/* Big Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Explore Codefficient Courses
          </h2>
          <p className="mt-6 text-white text-lg md:text-xl">
            Click on any course image to view it bigger
          </p>
        </div>

        {/* Animated Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center gap-6 mt-12">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`img-${index}`}
              onClick={() => setActiveIndex(index)}
              className={`
                rounded-xl cursor-pointer 
                h-64 sm:h-72 md:h-80 w-full sm:w-60 md:w-72 lg:w-72 
                object-cover transform duration-500 border border-white
                ${activeIndex === index ? "scale-125 z-10" : "scale-100"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCards;
