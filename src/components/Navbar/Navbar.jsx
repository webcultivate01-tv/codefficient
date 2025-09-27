import { useState } from "react";
import { motion } from "framer-motion";
import Highlights from "./Highlights.jsx";
import RequestCallbackModal from "./RequestCallbackModal.jsx";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import CoursesDropdown from "./CoursesDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  // helper function for active class
  const getLinkClass = (path) =>
    location.pathname === path
      ? "text-orange-500 font-semibold"
      : "hover:text-gray-300";

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
            <li>
              <Link to="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={getLinkClass("/about")}>
                About
              </Link>
            </li>
            {/* Courses Dropdown stays same */}
            <CoursesDropdown />
            <li>
              <Link to="/blog" className={getLinkClass("/blog")}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className={getLinkClass("/contact")}>
                Contact
              </Link>
            </li>
          </ul>

          {/* Right side (CTA + Mobile toggle) */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <button
              onClick={() => setModalOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={modalOpen}
              className="hidden md:inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:shadow-lg focus:ring-4 focus:ring-orange-300 text-white font-semibold shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl"
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
                <Link
                  to="/"
                  className={getLinkClass("/")}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/about"
                  className={getLinkClass("/about")}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/courses"
                  className={getLinkClass("/courses")}
                  onClick={() => setIsOpen(false)}
                >
                  Courses
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/blog"
                  className={getLinkClass("/blog")}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/contact"
                  className={getLinkClass("/contact")}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mt-4">
              <button
                onClick={() => {
                  setModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-3 rounded-full bg-gradient-to-r from-orange-600 to-yellow-600 hover:shadow-lg focus:ring-4 focus:ring-orange-300 text-white font-semibold shadow-lg transform transition-all duration-200 hover:scale-105 hover:shadow-xl "
              >
                Request Callback
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* modal */}
      <RequestCallbackModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
