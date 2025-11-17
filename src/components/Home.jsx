import React from "react";
import { motion } from "framer-motion";
import heroImg from "/bg.webp";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div
      id="home"
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Optional Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative container mx-auto px-6 md:px-12 lg:px-20 text-center md:text-left text-white z-10 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Left: Floating Card Image */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative bg-white/30  p-4 rounded-3xl shadow-xl border border-white/40">
            <img
              src={heroImg}
              alt="Hero Visual"
              className="rounded-2xl w-72 md:w-[380px] object-cover shadow-md"
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Speak With Clarity & Confidence
          </h1>

          <p className="my-4 font-semibold text-lg drop-shadow-lg">
            All Stuttering Treatment Is{" "}
            <span className="text-blue-300 font-bold">NOW ONLINE</span>
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-lg flex items-center gap-2 mx-auto md:mx-0"
          >
            Start Your Journey <ArrowRight />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
