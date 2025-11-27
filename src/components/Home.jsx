import React from "react";
import { motion } from "framer-motion";
import heroImg from "/bg.webp";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div
      id="hero"
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative container mx-auto px-6 md:px-12 lg:px-20 text-center md:text-left text-white z-10 items-center gap-10"
      >
        {/* Right: Text */}
        <div className="md:w-2xl md:ml-auto md:pl-32">
          <h1 className="text-3xl  md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg md:pt-20">
            Stuttering Treatment
          </h1>

          <p className="my-4 font-semibold text-lg drop-shadow-lg">
            All Stuttering Treatment Is{" "}
            <span className="text-blue-300 font-bold">NOW ONLINE</span>
          </p>

          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-lg  items-center gap-2 mx-auto md:mx-0 "
          >
            <a href="https://powerstuttering.lpages.co/google-ads-video-hosting-page/" className="flex items-center gap-2">
            Start Your Journey <ArrowRight /></a>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
