"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProductDetail({ product }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f9f9f7] to-[#f0f0ec] py-24 font-sans"
    >
      <div className="max-w-6xl w-full mx-auto bg-white/60 backdrop-blur-xl rounded-4xl shadow-xl overflow-hidden p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="relative w-full h-[250px] sm:h-[480px] rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-5xl font-bold text-[#2f6b35] leading-tight">
              {product.name}
            </h1>

            <p className="text-lg text-gray-800 leading-relaxed">{product.description}</p>

            {/* Ingredients */}
            <div>
              <h2 className="text-2xl font-semibold text-[#2f6b35] mb-3">
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
                <h2 className="text-2xl font-semibold text-[#2f6b35] mb-3">
                  Specifications
                </h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}
           
          </div>
        </div>
      </div>
    </motion.section>
  );
}
