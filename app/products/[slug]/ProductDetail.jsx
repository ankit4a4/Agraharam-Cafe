"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

export default function ProductDetail({ product }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9f9f7] to-[#f0f0ec] py-24 font-sans"
    >
      <div className="max-w-6xl w-full mx-auto bg-white/70 backdrop-blur-xl rounded-4xl shadow-2xl overflow-hidden p-10 border border-green-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="relative w-full h-[250px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-green-200">
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl font-bold text-green-800 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-3xl font-semibold text-green-700 tracking-wide">
              {product.price}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              {product.description}
            </p>

            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-semibold text-green-800 mb-3">
                Ingredients
              </h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {product.ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div>
                <h2 className="text-2xl font-semibold text-green-800 mb-3">
                  Specifications
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Call Now Button */}
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 mt-6 px-8 py-3 text-lg font-semibold text-white bg-green-800 rounded-full shadow-lg hover:bg-green-700 hover:shadow-xl transition-all duration-200 w-fit"
            >
              <FaPhoneAlt className="text-white" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
