import React from 'react'
import img from "../../public/homepageImages/banner3.jpg"

const GalleryHero = () => {
    return (
        <>
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
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">Gallery</h1>
                    <p className="text-xl md:text-2xl">
                        Explore our collection of memories, moments, and creative highlights
                    </p>
                </div>
            </section>
        </>
    )
}

export default GalleryHero
