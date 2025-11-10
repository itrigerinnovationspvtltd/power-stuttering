import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12 border-t border-gray-300">
      <div className="text-center text-lg sm:text-xl text-gray-800 font-medium">
        © Power Stuttering |{" "}
        <a
          href="https://stuttering-therapy.com/wp-content/uploads/2016/09/privacy-policy.pdf"
          className="text-[#5986c2] hover:text-[#3873bf] transition-colors duration-300"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
