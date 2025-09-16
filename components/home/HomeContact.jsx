import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaCar, FaWifi, FaParking, FaUtensils } from 'react-icons/fa';

const HomeContact = () => {
    return (
        <section className="md:py-16 py-8 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-amber-200 rounded-full -translate-x-16 -translate-y-16 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-amber-200 rounded-full translate-x-20 translate-y-20 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-serif">Visit Agraharam Cafe</h2>
                    <p className="text-lg text-amber-700 max-w-2xl mx-auto">Experience the authentic flavors of South India in a traditional setting</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Address Card */}
                        <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-start space-x-4 mb-4">
                                <div className="bg-amber-100 p-3 rounded-full">
                                    <FaMapMarkerAlt className="text-amber-700 text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Location</h3>
                                    <p className="text-gray-600">
                                        2GM3+MJ9, Andrahalli Main Rd,<br />
                                        Gopal Nagar, Venugopal Nagar,<br />
                                        Peenya, Bengaluru, Karnataka 560058
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Hours Card */}
                        <div className="bg-amber-100 rounded-xl p-6 shadow-lg relative">
                            <div className="absolute -top-3 right-6 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                TODAY'S HOURS
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-white p-3 rounded-full">
                                    <FaClock className="text-amber-700 text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Opening Hours</h3>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">Monday - Friday</span>
                                            <span className="text-amber-800 font-medium">7:00 AM - 10:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">Saturday</span>
                                            <span className="text-amber-800 font-medium">7:00 AM - 11:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-700">Sunday</span>
                                            <span className="text-amber-800 font-medium">8:00 AM - 10:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-100 p-3 rounded-full">
                                    <FaPhone className="text-amber-700 text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact Us</h3>
                                    <p className="text-gray-600 mb-2 flex items-center">
                                        <FaPhone className="text-amber-600 mr-2" />
                                        +91 98765 43210
                                    </p>
                                    <p className="text-gray-600 flex items-center">
                                        <FaEnvelope className="text-amber-600 mr-2" />
                                        info@agraharamcafe.com
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column - Map */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full">

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.7577141922314!2d77.50344266948187!3d13.033707005760576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d005248456f%3A0x95d5a8d375ab3ddf!2sAgraharam%20Cafe!5e0!3m2!1sen!2sin!4v1758003623403!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '500px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Agraharam Cafe Location"
                                className="rounded-xl"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;