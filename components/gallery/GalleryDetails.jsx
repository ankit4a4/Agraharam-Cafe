'use client'
import React from 'react';
import img1 from "../../public/homepageImages/gallery1.jpg"
import img2 from "../../public/homepageImages/gallery2.jpg"
import img3 from "../../public/homepageImages/gallery3.jpg"
import img4 from "../../public/homepageImages/gallery4.jpg"
import img5 from "../../public/homepageImages/gallery5.jpg"
import img6 from "../../public/homepageImages/gallery6.jpg"
import img7 from "../../public/homepageImages/gallery7.jpg"
import img8 from "../../public/homepageImages/gallery8.jpg"

const GalleryDetails = () => {
    const photos = [
        { id: 1, src: img1.src, title: '' },
        { id: 2, src: img2.src, title: '' },
        { id: 3, src: img3.src, title: '' },
        { id: 4, src: img4.src, title: '' },
        { id: 5, src: img5.src, title: '' },
        { id: 6, src: img6.src, title: '' },
        { id: 7, src: img7.src, title: '' },
        { id: 8, src: img8.src, title: '' },
        { id: 9, src: 'https://picsum.photos/400/600', title: '' },
        { id: 10, src: 'https://picsum.photos/400/560', title: '' },
    ];

    const videos = [
        { id: 1, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "" },
        { id: 2, src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4", title: "" },
        { id: 3, src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", title: "" },
        { id: 4, src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", title: "" },
        { id: 5, src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4", title: "" },
        { id: 6, src: "https://www.w3schools.com/html/mov_bbb.mp4", title: "" },
    ];


    // Handle click
    const handleItemClick = (item) => {
        console.log('Clicked:', item.title);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">My Gallery</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our collection of photos and Video
                    </p>
                </div>

                {/* Images Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Images</h2>
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {photos.map((item) => (
                            <div
                                key={item.id}
                                className="break-inside-avoid relative group cursor-pointer transform transition-transform hover:scale-[1.02]"
                                onClick={() => handleItemClick(item)}
                            >
                                <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                                    <div className="relative">
                                        <img
                                            src={item.src}
                                            alt={item.title}
                                            className="w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                                            <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reels Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Videos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((item) => (
                            <div
                                key={item.id}
                                className="relative rounded-xl overflow-hidden shadow-lg bg-white"
                            >
                                <video
                                    src={item.src}
                                    className="w-full h-64 object-cover rounded-xl"
                                    controls
                                    muted={false}
                                    loop={false}
                                    playsInline
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryDetails;
