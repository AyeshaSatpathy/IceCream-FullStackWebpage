import React, { useState, useEffect } from 'react'; 
import Navbar from './Navbar';
import { IcecreamData } from './data/MockData';
import { motion } from 'framer-motion';

const Hero = () => {
  const [activeData, setActiveData] = useState(IcecreamData[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IcecreamData.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    setActiveData(IcecreamData[currentIndex]);
  }, [currentIndex]);

  return (
    <motion.section
      initial={{
        backgroundImage: `radial-gradient(circle, ${activeData.bgColor} 0%, ${activeData.bgColor} 0%)`,
      }}
      animate={{
        backgroundImage: `radial-gradient(circle, ${activeData.bgColor}aa 0%, ${activeData.bgColor} 70%)`,
      }}
      transition={{ duration: 0.8 }}
      className="text-white"
      style={{
        minHeight: '100vh', // Ensures it covers the full viewport height
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Navbar /> {/* Navbar inside the section to share the same background */}

      <div className="container flex-grow flex items-center justify-center relative">
        {/* Ice cream image section */}
        <div className="flex items-center justify-center relative w-full h-full">
          <img
            src={activeData.image}
            alt="Ice cream Image"
            className="w-[700px] md:w-[500px] xl:w-[800px] z-10 object-contain"
          />

{/* Decorative Image 1 (Top Right) */}
{activeData.image1 && (
  <motion.img
    src={activeData.image1}
    alt="Decorative Image 1"
    className="absolute -top-5 right-24 w-24 md:w-24"
    initial={{ opacity: 0, x: -50, rotate: -10 }}
    animate={{ opacity: 1, x: 0, rotate: 0 }}
    transition={{ duration: 1 }}
  />
)}

{/* Duplicate of Decorative Image 1 (Bottom Left) */}
{activeData.image1 && (
  <motion.img
    src={activeData.image1}
    alt="Decorative Image 1 Duplicate"
    className="absolute left-10 w-24 md:w-24"
    initial={{ opacity: 0, x: 50, rotate: 10 }}
    animate={{ opacity: 1, x: 0, rotate: 0 }}
    transition={{ duration: 1 }}
  />
)}

{/* Decorative Image 2 (Top Left) */}
{activeData.image2 && (
  <motion.img
    src={activeData.image2}
    alt="Decorative Image 2"
    className="absolute bottom-10 -top-7 left-10 w-24 md:w-22"
    initial={{ opacity: 0, x: 50, rotate: 10 }}
    animate={{ opacity: 1, x: 0, rotate: 0 }}
    transition={{ duration: 1 }}
  />
)}

{/* Duplicate of Decorative Image 2 (Bottom Right) */}
{activeData.image2 && (
  <motion.img
    src={activeData.image2}
    alt="Decorative Image 2 Duplicate"
    className="absolute right-10 w-24 md:w-22"
    initial={{ opacity: 0, x: -50, rotate: -10 }}
    animate={{ opacity: 1, x: 0, rotate: 0 }}
    transition={{ duration: 1 }}
  />
)}

        </div>

        {/* Ice cream info section (Text behind the image) */}
        <div className="absolute inset-0 flex top-24 justify-center">
          <div className="text-center text-white/80">
            <h1 className="leading-loose tracking-wider font-muthiara text-8xl opacity-40 lg:text-4xl xl:text-9xl font-bold">
              {activeData.title}
            </h1>
            <p className="font-bold text-9xl leading-loose drop-shadow-2xl">
              {activeData.subtitle}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
