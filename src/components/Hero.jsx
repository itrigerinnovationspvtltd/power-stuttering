import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const particles = Array.from({ length: 12 });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-start items-center bg-linear-to-b from-[#fcfcfd] via-[#ede7fc] to-[#bcbbfa] text-gray-900 px-6 pt-4  pb-16 overflow-hidden">
      {/*  Floating darker particles */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.6) 0%, rgba(255,255,255,0) 70%)",
              width: Math.random() * 50 + 25 + "px",
              height: Math.random() * 50 + 25 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.4 + 0.5,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-16 max-w-7xl mx-auto text-center md:text-left">
        {/* Left Section — Heading & button */}
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-[#5986c2] mb-4 tracking-tight"
          >
            How To Stop Stuttering
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-3xl font-medium mb-4 text-gray-700 leading-snug"
          >
            Say exactly what you want to say <br />
            <span className="text-#5986c2 font-semibold">When</span> you want to say it <br />
            <span className="italic text-gray-600">Anytime... Anywhere</span>
          </motion.p>

          <motion.a
            href="https://powerstuttering.com/1-google-ads-scq-free-training1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59,130,246,0.6)",
            }}
            className="inline-flex items-center gap-3 bg-[#5986c2] hover:bg-[#3873bf] text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Show Me The Video
            <ArrowRight className="w-6 h-6" />
          </motion.a>

           {/* Added Image Below Button */}
          <motion.img
            src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/KEx3urzHcoy2L49zdhTc/media/68a4b94eeddaa34d9fee4279.png"
            alt="Speaking confidently"
            className="mt-4 rounded-lg shadow-md max-w-xs md:max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex-1 bg-white/70 backdrop-blur-md border border-red-100 shadow-md p-8 rounded-2xl"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-[#5986c2] mb-4 text-center">
            Watch This Free Video
          </h2>
          <p className="text-base md:text-xl text-black font-bold text-center mb-6">
            Overcome stuttering with a stuttering specialist and become a more
            fluent & confident speaker.
          </p>
          <p className="text-base md:text-xl text-black font-bold text-center mb-6">
            It doesn't have to take years of struggling on your own to stop stuttering!
          </p>
          <ul className="list-disc list-outside text-gray-700 text-base md:text-xl leading-relaxed space-y-2">
            <li>How to stop stuttering with a new treatment approach that will help you speak more fluently</li>
            <li>Replace your stuttering with a new way of talking.</li>
            <li>At-home exercises that make talking and speaking easier and more natural. </li>
            <li>It doesn't matter how old you are or how much you've struggled you can stop stuttering now.</li>
          </ul>
          <p className="mt-6 font-semibold text-gray-800 text-center text-lg">
            All Stuttering Treatment Is{" "}
            <span className="text-[#5986c2]">NOW ONLINE</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
