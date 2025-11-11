import React from "react";
import { motion } from "framer-motion";
import about from "../assets/Mark.webp";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-linear-to-b from-gray-50 via-white to-gray-100 py-20 sm:py-32"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-16">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left space-y-6"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            About <span className="text-[#5986c2]">Me</span>
          </h2>

          <motion.div
            className="bg-[#5986c2]/10 p-6 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
              I used to stutter severely for <strong>35 years</strong>. Today, I
              have learned to stop stuttering after 30 years! 
            </p>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">I’ve been treating people who stutter for the past 25 years. The <span className="font-bold">American Speech-Language-Hearing Association</span> awarded me the <span className="font-bold">Board Certification in Fluency Disorders (BCS-F)</span> in 2001.</p>
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed italic">“I stuttered severely for 35 years. Today, I have learned how to stop stuttering after 30 years!”</p>
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed">Not only am I a <span className="font-bold">Board Certified Stuttering Specialist in Fluency</span>. I limit my stuttering therapy practice to treating only teens and adults who stutter.</p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Teenagers Section */}
            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-[#5986c2]">
              <h3 className="text-[#5986c2] font-bold text-xl mb-2">Teenagers</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#5986c2] mt-1" size={20} />
                  <p>
                    Are you a teenager who stutters or hesitates when you speak? If you have repetitions in your speech or find yourself getting stuck on certain sounds, know that you are not alone. Stuttering can be a challenge that affects our self-confidence and our ability to communicate effectively.
                  </p>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#5986c2] mt-1" size={20} />
                  <p>
                    The <span className="font-bold">MPI-2 (Modifying Phonation Intervals)</span> Stuttering Treatment Program is one of the most researched, evidence-based treatments for teenagers and adults. My mission is to help restore your belief in your abilities and to help you communicate with confidence and fluency.
                  </p>
                </li>
              </ul>
            </div>

            {/* Adults Section */}
            <div className="bg-white rounded-xl shadow-md p-5 border-l-4 border-[#5986c2]">
              <h3 className="text-[#5986c2] font-bold text-xl mb-2">Adults</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="text-[#5986c2] mt-1" size={20} />
                  <p>
                    There are only a few research evidence-based stuttering treatment programs available to adults and teens. During the <span className="font-bold">MPI-2 (Modifying Phonation Intervals)</span> Stuttering Treatment Program, you’ll learn a new way of talking to replace all of your stuttering and communicate more easily and confidently.
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.a
            href="https://powerstuttering.com/1-google-ads-scq-free-training1"
            className="inline-block mt-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button className="bg-[#5986c2] hover:bg-[#3873bf] text-white font-semibold text-base sm:text-lg px-6 py-3 rounded-md transition duration-300 shadow-lg">
              Watch the FREE Training Video Now &gt;&gt;
            </button>
          </motion.a>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="md:w-1/2 flex flex-col items-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group lg:-mt-44">
            <img
              src={about}
              alt="Mark Power - Board Certified Stuttering Specialist"
              className="w-96 h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text below the image */}
          <div className="mt-6 text-center text-[#5986c2] text-xl font-semibold space-y-1">
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
