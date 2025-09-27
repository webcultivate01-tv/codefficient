import React from "react";
import logo from "../../assets/logo.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 pl-5 pr-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {/* Company Info */}
          <div className="space-y-4 mr-10">
            <div className="flex items-center">
               <img 
                src={logo}   // 👉 put your logo path here
                alt="CODEfficient Logo"
                className="h-18 w-21 object-contain" 
              />
            </div>
            <p className="text-gray-400 ml-5">Building innovative solutions for the modern world.</p>
            <div className="flex space-x-4 ml-5 ">
              {/* Social Icons */}
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              {/* Instagram */}
<a href="https://www.instagram.com/codefficient_/" className="text-gray-400 hover:text-white transition">
  <span className="sr-only">Instagram</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
      clipRule="evenodd"
    />
  </svg>
</a>

{/* LinkedIn */}
<a href="#" className="text-gray-400 hover:text-white transition">
  <span className="sr-only">LinkedIn</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
      clipRule="evenodd"
    />
  </svg>
</a>
{/* WhatsApp Messenger */}
<a 
  href="https://wa.me/911234567890"  // Replace with your number, with country code, no + or dashes
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition"
>
  <span className="sr-only">WhatsApp</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path
      d="M20.52 3.48a11.95 11.95 0 00-16.95 16.95l-1.2 4.37 4.5-1.18a11.95 11.95 0 0013.65-20.14zm-8.52 17.02c-3.28 0-6.21-1.59-7.97-4.06l-.57-.83-2.69.71.71-2.63-.62-.88a9.954 9.954 0 0116.2-1.24 9.954 9.954 0 01-4.26 7.93 9.957 9.957 0 01-1.8 1.19zm5.05-7.88c-.28-.14-1.64-.81-1.89-.9s-.43-.14-.61.14-.7.9-.86 1.08-.32.21-.59.07a8.47 8.47 0 01-2.49-1.53 9.33 9.33 0 01-1.74-2.16c-.18-.32 0-.49.13-.63.14-.14.32-.32.48-.48.16-.16.21-.28.32-.46.11-.18.05-.33-.02-.46-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47-.16 0-.35-.02-.54-.02s-.46.07-.7.33c-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.73c.14.18 1.85 2.83 4.49 3.97a6.84 6.84 0 002.87.46c.91-.13 1.64-.37 1.88-.58.24-.21.76-.59.87-1.16.11-.56.11-1.04.08-1.16-.03-.12-.28-.18-.57-.32z"
    />
  </svg>
</a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left  mr-10">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">Our Popular Courses</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Java Full Stack Developer Course (with Placement)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Online MERN Stack Course (with Placement)</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">MEAN Stack Developer Training</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Full Stack Course for Beginners Online</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-center md:text-left mr-10">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>Sahakar Nagar, Pune-9</p>
              <p className="mt-2">
                Email: <a href="admin@codefficient.in" className="hover:text-white transition">admin@codefficient.in</a>
              </p>
              <p>
                Phone: <a href="tel:+9309579387" className="hover:text-white transition">9309579387 / 9167034573</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">© 2025 Company. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
