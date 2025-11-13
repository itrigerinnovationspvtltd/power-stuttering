import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sam Al",
    profile: "https://i.pravatar.cc/100?img=13",
    rating: 5,
    date: "1 week ago",
    review:
      "We felt incredibly lucky to work with Mark. He’s everything one would want for stuttering therapy. He is very patient and compassionate. His method and stuttering programs are research-based and truly effective. Mark has worked in this field for over 20 years and recovered from stuttering himself, which makes us believe in his methods even more.",
  },
  {
    name: "Mahastra Wibisono",
    profile: "https://i.pravatar.cc/100?img=23",
    rating: 4,
    date: "5 years ago",
    review:
      "I used to stutter a lot before I came here, especially when talking to new people. It’s been around 5 months since I joined this program, and I can say that I’ve been stuttering less and it’s been progressing. Mark is a really good therapist, and his programs are easy to follow. It does require commitment from the patient, but it’s absolutely worth it.",
  },
  {
    name: "Kailey Holmberg",
    profile: "https://i.pravatar.cc/100?img=28",
    rating: 5,
    date: "2 years ago",
    review:
      "It’s been freeing for me, and I’ve been stutter-free for a year. I’ve done other programs before, but none have ever brought me this much success. If you stutter, I highly recommend this intensive program. You won’t regret it!",
  },
  {
    name: "E. T.",
    profile: "https://i.pravatar.cc/100?img=32",
    rating: 5,
    date: "Nov 5, 2014",
    review:
      "Mark is a great person to talk with about options for treating children’s speech issues. Highly recommend talking with Mark and learning about how he can help fix your child’s speech issues.",
  },
  {
    name: "No BS Physique",
    profile: "https://i.pravatar.cc/100?img=35",
    rating: 5,
    date: "1 week ago",
    review:
      "Mark is an amazing therapist. His programs are tailor-made to treat conditions of stuttering. He assured his aid that this day will always be open. Thank you, Mark Power! We are forever grateful for you and truly admire what you are doing for the stuttering community.",
  },
];

// Array of background colors for each card
const bgColors = ["bg-purple-100", "bg-green-100", "bg-blue-100", "bg-yellow-100", "bg-pink-100"];

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="py-10 sm:py-16 px-6 max-w-7xl mx-auto rounded-md"
    >
      {/* Heading with animation */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-8"
        initial={{ opacity: 0, y: -100 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
       What Our Clients Say
      </motion.h2>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            className={`${bgColors[index % bgColors.length]} rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow duration-300 p-6`}
            initial={{ opacity: 0, y: 50, scale: 0.95 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }} 
            whileHover={{ y: -10, scale: 1.02, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }} 
            viewport={{ once: true }}
          >
            {/* Profile */}
            <div className="flex items-center border-b border-gray-100 pb-4 mb-4">
              <img
                src={item.profile}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <FaCheckCircle className="text-[#5986c2] mr-1" />
                  <span>Verified Review • {item.date}</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${i < item.rating ? "text-yellow-300" : "text-gray-300"} text-lg`}
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-700 text-base leading-relaxed">{item.review}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
