import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';
import { GiCoffeeCup } from 'react-icons/gi';

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cafe Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GiCoffeeCup className="text-amber-300 text-2xl" />
              <span className="text-xl font-bold">Agraharam Cafe</span>
            </div>
            <p className="text-amber-100 mb-4">
              Your go-to destination for pure vegetarian delights! Experience the best of South and North Indian flavors.
            </p>
            <div className="flex space-x-4">
              <FaFacebook className="text-amber-300 hover:text-white cursor-pointer text-xl transition-colors duration-200" />
              <FaInstagram className="text-amber-300 hover:text-white cursor-pointer text-xl transition-colors duration-200" />
              <FaTwitter className="text-amber-300 hover:text-white cursor-pointer text-xl transition-colors duration-200" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-300">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FiMapPin className="text-amber-300 mt-1 flex-shrink-0" />
                <span className="text-amber-100">
                  2GM3+MJ9, Andrahalli Main Rd, Gopal Nagar, Venugopal Nagar, Peenya, Bengaluru, Karnataka 560058
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-amber-300" />
                <span className="text-amber-100">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-amber-300" />
                <span className="text-amber-100">info@agraharamcafe.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-amber-300">Opening Hours</h3>
            <div className="space-y-2 text-amber-100">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>7:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p className="text-amber-200">
            © 2024 Agraharam Cafe. All rights reserved. Made with ❤️ for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}