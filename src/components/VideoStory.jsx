import React from "react";
import { motion } from "framer-motion";

const VideoStory = () => {
  return (
    <section id="story" className="py-16 sm:py-32 bg-gray-50">
      {/* Main Heading with animation */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-[#5986c2] mb-3">
          Inspiring Stuttering Success Stories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
          Real people. Real transformation. Watch how Power Stuttering Therapy has helped
          individuals regain their confidence and speak fluently.
        </p>
      </motion.div>

      {/* Section 1 - Video Left / Text Right */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10 lg:gap-0 mb-10 lg:px-20">
        {/* Video with slide-in animation */}
        <motion.div
          className="flex justify-center lg:justify-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="relative w-full max-w-[350px]"
            style={{ aspectRatio: "1 / 1" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/KojUMSUR8oI?si=1TAAGQTcSTzR9NiE"
              title="Stuttering Success Story 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* Text Content with fade-in + slide-up */}
        <motion.div
          className="lg:pr-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-4xl font-bold sm:font-extrabold text-[#5986c2] mb-3">
            Conor's Story  
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-xl">
            Connor stuttered severely on almost every word before the Stutter-Free Speech program. He now has a new job teaching and training sailing teams in Newport Beach, California.
          </p>
        </motion.div>
      </div>

      {/* Section 2 - Text Left / Video Right */}
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-10 lg:gap-0 lg:px-20">
        {/* Text Content with fade-in + slide-up */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-4xl font-bold sm:font-extrabold text-[#5986c2] mb-3">
            David's Story  
          </h3>
          <p className="text-gray-700 leading-relaxed text-base sm:text-xl">
            David came all the way from Uruguay to get help for his stuttering. He was a successful software company CEO, but stuttered during video conference calls with his many employees.
            Now he presents international workshops to software organizations.
          </p>
        </motion.div>

        {/* Video with slide-in from right */}
        <motion.div
          className="flex justify-center md:justify-end sm:pr-20"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div
            className="relative w-full max-w-[350px]"
            style={{ aspectRatio: "1 / 1" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/THEa9Z1QVNE?si=SUXWRLbkzwNsR423"
              title="Stuttering Success Story 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Pulsing Banner*/}
      <div className="container mx-auto max-w-4xl px-6 sm:px-20 mt-10">
        <motion.a
          href="https://powerstuttering.com/1-google-ads-scq-free-training1"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#5986c2] text-white text-center text-lg sm:text-xl font-bold py-3 px-6 rounded-lg shadow-md"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.08 }}
        >
          Join the Free Summit Now &gt;&gt;
        </motion.a>
      </div>
    </section>
  );
};

export default VideoStory;
