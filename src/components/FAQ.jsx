import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Will these programs work for me?",
    answer:
      "Over the last 25 years of treating all types of people who stutter, almost all have learned to talk without stuttering by the end of the first week. Those who complete the transfer follow-up program maintain their stutter-free speech all day long with whoever they want to talk with. Many research studies demonstrate the effectiveness of these evidence-based programs in scientific journals.",
  },
  {
    question: "How long does the Stutter-Free Speech Program take to complete?",
    answer:
      "The intensive phase lasts for 5 days. Follow-up lasts about 2 to 4 months of weekly phone calls.",
  },
  {
    question: "Are there different programs for mild and severe people who stutter?",
    answer:
      "No, both mild and severe stutterers need to replace their stuttered speech with a new way of talking.",
  },  
  {
    question: "Can my stuttering be treated?",
    answer:
      "Yes, our intensive stuttering treatment programs have been extremely effective as they have been scientifically tested and proven to work on teenagers and adults alike. The 2 programs we manage are: the Stutter-Free Speech Program and the MPI-2 Program.",
  },
  {
    question: "What practical things can listeners do to help the people who stutter?",
    answer:
      "Listeners can help a person who stutters by maintaining natural eye contact, waiting patiently without finishing their sentences, and avoiding advice like “slow down” or “take a deep breath.” Speak slowly and calmly yourself, be extra patient on the phone, and focus on listening to what the person is saying rather than how they say it. Being a good listener is the most effective support.",
  },
  {
    question: "What specific experience has Mark Power personally had with stuttering?",
    answer:
      "Mark experienced 30 years of severe stuttering, including during high school, college, and his first job as a speech pathologist. He completed the Stutter-Free Speech Program with Dr. George Shames and was later trained by him to help others. Through workshops and conferences, he earned Lifetime Certification as a Fluency Specialist from the American Speech and Hearing Association. ",
  },
  
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Split FAQ into two halves
  const mid = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, mid);
  const secondHalf = faqs.slice(mid);

  return (
    <section className="max-w-7xl mx-auto pt-2 pb-6 md:py-10 px-4">
      <motion.h2
        className="text-3xl sm:text-5xl font-extrabold text-center mb-2  text-gray-900"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.h3
        className="text-center text-gray-500 text-base mb-10 sm:mb-20 sm:text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Discover answers to common question
      </motion.h3>

      {/* Two-part FAQ layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {[firstHalf, secondHalf].map((faqPart, partIndex) => (
          <motion.div
            key={partIndex}
            className="flex-1 space-y-4 sm:space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {faqPart.map((faq, index) => {
              // Adjust index to global index for open toggle
              const globalIndex = partIndex === 0 ? index : index + mid;
              return (
                <motion.div
                  key={globalIndex}
                  className="border border-gray-200 rounded-2xl p-4 bg-white shadow-xl hover:shadow-2xl"
                  variants={faqItemVariants}
                >
                  <button
                    onClick={() => toggleFAQ(globalIndex)}
                    className="flex justify-between items-center w-full text-left"
                  
                  >
                    <span className="text-base md:text-xl font-semibold text-black">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === globalIndex ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-gray-800" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {openIndex === globalIndex && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden mt-2"
                      >
                        <p className="text-gray-700 text-sm md:text-xl">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
