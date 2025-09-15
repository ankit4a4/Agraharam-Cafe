import React from 'react'
import {
    GiHotMeal,
    GiChopsticks,
    GiTacos,
    GiGlassCelebration,
    GiIndianPalace
} from 'react-icons/gi';
import {
    FiCoffee
} from 'react-icons/fi';
import { FaUtensils } from 'react-icons/fa';

const MenuHighlights = () => {
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
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1920)",
                backgroundPosition: "center center",
                backgroundSize: "100% 100%",
                objectFit: "cover",
                backgroundAttachment: "fixed"

            }}
            className="relative py-20 overflow-hidden">
            {/* Fixed Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: `url('')`,
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Dark overlay for better readability */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Our Menu Highlights</h2>
                    <p className="text-amber-100 text-lg">Discover our wide range of pure vegetarian delicacies</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={index}
                                className="bg-[#306c36]/10 backdrop-blur-md rounded-xl p-6 border border-[#306c36]/20 hover:border-[#306c36]-300/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
                                style={{
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
                                }}
                            >
                                <div className="text-amber-300 text-4xl mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                                <p className="text-amber-100/90">{category.description}</p>

                                {/* Hover effect line */}
                                <div className="w-0 group-hover:w-16 h-0.5 bg-amber-400 mx-auto mt-4 transition-all duration-300"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-400/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber-400/10 rounded-full blur-xl"></div>
            </div>

            {/* Custom styles for glass effect */}
            <style jsx>{`
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        @supports not (backdrop-filter: blur(10px)) {
          .glass-effect {
            background: rgba(255, 255, 255, 0.85);
          }
        }
      `}</style>
        </section>
    );
}

export default MenuHighlights;