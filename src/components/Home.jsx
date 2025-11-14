import React from "react";
import { motion } from "framer-motion";
import heroImg from "/bg.webp";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="relative bg-linear-to-b from-white to-blue-50 py-16 px-6 overflow-hidden">
      
      {/* Background Soft Shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">

        {/* Left: Image in Clean Glass Card */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative bg-white/30 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white/40">
            <img
              src={heroImg}
              alt="Hero Visual"
              className="rounded-2xl w-80 md:w-[420px] object-cover shadow-md"
            />

            {/* Floating Triangles */}
            <motion.div
              className="absolute -top-6 -left-6 w-0 h-0 border-l-30 border-r-30 border-b-50 border-l-transparent border-r-transparent border-b-yellow-400 opacity-80"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute top-10 -right-8 w-0 h-0 border-l-30 border-r-30 border-b-50 border-l-transparent border-r-transparent border-b-pink-400 opacity-80"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute -bottom-6 left-10 w-0 h-0 border-l-30 border-r-30 border-b-50 border-l-transparent border-r-transparent border-b-teal-400 opacity-80"
              animate={{ y: [0, -14, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="flex-1 md:text-left text-center "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Speak With Clarity & Confidence
          </motion.h1>

          <motion.p
            className="text-lg text-blue-400 font-serif mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Say exactly what you want,
            <br /> When you want to say it,
            <br /> Anytime...Anywhere.
          </motion.p>

          <motion.p
            className="text-lg text-pink-400 font-medium mb-4 "
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Overcome stuttering with proven techniques
            <br /> and expert-guided speech training.
          </motion.p>

          <motion.p
            className="text-lg  text-yellow-600 font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            It doesn’t require years of struggle —
            <br /> you can improve your speech faster than you think.
          </motion.p>

          <motion.ul
            className="text-centre list-disc list-outside text-base text-gray-600 font-medium leading-relaxed space-y-2 pl-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <li>Learn powerful fluency techniques</li>
            <li>Replace stuttering with a new speaking style</li>
            <li>Simple at-home practice exercises</li>
            <li>Anyone can start — at any age</li>
          </motion.ul>

          <p className="my-4 font-semibold text-lg">
            All Stuttering Treatment Is{" "}
            <span className="text-blue-600 font-bold">NOW ONLINE</span>
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 rounded-full bg-blue-600 text-white text-lg font-semibold shadow-md flex items-center gap-2 mx-auto md:mx-0"
          >
            Start Your Journey <ArrowRight />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
