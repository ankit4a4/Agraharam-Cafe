import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  GiHotMeal,
  GiChopsticks,
  GiTacos,
  GiGlassCelebration,
  GiIndianPalace
} from 'react-icons/gi';
import { FiCoffee } from 'react-icons/fi';
import { FaUtensils } from 'react-icons/fa';

const MenuHighlights = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const menuCategories = [
    { name: 'Idly Items', icon: GiIndianPalace, description: 'Soft, fluffy steamed rice cakes' },
    { name: 'Vada Items', icon: GiTacos, description: 'Crispy, golden fried delights' },
    { name: 'Dosa Items', icon: GiHotMeal, description: 'Crispy crepes with various fillings' },
    { name: 'Rice & Mini Tiffin', icon: FiCoffee, description: 'Hearty rice dishes and light meals' },
    { name: 'Roti & Lunch', icon: FaUtensils, description: 'North Indian breads and meals' },
    { name: 'Chinese', icon: GiChopsticks, description: 'Indo-Chinese fusion favorites' },
    { name: 'Snacks', icon: GiTacos, description: 'Quick bites and evening treats' },
    { name: 'Beverages', icon: GiGlassCelebration, description: 'Fresh juices, shakes, and more' },
  ];

  return (
    <section
      className="relative py-8 md:py-20 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Menu Highlights</h2>
          <p className="text-amber-100 text-lg">
            Discover our wide range of pure vegetarian delicacies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-[#306c36]/10 backdrop-blur-md rounded-xl p-6 border border-[#306c36]/20 hover:border-[#306c36]-300/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                }}
              >
                <div className="text-amber-300 text-4xl mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-amber-100/90">{category.description}</p>

                {/* Hover effect line */}
                <div className="w-0 group-hover:w-16 h-0.5 bg-amber-400 mx-auto mt-4 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MenuHighlights;
