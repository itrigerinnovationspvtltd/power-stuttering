import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <a
      href="tel: "
      className="fixed bottom-10 right-6  bg-[#5986c2] hover:bg-[#3873bf] text-white font-semibold py-3 px-5 rounded-full shadow-lg flex items-center gap-2 z-50 animate-bounce transition-transform duration-300"
      
    >
      <FaPhoneAlt className="text-lg" />
      <span>Schedule An Appointment</span>
    </a>
  );
};

export default FloatingButton;
