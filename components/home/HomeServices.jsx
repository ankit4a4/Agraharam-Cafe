import React from "react";
import { FiShoppingBag, FiHome } from "react-icons/fi";
import { FaUtensils, FaCoffee, FaParking, FaWifi } from "react-icons/fa";

const HomeServices = () => {
  const services = [
    {
      name: "Dine-In",
      icon: FaUtensils,
      description:
        "Enjoy our authentic dishes in our beautifully designed space",
    },
    {
      name: "Takeaway",
      icon: FiShoppingBag,
      description:
        "Take the flavors of South India home with our convenient packaging",
    },
    {
      name: "Catering",
      icon: FaCoffee,
      description:
        "Make your events special with our customized catering services",
    },
    {
      name: "Free Parking",
      icon: FaParking,
      description: "Ample parking space for your convenience",
    },
    {
      name: "Free WiFi",
      icon: FaWifi,
      description: "Stay connected while enjoying your meal",
    },
    {
      name: "Comfortable Seating",
      icon: FiHome,
      description: "Relax in our thoughtfully arranged seating areas",
    },
  ];

  return (
    <section className="md:py-24 py-8 relative overflow-hidden bg-gradient-to-b from-[#f8f8f5] via-white to-[#f8f8f5]">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#306c36]/20 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2f6b35]/20 rounded-full blur-3xl translate-x-32 translate-y-32"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-40 h-40 border-2 border-[#306c36] rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#2f6b35] rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-[#306c36] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-[#306c36] font-semibold uppercase tracking-widest text-sm border border-[#306c36] px-5 py-2 rounded-full bg-[#306c36]/5 shadow-sm inline-flex items-center">
            <span className="w-2 h-2 bg-[#306c36] rounded-full mr-2"></span>
            What We Offer
          </p>
          <br />
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1b3c20] mt-6 mb-4 relative inline-block">
            Our <span className="text-[#2f6b35]">Services</span>
          </h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto leading-relaxed mt-6">
            Enjoy authentic South Indian delicacies with comfort, convenience,
            and care.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white hover:border-[#2f6b35]/30 hover:-translate-y-2 overflow-hidden"
              >
                {/* Background pattern */}
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-[#306c36]/5 group-hover:bg-[#306c36]/10 transition-colors duration-500"></div>

                {/* Hover effect border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#2f6b35]/20 transition-all duration-500"></div>

                {/* Icon */}
                <div className="relative z-10 w-20 h-20 mx-auto flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#306c36] to-[#1b3c20] text-white text-3xl mb-6 group-hover:from-[#2f6b35] group-hover:to-[#5ada67] group-hover:scale-105 transition-all duration-500 shadow-md">
                  <IconComponent />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-[#306c36] group-hover:text-[#2f6b35] transition-colors duration-300 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-[#555] text-sm leading-relaxed group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Decorative corners */}
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#306c36]/20 rounded-bl-2xl transition-colors duration-300 group-hover:border-[#2f6b35]/30"></div>
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#306c36]/20 rounded-tl-2xl transition-colors duration-300 group-hover:border-[#2f6b35]/30"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServices;
