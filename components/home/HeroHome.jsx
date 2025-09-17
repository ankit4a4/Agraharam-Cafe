"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../../public/homepageImages/heroSlider.jpg"

const HeroHome = () => {
    const images = [
        img.src,
        "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
        "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false, mirror: true });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative md:py-32 py-20 flex items-center justify-center overflow-hidden">
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
            <div className="absolute top-10 left-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-4 border-[#2f6b35] opacity-40 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 border-4 border-[#2f6b35] opacity-30 rounded-full animate-ping"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 mt-10">
                {/* Tagline */}
                <div data-aos="fade-down" className="mb-6">
                    <span className="text-[#fff] font-semibold tracking-widest text-[10px] sm:text-sm md:text-base uppercase border-2 border-[#2f6b35] px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/30 backdrop-blur-md shadow-lg">
                        Since 2008 • Authentic South Indian Cuisine
                    </span>
                </div>

                {/* Main Heading */}
                <h1 data-aos="fade-up" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight drop-shadow-2xl">
                    <span className="block text-white font-serif">Agraharam</span>
                    <span className="block  pb-2 text-[#38ce47]  mt-1 sm:mt-2 font-serif italic">
                        Café
                    </span>
                </h1>

                {/* Subheading */}
                <p data-aos="fade-up" data-aos-delay="300" className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                    Experience the authentic flavors of South India in a traditional setting that transports you to the heart of Tamil Nadu
                </p>

                {/* CTA Buttons */}
                <div data-aos="fade-up" data-aos-delay="500" className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-3">
                    <button className="bg-[#2f6b35] hover:bg-[#122e15] text-black px-10 rounded-md py-3">
                        <span className="relative z-10 text-white">Explore Menu</span>
                    </button>

                    <Link
                        href="/contact"
                        className="bg-transparent border-2 border-white px-10 rounded-md py-3"
                    >
                        <span className="relative z-10">Reserve Table</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroHome;
