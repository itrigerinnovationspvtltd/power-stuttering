import React from "react";

const Navbar = () => {
  const handleClick = () => {
    window.location.href = "https://powerstuttering.com/1-google-ads-scq-free-training1"; 
  };

  return (
    <nav
      onClick={handleClick}
      className="w-full bg-[#5986c2] border-b-2 border-[#5986c2] overflow-hidden cursor-pointer py-3 mt-16"
    >
      <div className="inline-block whitespace-nowrap animate-scroll-left pause-on-hover font-semibold text-white text-lg">
        Join the Free Summit Now
      </div>
    </nav>
  );
};

export default Navbar;
