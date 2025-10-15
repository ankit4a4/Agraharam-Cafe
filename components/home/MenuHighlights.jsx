import React from 'react';
import {
  GiChopsticks,
  GiGlassCelebration,
 GiFrenchFries,
 GiRolledCloth,
 GiHotMeal,
 GiFlatBread

} from 'react-icons/gi';
import { FiCoffee } from 'react-icons/fi';
import { FaUtensils } from 'react-icons/fa';
import { LuDonut } from "react-icons/lu";
import { Torus } from 'lucide-react';


const MenuHighlights = () => {
const menuCategories = [
  { 
    name: 'North Indian', 
    icon: GiHotMeal, 
    description: 'Delicious North Indian meals with roti, sabji, and curries' 
  },
  { name: 'Vada', icon: LuDonut, description: 'Crispy, golden fried delights' },
  { name: 'Dosa', icon: GiRolledCloth, description: 'Crispy South Indian crepes with various fillings' },
  { name: 'Tea & Coffee', icon: FiCoffee, description: 'Hearty tea and coffee beverages' },
  { name: 'Lunch & Dinner', icon: FaUtensils, description: 'Hearty meals and breads' },
  { name: 'Chinese', icon: GiChopsticks, description: 'Indo-Chinese fusion favorites' },
  { name: 'Snacks', icon: GiFrenchFries, description: 'Quick bites and evening treats' },
  { name: 'Pure Juices', icon: GiGlassCelebration, description: 'Fresh juices, shakes, and more' },
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
        {/* Heading */}
        <div className="text-center mb-5 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Menu Highlights</h2>
          <p className="text-amber-100 text-lg">
            Discover our wide range of pure vegetarian delicacies
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-[#306c36]/10 backdrop-blur-md rounded-xl p-6 border border-[#306c36]/20 hover:border-[#306c36]-300/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
                }}
              >
                {/* Icon */}
                <div className="text-[#2f6b35] text-4xl mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <IconComponent />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>

                {/* Description */}
                <p className="text-amber-100/90">{category.description}</p>

                {/* Hover underline */}
                <div className="w-0 group-hover:w-16 h-0.5 bg-[#2f6b35] mx-auto mt-4 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MenuHighlights;
