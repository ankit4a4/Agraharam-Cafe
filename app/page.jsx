'use client';

import {
  FiStar,
  FiMapPin,
  FiClock
} from 'react-icons/fi';

import { FaCar } from 'react-icons/fa';
import HeroHome from "../components/home/HeroHome"
import HomeAboutSection from "../components/home/HomeAboutSection"
import MenuHighlights from "../components/home/MenuHighlights"
import HomeServices from "../components/home/HomeServices"

export default function Home() {

  

  const testimonials = [
    {
      name: 'Priya Sharma',
      rating: 5,
      comment: 'Amazing food quality! The dosas are crispy and the sambar is perfect. Highly recommended!'
    },
    {
      name: 'Rajesh Kumar',
      rating: 5,
      comment: 'Best vegetarian food in the area. The staff is friendly and the ambiance is great for families.'
    },
    {
      name: 'Meera Patel',
      rating: 4,
      comment: 'Love the variety of South and North Indian dishes. The paneer curry is my favorite!'
    }
  ];

  return (
    <div >
      <HeroHome />
      <HomeAboutSection />
      <MenuHighlights />
      <HomeServices />

    

      {/* Gallery Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Our Gallery</h2>
            <p className="text-gray-700 text-lg">A glimpse into our cafe and delicious offerings</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&w=400',
              'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=400'
            ].map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-700 text-lg">Real reviews from our happy customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-semibold text-amber-800">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-800 mb-4">Find Us</h2>
            <p className="text-gray-700 text-lg">Visit us at our convenient location</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-amber-50 rounded-lg p-8 shadow-lg">
                <div className="flex items-start space-x-4 mb-6">
                  <FiMapPin className="text-amber-600 text-2xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-amber-800 mb-2">Address</h3>
                    <p className="text-gray-700">
                      2GM3+MJ9, Andrahalli Main Rd, Gopal Nagar, Venugopal Nagar, Peenya, Bengaluru, Karnataka 560058
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FaCar className="text-green-600" />
                    <span className="text-gray-700">Free Parking Available</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiClock className="text-amber-600" />
                    <span className="text-gray-700">Open 7 Days a Week</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.842123456789!2d77.5385!3d13.0352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI0JzQwLjciTiA3N8KwMzInMTguNyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Agraharam Cafe Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}