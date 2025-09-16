"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import img from "../../public/homepageImages/heroSlider.jpg"

const HeroHome = () => {
    // Background Slideshow
    const images = [
        img.src,
        "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative  md:py-32 py-20  flex items-center justify-center overflow-hidden">
            {/* Background Slideshow */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${index === currentImage
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-110"
                        }`}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>

            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-4 border-[#c9a66b] opacity-40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 border-4 border-[#c9a66b] opacity-30 rounded-full animate-ping"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mt-10">
                {/* Tagline */}
                <div className="mb-6 animate-fade-in">
                    <span className="text-[#c9a66b] font-semibold tracking-widest text-[10px] sm:text-sm md:text-base uppercase border-2 border-[#c9a66b] px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/30 backdrop-blur-md shadow-lg">
                        Since 2008 • Authentic South Indian Cuisine
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl animate-slide-up">
                    <span className="block text-white font-serif">Agraharam</span>
                    <span className="block bg-gradient-to-r from-[#c9a66b] via-[#e0c38c] to-[#f5d9a1] pb-2 bg-clip-text text-transparent mt-1 sm:mt-2 font-serif italic">
                        Café
                    </span>
                </h1>

                {/* Separator */}

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-white/90 font-light max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
                    Experience the authentic flavors of South India in a traditional setting that transports you to the heart of Tamil Nadu
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-3 animate-fade-in delay-500">
                    <button className="bg-[rgb(201,166,107)] hover:bg-[#d8b87c] text-black px-10 rounded-md py-3">
                        <span className="relative z-10">Explore Menu</span>
                    </button>

                    <Link
                        href="/contact"
                        className="bg-transparent border-2 border-white px-10 rounded-md py-3"
                    >
                        <span className="relative z-10">Reserve Table</span>
                    </Link>
                </div>
            </div>



            {/* Animations */}
            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        @keyframes slide-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
      `}</style>
        </section>
    );
};

export default HeroHome;
