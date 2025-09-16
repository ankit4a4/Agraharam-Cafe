import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false  , mirror: true});
  }, []);

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
    <section className="md:py-20 py-8 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-700 text-lg">Real reviews from our happy customers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-lg p-6 shadow-lg"
            >
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
  );
};

export default Testimonials;
