'use client'
import React from 'react';
import img1 from "../../public/galleryPagePhotos&video/1.jpg";
import img2 from "../../public/galleryPagePhotos&video/2.jpg";
import img3 from "../../public/galleryPagePhotos&video/3.jpg";
import img4 from "../../public/galleryPagePhotos&video/4.jpg";
import img5 from "../../public/galleryPagePhotos&video/5.jpg";
import img6 from "../../public/galleryPagePhotos&video/6.jpg";
import img7 from "../../public/galleryPagePhotos&video/7.jpg";
import img8 from "../../public/galleryPagePhotos&video/8.jpg";
import img9 from "../../public/galleryPagePhotos&video/9.jpg";
import img10 from "../../public/galleryPagePhotos&video/10.jpg";
import img11 from "../../public/galleryPagePhotos&video/11.jpg";
import img12 from "../../public/galleryPagePhotos&video/12.jpg";
import img13 from "../../public/galleryPagePhotos&video/13.jpg";
import img14 from "../../public/galleryPagePhotos&video/14.jpg";
import img15 from "../../public/galleryPagePhotos&video/15.jpg";
import img17 from "../../public/galleryPagePhotos&video/17.jpg";
import img18 from "../../public/galleryPagePhotos&video/18.jpg";
import img19 from "../../public/galleryPagePhotos&video/19.jpg";
import img20 from "../../public/galleryPagePhotos&video/20.jpg";
import img21 from "../../public/galleryPagePhotos&video/21.jpg";
import img22 from "../../public/galleryPagePhotos&video/22.jpg";
import img23 from "../../public/galleryPagePhotos&video/23.jpg";
import img24 from "../../public/galleryPagePhotos&video/24.jpg";
import img25 from "../../public/galleryPagePhotos&video/25.jpg";
import img26 from "../../public/galleryPagePhotos&video/26.jpg";
import img27 from "../../public/galleryPagePhotos&video/27.jpg";
import img28 from "../../public/galleryPagePhotos&video/28.jpg";
import img29 from "../../public/galleryPagePhotos&video/29.jpg";
import img30 from "../../public/galleryPagePhotos&video/30.jpg";

const GalleryDetails = () => {
    const photos = [
        { id: 28, src: img28.src, title: '' },
        { id: 29, src: img29.src, title: '' },
        { id: 30, src: img30.src, title: '' },
        { id: 1, src: img1.src, title: '' },
        { id: 2, src: img2.src, title: '' },
        { id: 3, src: img3.src, title: '' },
        { id: 4, src: img4.src, title: '' },
        { id: 5, src: img5.src, title: '' },
        { id: 6, src: img6.src, title: '' },
        { id: 7, src: img7.src, title: '' },
        { id: 8, src: img8.src, title: '' },
        { id: 9, src: img9.src, title: '' },
        { id: 10, src: img10.src, title: '' },
        { id: 11, src: img11.src, title: '' },
        { id: 12, src: img12.src, title: '' },
        { id: 13, src: img13.src, title: '' },
        { id: 14, src: img14.src, title: '' },
        { id: 15, src: img15.src, title: '' },
        { id: 17, src: img17.src, title: '' },
        { id: 18, src: img18.src, title: '' },
        { id: 19, src: img19.src, title: '' },
        { id: 20, src: img20.src, title: '' },
        { id: 21, src: img21.src, title: '' },
        { id: 22, src: img22.src, title: '' },
        { id: 23, src: img23.src, title: '' },
        { id: 24, src: img24.src, title: '' },
        { id: 25, src: img25.src, title: '' },
        { id: 26, src: img26.src, title: '' },
        { id: 27, src: img27.src, title: '' },

    ];

    const videos = [
        { id: 1, src: "https://res.cloudinary.com/dptqmtyot/video/upload/v1759925054/reel4_rw5wnp.mp4", title: "" },
        { id: 2, src: "https://res.cloudinary.com/dptqmtyot/video/upload/v1759925014/reel5_ipvl6m.mp4", title: "" },
        { id: 3, src: "https://res.cloudinary.com/dptqmtyot/video/upload/v1759925012/reel2_xyyjkb.mp4", title: "" },
        { id: 4, src: "https://res.cloudinary.com/dptqmtyot/video/upload/v1759925012/reel1_sgqohh.mp4", title: "" },
        { id: 5, src: "https://res.cloudinary.com/dptqmtyot/video/upload/v1759925022/reel3_gy1fe1.mp4", title: "" },

    ];

    const handleItemClick = (item) => {
        console.log('Clicked:', item.title);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">My Gallery</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our collection of photos and videos
                    </p>
                </div>

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
                                            className="w-full object-contain md:object-cover"
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
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Videos</h2>

                    {/* 1st row - 3 videos */}
                    <div className="flex flex-wrap justify-center gap-6 mb-6">
                        {videos.slice(0, 3).map((item) => (
                            <div
                                key={item.id}
                                className="relative rounded-xl overflow-hidden shadow-lg bg-white w-full sm:w-[45%] lg:w-[30%] max-w-[400px]"
                            >
                                <div className="w-full overflow-hidden rounded-xl">
                                    <video
                                        src={item.src}
                                        className="w-full h-[400px] object-contain rounded-xl"
                                        controls
                                        playsInline
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 2nd row - 2 videos (center aligned) */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {videos.slice(3, 5).map((item) => (
                            <div
                                key={item.id}
                                className="relative rounded-xl overflow-hidden shadow-lg bg-white w-full sm:w-[45%] lg:w-[30%] max-w-[400px]"
                            >
                                <div className="w-full overflow-hidden rounded-xl">
                                    <video
                                        src={item.src}
                                        className="w-full h-[400px] object-contain rounded-xl"
                                        controls
                                        playsInline
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GalleryDetails;
