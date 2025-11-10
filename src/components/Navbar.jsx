import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/ps-logo.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-8 py-2">
        {/* Logo */}
        <div className="cursor-pointer">
          <img src={logo} alt="C.W Inspections" className="w-36" />
        </div>

        {/* Hamburger Icon */}
        <div
          className="sm:hidden text-4xl text-black cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-12 text-gray-800 text-xl font-semibold tracking-wide">
          <li>
            <a
              href="#hero"
              className="hover:text-red-600 transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-red-600 transition-colors duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#story"
              className="hover:text-red-600 transition-colors duration-200"
            >
              Success Stories
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="hover:text-red-600 transition-colors duration-200"
            >
              Customer Reviews
            </a>
          </li>
        </ul>

        {/* Call Us Button */}
        <a
          href="tel:"
          className="hidden sm:block bg-red-600 hover:bg-red-700 rounded-xl py-3 px-8 text-white text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200"
        >
          Call Us
        </a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center py-5 space-y-5 text-gray-800 text-lg font-semibold border-t border-gray-200">
          <li>
            <a href="#home" onClick={toggleMenu} className="hover:text-red-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu} className="hover:text-red-600">
              About
            </a>
          </li>
          <li>
            <a href="#story" onClick={toggleMenu} className="hover:text-red-600">
              Success Stories
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              onClick={toggleMenu}
              className="hover:text-red-600"
            >
              Customer Reviews
            </a>
          </li>
          <li>
            <a
              href="tel:"
              onClick={toggleMenu}
              className="bg-red-600 hover:bg-red-700 rounded-xl py-2 px-6 text-white text-lg font-semibold"
            >
              Call Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
