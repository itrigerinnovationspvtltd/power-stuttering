import React from "react";
import { motion } from "framer-motion";
import about from "../assets/Mark.webp";
import { CheckCircle, PlayCircle } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-white text-gray-900 py-20">
      {/* HERO SECTION */}
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          About Power Stuttering
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Helping teenagers and adults speak freely and confidently through
          evidence-based stuttering treatment.
        </p>
      </div>

      {/* CENTER INFO BOX */}
      <div className="max-w-4xl mx-auto mt-12 px-6">
        <motion.div
          className="bg-blue-100 text-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">
                What makes Mark Power’s stuttering program so effective?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I stuttered severely for <strong>35 years</strong>. Today, I
                have learned to stop stuttering after 30 years — and I’ve been
                helping people who stutter for the past 25 years using one of
                the most researched evidence-based treatments.
              </p>

              <a
                href="#story"
                className="inline-flex items-center gap-2 text-[#5986c2] font-semibold"
              >
                <PlayCircle size={26} />
                Watch the FREE Training Video (2 mins)
              </a>
            </div>

            <div className="lg:w-1/2">
              <img
                src={about}
                alt="Mark Power"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* CONTENT ROW */}
      <div className="max-w-7xl mx-auto mt-20 px-6 flex flex-col lg:flex-row gap-10">
        {/* MAIN TEXT SECTION */}
        <div className="lg:w-2/3 space-y-6 bg-[#f8fbff] text-gray-900 p-8 rounded-2xl shadow-xl">
          <p className="text-lg leading-relaxed">
            I’ve been treating people who stutter for over 25 years. The{" "}
            <strong>American Speech-Language-Hearing Association</strong> awarded
            me the prestigious{" "}
            <strong>Board Certification in Fluency Disorders (BCS-F)</strong> in
            2001.
          </p>

          <p className="italic text-gray-700">
            “I stuttered severely for 35 years. Today, I have learned how to stop
            stuttering after 30 years!”
          </p>

          <p className="text-lg leading-relaxed">
            I am a{" "}
            <strong>Board Certified Stuttering Specialist in Fluency</strong>,
            and I limit my stuttering therapy practice exclusively to treating
            teenagers and adults who stutter.
          </p>
          <hr className="text-gray-300"></hr>

          {/* TEENS BOX */}
          <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-[#5986c2]">
            <h3 className="text-[#5986c2] text-xl font-bold mb-3">Teenagers</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="text-[#5986c2]" />
                <p>
                  If you stutter, hesitate, or get stuck on sounds — you are not
                  alone. Stuttering can affect confidence, friendships, and
                  communication.
                </p>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="text-[#5986c2]" />
                <p>
                  The <strong>MPI-2 (Modifying Phonation Intervals)</strong>{" "}
                  program is one of the most researched treatments for teens and
                  adults. My mission is to help you speak confidently and freely.
                </p>
              </li>
            </ul>
          </div>

          {/* ADULTS BOX */}
          <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-[#5986c2]">
            <h3 className="text-[#5986c2] text-xl font-bold mb-3">Adults</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <CheckCircle className="text-[#5986c2]" />
                <p>
                  There are very few evidence-based stuttering treatments for
                  adults. With{" "}
                  <strong>MPI-2 Stuttering Treatment</strong>, you’ll learn a
                  new way of speaking that replaces all stuttering and helps you
                  communicate with ease.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* SIDE CARDS */}
        <div className="lg:w-1/3 space-y-8">
         <motion.div
    className="p-6 rounded-xl shadow-lg bg-yellow-100"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <h4 className="font-bold text-lg mb-2">Meet Mark Power</h4>
    <p className="text-gray-700">Learn more about Mark's 25+ years of helping people who stutter.</p>
  </motion.div>
          <motion.div
    className="p-6 rounded-xl shadow-lg bg-green-100"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.3 }}
  >
    <h4 className="font-bold text-lg mb-2">Success Stories</h4>
    <p className="text-gray-700">Hear inspiring transformations from teens and adults.</p>
  </motion.div>
  <motion.div
    className="p-6 rounded-xl shadow-lg bg-pink-100"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <h4 className="font-bold text-lg mb-2">Program Overview</h4>
    <p className="text-gray-700">Understand how the MPI-2 program works step-by-step.</p>
  </motion.div>
  <motion.div
    className="p-6 rounded-xl shadow-lg bg-blue-100"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.5 }}
  >
    <h4 className="font-bold text-lg mb-2">Get Started</h4>
    <p className="text-gray-700">Start your journey toward confident and fluent communication.</p>
  </motion.div>
        </div>
      </div>

      {/* SIGNATURE */}
      <div className="text-center text-gray-600 mt-16">
        <p className="font-semibold text-lg">Mark Power, M.A. CCC BCS-F</p>
        <p className="text-sm">Board Certified Stuttering Specialist</p>
        <p className="text-sm">Power Stuttering Therapy</p>
      </div>
    </section>
  );
};

export default About;
