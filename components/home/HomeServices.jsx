import React from 'react';
import { FiShoppingBag, FiHome } from 'react-icons/fi';
import { FaUtensils, FaCoffee, FaParking, FaWifi } from 'react-icons/fa';

const HomeServices = () => {
  const services = [
    { name: 'Dine-In', icon: FaUtensils },
    { name: 'Takeaway', icon: FiShoppingBag },
    { name: 'Catering', icon: FaCoffee },
    { name: 'Free Parking', icon: FaParking },
    { name: 'Free WiFi', icon: FaWifi },
    { name: 'Comfortable Seating', icon: FiHome },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#306c36]/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a66b]/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[#306c36] font-semibold uppercase tracking-widest text-sm border border-[#306c36] px-4 py-1 rounded-full bg-[#306c36]/5">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#306c36] mt-4 mb-4">
            Our <span className="text-[#c9a66b]">Services</span>
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto leading-relaxed">
            Enjoy authentic South Indian delicacies with comfort, convenience, and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-transparent hover:border-[#c9a66b]/60"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#306c36]/10 text-[#306c36] text-3xl mb-4 group-hover:bg-[#c9a66b]/10 group-hover:text-[#c9a66b] transition-colors duration-300">
                  <IconComponent />
                </div>
                <h3 className="text-base font-semibold text-[#306c36] group-hover:text-[#c9a66b] transition-colors">
                  {service.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
