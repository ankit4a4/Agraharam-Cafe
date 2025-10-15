"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import products from "../../app/data/products";

export default function ProductSection() {
  const router = useRouter();

  return (
    <section className="md:py-24 py-8 relative overflow-hidden bg-gradient-to-br from-[#f9f9f7] to-[#f0f0ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white/30 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <button
                onClick={() => router.push(`/products/${product.slug}`)}
                className="w-full text-left"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-[#2f6b35] mb-2">
                    {product.name}
                  </h3>
                  {/* <p className="text-gray-800 font-medium">{product.price}</p> */}
                  <div className="w-0 group-hover:w-16 h-1 bg-[#2f6b35] mx-auto mt-3 transition-all duration-300"></div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
