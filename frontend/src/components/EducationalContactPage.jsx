import { motion } from "framer-motion";

export default function EducationalContactPage() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Enquire About Our <span className="text-orange-600">Courses</span>
        </h1>
        <div className="w-20 h-1 bg-orange-600 mx-auto mb-6"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're here to help you begin your creative journey. Fill out the form below and our team will get back to you shortly.
        </p>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-xl shadow-2xl overflow-hidden md:flex"
      >
        {/* Left Side */}
        <div className="md:w-1/3 bg-gradient-to-br from-orange-600 to-yellow-600 p-10 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Enquire With Us?</h2>
            <ul className="space-y-4">
              {[
                "Expert guidance from industry professionals",
                "Personalized course recommendations",
                "Flexible learning options",
                "Quick response to all enquiries",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="h-6 w-6 text-red-200 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Need immediate assistance?</h3>
            <p className="text-red-100 mb-2">Call us at +91 9309579387 /9167034573</p>
            <p className="text-sm text-red-200">Our team is available 10AM - 6PM, Monday to Saturday</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-2/3 p-10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                <input
                  type="tel"
                  name="mobileNumber"
                  placeholder="+91 9876543210"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course Interested In</label>
                <select
                  name="courses"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-black-700 focus:border-black-500 bg-white"
                  required
                >
                  <option value="">Select a Course</option>
                  <option value="Graphic Design"> Java Full Stack</option>
                  <option value="Web Development">Online MERN Stack </option>
                  <option value="Animation">MEAN Stack Developer Training</option>
                  <option value="UI/UX Design">Full Stack Course for Beginners Online</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your interests and goals..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-orange-600 to-yellow-600  text-white font-medium rounded-lg shadow-sm hover:bg-gray-900 transition duration-300"
              >
                Submit Enquiry
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
