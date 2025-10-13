"use client";
import React from "react";
import Slider from "react-slick";
import { FiStar } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Saranya Francis",
      rating: 5,
      comment:
        "Tasted an authentic vadacurry after a long time. Highly recommended for a perfectly brewed cup of filter coffee and some happy conversations",
    },
    {
      name: "Kamlesh Pohekarr",
      rating: 5,
      comment:
        "Good food, with a great taste, clean place.",
    },
    {
      name: "Himanshi",
      rating: 4,
      comment:
        "Great spot with a wide variety of tasty food options, chill vibes, and comfy seating—perfect for hanging out with friends or a relaxed meal. Everything we tried was delicious, and the atmosphere made the whole experience even better!",
    },
    {
      name: "Venkat Siva",
      rating: 5,
      comment: "Food was served with care and was hygiene paniyaram with malli chutney was excellent..  special mention jesse taking charge was really polite and attentive delivered our order qick and served us.. as a food lover I suggest this place 8/10.. good job Agraharam team",
    },
    {
      name: "Mohammed Nihal",
      rating: 5,
      comment:
        "Excellent south Indian breakfast. Highly recommended to everyone to visit this spot❤",
    },
    {
      name: "Veer Khanna",
      rating: 5,
      comment:
        "Greate south indian and north indian food at reasonable prices. Would definitely recommend.",
    },
     {
      name: "Meti Arpitha",
      rating: 5,
      comment:
        "Overall breakfast was very good. My Favourite was Kesaribath and masala dosa. We tried Filter coffee as well.",
    },
     {
      name: "Amol Karne",
      rating: 5,
      comment:
        "Had breakfast at Agraharam Cafe in Bangalore and it was fantastic! Authentic South Indian flavors, especially the dosas, which were crisp, delicious, and truly satisfying. A must-visit for anyone who loves traditional South Indian breakfast.",
    }
  ];

  // Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,       
  autoplaySpeed: 3000,  
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};


  return (
    <section className="md:py-20 py-8 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-700 text-lg">
            Real reviews from our happy customers
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings} className="gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg p-6 shadow-lg h-full flex flex-col justify-between">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>

                {/* Name */}
                <p className="font-semibold text-[#2f6b35]">
                  - {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
