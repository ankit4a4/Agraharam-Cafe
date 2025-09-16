import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from "../../public/homepageImages/gallery1.jpg";
import img2 from "../../public/homepageImages/gallery2.jpg";
import img3 from "../../public/homepageImages/gallery3.jpg";
import img4 from "../../public/homepageImages/gallery4.jpg";
import img5 from "../../public/homepageImages/gallery5.jpg";
import img6 from "../../public/homepageImages/gallery6.jpg";
import img7 from "../../public/homepageImages/gallery7.jpg";
import img8 from "../../public/homepageImages/gallery8.jpg";

const HomeGallery = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: false  , mirror: true});
    }, []);

    const images = [
        img1.src,
        img2.src,
        img3.src,
        img4.src,
        img5.src,
        img6.src,
        img7.src,
        img8.src,
    ];

    return (
        <section className="md:py-20 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div data-aos="fade-down" className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-amber-800 mb-4">Our Gallery</h2>
                    <p className="text-gray-700 text-lg">A glimpse into our cafe and delicious offerings</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeGallery;
