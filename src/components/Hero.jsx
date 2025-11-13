
import LeadForm from "./LeadForm";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Hero() {
const [showForm, setShowForm] = useState(false);
  return (
    // Background image
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-start items-center text-gray-900 px-6 pt-4 pb-16 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bg.webp')",
      }}
    >
      
      <div className="absolute inset-0 z-0"></div>

      {/* Main Content */}
      <div className="z-20 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-48  text-center lg:text-left lg:pt-4">
        
        {/* Left Section — Heading & button */}
        <div className="flex-1 bg-black/40 p-2 border border-gray-200 rounded-2xl lg:mt-72 lg:mr-48 ">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[#5986c2] mb-4 tracking-tight"
          >
            How To Stop Stuttering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-2xl font-light mb-4 text-gray-100 leading-snug"
          >
            Say exactly what you want to say <br />
            <span className="text-[#5986c2] font-semibold">When</span> you want
            to say it <br />
            <span className="italic text-gray-300">Anytime... Anywhere</span>
          </motion.p>

         <motion.button
            onClick={() => setShowForm(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59,130,246,0.6)",
            }}
            className="inline-flex items-center gap-3 bg-[#5986c2] hover:bg-[#3873bf] text-white text-lg font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Show Me The Video
            <ArrowRight className="w-6 h-6" />
          </motion.button>
    
        </div>
  {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-3xl relative p-6">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-2xl font-bold"
            >
              ✕
            </button>
            <LeadForm />
          </div>
        </div>
      )}
        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex-1 bg-black/60  border border-gray-200 shadow-md py-4 px-8 rounded-2xl text-gray-100 mt-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#5986c2] mb-4 text-center">
            Watch This Free Video
          </h2>
          <p className="text-base md:text-lg font-bold text-center mb-3">
            Overcome stuttering with a stuttering specialist and become a more
            fluent & confident speaker.
          </p>
          <p className="text-base md:text-lg font-bold text-center mb-3">
            It doesn't have to take years of struggling on your own to stop
            stuttering!
          </p>
          <ul className="list-disc list-outside text-gray-200 text-sm md:text-base leading-relaxed space-y-2">
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
          </ul>
          <p className="mt-6 font-semibold text-center text-lg">
            All Stuttering Treatment Is{" "}
            <span className="text-[#5986c2]">NOW ONLINE</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
