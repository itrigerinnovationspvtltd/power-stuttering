import React from 'react'
import { FaStopwatch, FaRocket, FaCheckCircle, FaHandshake } from 'react-icons/fa'
import { motion } from 'framer-motion'

const phases = [
  {
    icon: <FaStopwatch className="text-5xl text-purple-400" />,
    bg: "bg-purple-100",
    title: "Days 1-2",
    desc: "You start out with a speaking rate slow enough that you don't stutter at all.",
  },
  {
    icon: <FaRocket className="text-5xl text-green-400" />,
    bg: "bg-green-100",
    title: "Days 3-4",
    desc: "You start to talk at faster rates, still not stuttering, and learn to plan phrases to say exactly what you want to say.",
  },
  {
    icon: <FaCheckCircle className="text-5xl text-blue-400" />,
    bg: "bg-blue-100",
    title: "Day 5",
    desc: "You are talking stutter-free at normal speaking rates!",
  },
  {
    icon: <FaHandshake className="text-5xl text-yellow-400" />,
    bg: "bg-yellow-100",
    title: "Accountability Phase",
    desc: "You and your clinician plan how you will use your new speech outside the clinic, in real-world speaking situations back home.",
  },
]

const HowWork = () => {
  return (
    <section id='work' className="py-10 sm:py-16 px-6 max-w-7xl mx-auto rounded-md">
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Step Inside the Program: How It Works
      </motion.h2>

      {/* Numbered pointers */}
      <div className="max-w-4xl space-y-2 mb-12">
        <div className="flex items-start gap-4">
          <span className="font-bold text-gray-900 shrink-0">1 -</span>
          <p className="text-gray-700 text-base md:text-lg">
            Daily Zoom Sessions: 5-day implementation phase, scheduled at a convenient time.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <span className="font-bold text-gray-900 shrink-0">2 -</span>
          <p className="text-gray-700 text-base md:text-lg">
            Accountability Phase: Guided practice over several months to use stutter-free speech in real life.
          </p>
        </div>
      </div>

      {/* 4 responsive 3D cards with animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            className={`${phase.bg} p-6 rounded-lg shadow-md flex flex-col items-start cursor-pointer`}
            whileHover={{ rotateY: 10, rotateX: 5, scale: 1.05, boxShadow: "0 20px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">{phase.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
            <p className="text-gray-700 text-base md:text-lg">{phase.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HowWork
