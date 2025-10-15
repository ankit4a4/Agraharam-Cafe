"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Masala Dosa",
    price: "₹180",
    image: "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    price: "₹240",
    image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    name: "South Indian Thali",
    price: "₹320",
    image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    name: "Filter Coffee",
    price: "₹90",
    image: "https://images.pexels.com/photos/128234/pexels-photo-128234.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    name: "Medu Vada",
    price: "₹140",
    image: "https://images.pexels.com/photos/15568063/pexels-photo-15568063.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    name: "Fresh Fruit Juice",
    price: "₹120",
    image: "https://images.pexels.com/photos/4968553/pexels-photo-4968553.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function ProductSection() {
  return (
    <section className="md:py-24 py-8 relative overflow-hidden bg-gradient-to-br from-[#f9f9f7] to-[#f0f0ec]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white/30 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <Link href={`/products/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-3xl"
                />
                <div className="p-8 text-center">
                  <h3 className="text-xl font-semibold text-[#2f6b35] mb-2">{product.name}</h3>
                  {/* <p className="text-gray-800 font-medium">{product.price}</p> */}
                  <div className="w-0 group-hover:w-16 h-1 bg-[#2f6b35] mx-auto mt-3 transition-all duration-300"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
