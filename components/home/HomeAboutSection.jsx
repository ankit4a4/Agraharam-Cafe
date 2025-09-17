import React, { useEffect, useRef } from 'react';
import { ChevronRight, Clock, Users, Heart, Award } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from "../../public/homepageImages/aboutsectionimage.jpg";

const HomeAboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false  , mirror: true});
  }, []);

  return (
    <section
      ref={sectionRef}
      className="md:py-24 py-8 bg-gradient-to-br from-[#f9f9f7] to-[#f0f0ec] relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 hidden md:flex left-0 w-72 h-72 bg-[#306c36]/20 rounded-full filter blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2f6b35]/20 rounded-full filter blur-3xl translate-x-32 translate-y-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div data-aos="fade-up" className="relative order-1 lg:order-2">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={img.src}
                alt="South Indian Food"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Frame */}
            <div className="absolute hidden md:flex -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#306c36] rounded-tl-2xl"></div>
            <div className="absolute hidden md:flex -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-[#2f6b35] rounded-br-2xl"></div>
          </div>

          {/* Content */}
          <div data-aos="fade-up" className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="text-[#306c36] font-semibold tracking-wider uppercase text-sm border border-[#306c36] px-4 py-2 rounded-full bg-[#306c36]/5">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#000] mb-6 leading-tight">
              Crafting Authentic <span className="text-[#2f6b35]">South Indian</span> Flavors Since 2008
            </h2>

            <p className="text-[#333] text-lg leading-relaxed mb-8">
              Welcome to Agraharam Cafe, your go-to destination for pure vegetarian delights!
              From crispy dosas and fluffy idlis to rich paneer curries and buttery naans,
              we bring you the best of South and North Indian flavors.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-[#306c36]/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-[#306c36]" />
                </div>
                <div>
                  <p className="font-semibold text-[#306c36]">Fresh Daily</p>
                  <p className="text-sm text-[#000]">Prepared to order</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#2f6b35]/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-[#2f6b35]" />
                </div>
                <div>
                  <p className="font-semibold text-[#306c36]">Family Recipe</p>
                  <p className="text-sm text-[#000]">Generations of taste</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#306c36]/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-[#306c36]" />
                </div>
                <div>
                  <p className="font-semibold text-[#306c36]">Made with Love</p>
                  <p className="text-sm text-[#000]">Passionate chefs</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#2f6b35]/10 p-3 rounded-full">
                  <Award className="w-6 h-6 text-[#2f6b35]" />
                </div>
                <div>
                  <p className="font-semibold text-[#306c36]">Award Winning</p>
                  <p className="text-sm text-[#000]">Best in town</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-row sm:flex-row gap-4">
              <button className="bg-[#306c36] hover:bg-[#245428] text-white px-8 py-4 rounded-full font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group">
                Our Story
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div data-aos="fade-up" className="mt-16 text-center">
          <div className="inline-block border-t-2 border-[#2f6b35]/50 w-24 mb-4"></div>
          <p className="text-[#306c36] font-serif text-xl italic">
            "Traditional taste, modern presentation"
          </p>
          <p className="text-[#2f6b35] mt-2">- Chef Rajesh, Founder</p>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
