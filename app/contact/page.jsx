'use client';

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaClock, FaCar } from 'react-icons/fa';
import { FiMapPin, FiSend } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/homepageImages/banner2.jpg')` }}></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl">We'd love to hear from you. Get in touch!</p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-8 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FiMapPin className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      2GM3+MJ9, Andrahalli Main Rd<br />
                      Gopal Nagar, Venugopal Nagar<br />
                      Peenya, Bengaluru, Karnataka 560058
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaPhone className="text-green-600 text-2xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Phone</h3>
                    <p className="text-gray-700">+91 98765 43210</p>
                    <p className="text-gray-700">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <FaEnvelope className="text-green-600 text-2xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Email</h3>
                    <p className="text-gray-700">info@agraharamcafe.com</p>
                    <p className="text-gray-700">orders@agraharamcafe.com</p>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-8 bg-green-100 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FaClock className="text-green-600 text-2xl" />
                  <h3 className="text-2xl font-bold text-green-800">Opening Hours</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-gray-600">7:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-600">7:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-600">8:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <div className="mt-6 bg-green-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Facilities</h3>
                <div className="flex items-center space-x-3">
                  <FaCar className="text-green-600 text-xl" />
                  <span className="text-gray-700">Free Parking Available</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-green-50 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-green-800 mb-6">Send us a Message</h2>

              {submitMessage && (
                <div className="mb-6 bg-green-200 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-800 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-800 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-800 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-20 bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Find Our Location</h2>
            <p className="text-gray-700 text-lg">Easy to locate with ample parking space</p>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl h-96">
           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.3141428020667!2d77.50151147367264!3d13.03371091351631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d005248456f%3A0x95d5a8d375ab3ddf!2sAgraharam%20Cafe!5e1!3m2!1sen!2sus!4v1758526001018!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Agraharam Cafe Location "
            ></iframe>
          </div>

          <div className="mt-8 text-center">
           
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <FaCar className="text-green-600" />
                <span>Free Parking</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMapPin className="text-green-600" />
                <span>Easy to Find</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 md:py-16 bg-green-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Delicious Food?</h2>
          <p className="text-xl mb-8">Visit us today or place an order for delivery!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Call Now: +91 98765 43210
            </a>
          
          </div>
        </div>
      </section>
    </div>
  );
}
