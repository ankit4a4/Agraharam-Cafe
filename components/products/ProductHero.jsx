import React from "react";
import img from "../../public/homepageImages/banner3.jpg";
import { motion } from "framer-motion";

const ProductHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${img.src}')` }}
      ></div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
        <p className="text-xl md:text-2xl mb-6">
          Discover our range of high-quality products crafted just for you
        </p>
      </motion.div>
    </section>
  );
};

export default ProductHero;
