import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import logo from "../public/footerLogo.png"

export default function Footer() {
  return (
    <footer className="bg-[#2e6d37] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cafe Info */}
          <div>
            <div>
              <img src={logo.src} alt="Company Logo" className="w-32 mb-4" />
              <p className=" text-gray-300">
                Agraharam Cafe – Taste that feels like home. Enjoy authentic
                flavors with a modern twist.
              </p>
            </div>
            <p className="text-gray-300 mb-4">
              Your go-to destination for pure vegetarian delights! Experience the best of South and North Indian flavors.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-white mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  2GM3+MJ9, Andrahalli Main Rd, Gopal Nagar, Venugopal Nagar, Peenya, Bengaluru, Karnataka 560058
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-[#fff]" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-[#fff]" />
                <span className="text-gray-300">info@agraharamcafe.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#fff]">Opening Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Sunday</span>
                <span>6:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-8 pt-8 text-center">
          <p className="text-white">
            © 2025 Agraharam Cafe. All rights reserved. | Powered by <a href="https://rankmantra.com/" target='_blank'>Rankmantra</a>
          </p>
        </div>
      </div>
    </footer>
  );
}