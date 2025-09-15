import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Clock, Users, Heart, Award } from 'lucide-react';

const HomeAboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#f9f9f7] to-[#f0f0ec] relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#306c36]/20 rounded-full filter blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a66b]/20 rounded-full filter blur-3xl translate-x-32 translate-y-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`relative order-1 lg:order-2 ${
              isVisible ? 'animate-fade-in-right' : 'opacity-0'
            }`}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="South Indian Food"
                className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Frame */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-[#306c36] rounded-tl-2xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-[#c9a66b] rounded-br-2xl"></div>

            {/* Floating Stat */}
            <div className="absolute -bottom-4 left-8 bg-white rounded-xl shadow-lg p-4 flex items-center gap-2">
              <div className="bg-[#306c36]/10 p-2 rounded-full">
                <Award className="w-5 h-5 text-[#306c36]" />
              </div>
              <div>
                <p className="font-bold text-[#306c36]">15+</p>
                <p className="text-xs text-[#c9a66b]">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`order-2 lg:order-1 ${
              isVisible ? 'animate-fade-in-left' : 'opacity-0'
            }`}
          >
            <div className="mb-4">
              <span className="text-[#306c36] font-semibold tracking-wider uppercase text-sm border border-[#306c36] px-4 py-2 rounded-full bg-[#306c36]/5">
                Our Story
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#306c36] mb-6 leading-tight">
              Crafting Authentic <span className="text-[#c9a66b]">South Indian</span> Flavors Since 2008
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
                  <p className="text-sm text-[#c9a66b]">Prepared to order</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#c9a66b]/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-[#c9a66b]" />
                </div>
                <div>
                  <p className="font-semibold text-[#306c36]">Family Recipe</p>
                  <p className="text-sm text-[#c9a66b]">Generations of taste</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#306c36]/10 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-[#306c36]" />
                </div>
                <div>
                  <p className="font-semibold text-[#306c36]">Made with Love</p>
                  <p className="text-sm text-[#c9a66b]">Passionate chefs</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-[#c9a66b]/10 p-3 rounded-full">
                  <Award className="w-6 h-6 text-[#c9a66b]" />
                </div>
                <div>
                  <p className="font-semibold text-[#306c36]">Award Winning</p>
                  <p className="text-sm text-[#c9a66b]">Best in town</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#306c36] hover:bg-[#245428] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 group">
                Our Story
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="bg-white border-2 border-[#c9a66b] text-[#c9a66b] hover:bg-[#fdfaf6] px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                View Menu
              </button>
            </div>
          </div>
        </div>

        {/* Signature */}
        <div
          className={`mt-16 text-center ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <div className="inline-block border-t-2 border-[#c9a66b]/50 w-24 mb-4"></div>
          <p className="text-[#306c36] font-serif text-xl italic">
            "Traditional taste, modern presentation"
          </p>
          <p className="text-[#c9a66b] mt-2">- Chef Rajesh, Founder</p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HomeAboutSection;
