import React from "react";
import { motion } from "framer-motion";
import heroImg from "/bg.webp";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="bg-white text-gray-900 min-h-[75vh] flex items-center justify-center px-6 py-5">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-4">
        
        {/* Left Section (Image) */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <img
              src={heroImg}
              alt="People holding speech bubbles"
              className="rounded-[80px] w-80 md:w-96 object-cover shadow-lg"
            />
            {/* Animated Colored Speech Bubbles */}
            <motion.div
              className="absolute top-0 -left-4 w-20 h-20 bg-pink-400 rounded-full opacity-80"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute top-10 right-0 w-20 h-20 bg-yellow-300 rounded-full opacity-80"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-0 left-6 w-20 h-20 bg-teal-400 rounded-full opacity-80"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </motion.div>

        {/* Right Section (Text) */}
        <motion.div
          className="flex-1 text-left md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-gray-900  mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            How To Stop Stuttering
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Say exactly what you want to say
            <br /> When you want to say it
            <br /> Anytime...Anywhere
          </motion.p>

          

          <motion.p
            className="text-lg text-gray-600 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Overcome Stuttering With A Stuttering Specialist
            <br /> Become A More Fluent & Confident Speaker
          </motion.p>

          <motion.p
            className="text-lg text-gray-600 font-medium mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            It doesn't have to take years of struggling on your own to stop stuttering!
          </motion.p>

          <motion.ul
            className="list-disc list-outside text-base text-gray-600 font-medium mb-2 leading-relaxed space-y-2 px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <li>
              How to stop stuttering with a new treatment approach that will
              help you speak more fluently
            </li>
            <li>Replace your stuttering with a new way of talking.</li>
            <li>
              At-home exercises that make talking and speaking easier and more
              natural.
            </li>
            <li>
              It doesn't matter how old you are or how much you've struggled — 
              you can stop stuttering now.
            </li>
          </motion.ul>
          <p className="my-2 font-semibold text-center text-lg">
            All Stuttering Treatment Is{" "}
            <span className="text-[#5986c2]">NOW ONLINE</span>
          </p>
          </motion.div>
      </div>
    </section>
  );
};

export default Home;
