import { useState } from "react";
import { motion } from "framer-motion";
import Highlights from './Highlights.jsx'
import RequestCallbackModal from "./RequestCallbackModal.jsx";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"; 
import CoursesDropdown from "./CoursesDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div>
            <img
              src={logo}
              alt="CODEfficient Logo"
              className="w-60 h-12 object-contain"
            />
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to="/about">About</Link>
            </li>
            {/* Use the Courses Dropdown component */}
            <CoursesDropdown />
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-gray-300 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Right side (CTA + Mobile toggle) */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <button
              onClick={() => setModalOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={modalOpen}
              className="hidden md:inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl hover:from-indigo-600 hover:to-purple-600"
            >
              Request Callback
            </button>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setIsOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-black/85 text-white px-6 py-4">
            <ul className="flex flex-col gap-3">
              <li className="py-2">
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </li>
              <li className="py-2">
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              </li>
              <li className="py-2">
                <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
              </li>
              <li className="py-2">
                <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
              </li>
              <li className="py-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              </li>
            </ul>

            <div className="mt-4">
              <button
                onClick={() => {
                  setModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl hover:from-indigo-600 hover:to-purple-600"
              >
                Request Callback
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* modal */}
      <RequestCallbackModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

