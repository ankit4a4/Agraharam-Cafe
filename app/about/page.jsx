import { GiIndianPalace, GiHotMeal, GiLeafSwirl } from 'react-icons/gi';
import { FaHeart, FaUsers, FaLeaf } from 'react-icons/fa';
import img from "../../public/homepageImages/banner3.jpg"
import img2 from "../../public/homepageImages/aboutsectionimage.jpg";

export default function About() {
  const values = [
    {
      icon: FaLeaf,
      title: 'Pure Vegetarian',
      description: 'We are committed to serving only the finest vegetarian cuisine, respecting all dietary preferences and beliefs.'
    },
    {
      icon: FaHeart,
      title: 'Made with Love',
      description: 'Every dish is prepared with passion and care, using traditional recipes passed down through generations.'
    },
    {
      icon: FaUsers,
      title: 'Community Focused',
      description: 'We believe in bringing people together through food, creating a warm and welcoming environment for all.'
    },
    {
      icon: GiLeafSwirl,
      title: 'Fresh Ingredients',
      description: 'We source the freshest ingredients daily to ensure every meal is nutritious and flavorful.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${img.src}')`
          }}
        ></div>

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl">A journey of flavors, tradition, and pure vegetarian excellence</p>
        </div>
      </section>

      {/* Main Story */}
      <section className="md:py-20 py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">Welcome to Agraharam Cafe</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Nestled in the heart of Bengaluru, Agraharam Cafe was born from a simple yet profound vision:
                to create a space where authentic vegetarian cuisine meets modern dining comfort. Our name
                "Agraharam" pays homage to the traditional Brahmin quarters of South India, where pure
                vegetarian cooking has been an art form for centuries.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Since our inception, we have been dedicated to preserving the authentic flavors of both
                South and North Indian cuisine while adapting to contemporary tastes and dietary needs.
                Every recipe in our kitchen tells a story of tradition, family, and the rich culinary
                heritage of India.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                What started as a small family dream has grown into a beloved community gathering place,
                where food lovers come together to experience the true essence of Indian vegetarian cuisine.
              </p>
            </div>
            <div>
              <img
                src={img2.src}
                alt="Traditional Indian Food"
                className="rounded-lg shadow-xl w-full md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className=" py-8 md:py-20 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-green-600 text-4xl mb-6 flex justify-center">
                <GiIndianPalace />
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                To serve healthy, delicious, and affordable pure vegetarian food that brings families
                and friends together. We strive to maintain the highest standards of quality, hygiene,
                and customer service while preserving the authentic flavors of traditional Indian cuisine.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-green-600 text-4xl mb-6 flex justify-center">
                <GiHotMeal />
              </div>
              <h3 className="text-3xl font-bold text-green-800 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                To be the most trusted and beloved vegetarian restaurant chain, known for our commitment
                to quality, sustainability, and customer satisfaction. We envision a future where healthy,
                plant-based eating is accessible to everyone, everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 md:py-20 bg-green-800 border-t border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-50 mb-4">Our Values</h2>
            <p className="text-gray-200 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="text-green-600 text-4xl mb-4 flex justify-center">
                    <IconComponent />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chef's Special */}
      <section className="py-8 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Specialties</h2>
            <p className="text-gray-700 text-lg">Signature dishes that define our culinary excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="South Indian Delicacies"
                className="rounded-lg shadow-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800 mb-2">South Indian Classics</h3>
              <p className="text-gray-600">
                Authentic dosas, idlis, vadas, and traditional rice preparations that transport you to the streets of Chennai and Bangalore.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="North Indian Curries"
                className="rounded-lg shadow-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800 mb-2">North Indian Delights</h3>
              <p className="text-gray-600">
                Rich paneer curries, aromatic biryanis, and freshly baked naans that capture the essence of Punjab and Delhi.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Fusion Cuisine"
                className="rounded-lg shadow-lg w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-green-800 mb-2">Fusion Innovations</h3>
              <p className="text-gray-600">
                Creative Indo-Chinese dishes and modern interpretations of classic recipes, perfect for adventurous palates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py- md:py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Our Philosophy</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed mb-8">
              "Food is not just nourishment for the body, but also for the soul. At Agraharam Cafe,
              we believe that every meal should be a celebration of flavors, traditions, and the joy
              of sharing good food with loved ones."
            </p>
            <p className="text-lg leading-relaxed text-green-200">
              We are more than just a restaurant – we are custodians of culinary heritage,
              innovators of taste, and most importantly, a family that welcomes you with
              open arms and warm hearts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
