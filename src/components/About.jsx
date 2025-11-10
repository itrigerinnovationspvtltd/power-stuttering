import React from "react";
import { motion } from "framer-motion";
import about from "../assets/mark.webp";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-28"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-16">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            About <span className="text-red-600">Me</span>
          </h2>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            I used to stutter severely for <strong>35 years</strong>. Today, I
            have learned to stop stuttering after 30 years!
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed italic">
            “I stuttered severely for 35 years. Today, I have learned how to stop
            stuttering after 30 years!”
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            I’ve been treating people who stutter for the past 25 years. The{" "}
            <strong>American Speech-Language-Hearing Association</strong> awarded
            me the <strong>Board Certification in Fluency Disorders (BCS-F)</strong>{" "}
            in 2001.
          </p>

          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            Not only am I a <strong>Board Certified Stuttering Specialist in
            Fluency</strong>. I limit my stuttering therapy practice to treating only teens and adults who stutter.
          </p>

          <div className="bg-white/70 border-l-4 border-red-600 px-5 py-4 rounded-lg shadow-sm mb-6">
            <p className="text-gray-800 text-base sm:text-lg italic font-semibold">
              “This is what I LIVE AND BREATHE. Let me help you today!”
            </p>
          </div>

<div className="text-gray-800 text-base sm:text-lg leading-relaxed text-left">
  {/* Teenagers Section */}
  <h3 className="text-red-600 font-bold text-xl mb-2">1. Teenagers</h3>
  <ul className="space-y-3">
    <li className="flex items-start gap-2">
      <span className="text-red-600 text-xl font-bold mt-1">✓</span>
      <p>
        Are you a teenager who stutters or hesitates when you speak? If you have repetitions in your speech 
        or find yourself getting stuck on certain sounds, know that you are not alone. Stuttering can be a challenge 
        that affects our self-confidence and our ability to communicate effectively.
      </p>
    </li>
    <li className="flex items-start gap-2">
      <span className="text-red-600 text-xl font-bold mt-1">✓</span>
      <p>
        The <strong>MPI-2 (Modifying Phonation Intervals)</strong> Stuttering Treatment Program is one of the most 
        researched, evidence-based treatments for teenagers and adults. My mission is to help restore your belief 
        in your abilities and to help you communicate with confidence and fluency.
      </p>
    </li>
  </ul>

  {/* Adults Section */}
  <h3 className="text-red-600 font-bold text-xl mt-8 mb-2">2. Adults</h3>
  <ul className="space-y-3">
    <li className="flex items-start gap-2">
      <span className="text-red-600 text-xl font-bold mt-1">✓</span>
      <p>
        There are only a few research evidence-based stuttering treatment programs available to adults and teens. 
        During the <strong>MPI-2 (Modifying Phonation Intervals)</strong> Stuttering Treatment Program, 
        you’ll learn a new way of talking to replace all of your stuttering and communicate more easily and confidently.
      </p>
    </li>
  </ul>
</div>



         <button
  className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold text-base sm:text-lg px-6 py-3 rounded-md transition duration-300"
>
  Watch the FREE Training Video Now &gt;&gt;
</button>

        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
            <img
              src={about}
              alt="Mark Power - Board Certified Stuttering Specialist"
              className="w-96 h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
           {/*Text below the image */}
          <div className="mt-6 text-center text-red-600 text-xl font-semibold space-y-1">
            <p>Mark Power, M.A. CCC BCS-F</p>
            <p>Board Certified Stuttering Specialist</p>
            <p>Power Stuttering Therapy</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
