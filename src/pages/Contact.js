import React, { useState } from 'react';
import data from '../utils/data';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        email: '',
        phone: '',
        website: '',
        message: '',
        services: [],
        location: '',
        source: ''
    });

    const { services, hearAboutUs, officeLocations, portfolioImages } = data.Contact;

    const handleServiceToggle = (service) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen py-6 md:py-12 pl-4 md:pl-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Form Section */}
                    <div className="w-full lg:w-3/6">
                        <p className='text-gray-600 text-base md:text-lg mb-4 md:mb-8'>GOT AN IDEA?</p>
                        <h1 className="text-xl md:text-3xl mb-3 md:mb-4">Drop Us A Message</h1>
                        <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
                            Let's discuss how we can help your business grow.
                            <br className="hidden md:block" />
                            Reach us at <a href="mailto:info@teamworksdigital.com" className="text-blue-600">info@teamworksdigital.com</a>
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            {/* Basic Input Fields */}
                            <div className="space-y-4">
                                {[
                                    { name: 'name', label: 'Your Name', type: 'text' },
                                    { name: 'organization', label: `Your Organization's Name`, type: 'text' },
                                    { name: 'email', label: 'Your Email', type: 'email' },
                                    { name: 'phone', label: 'Your Number', type: 'tel' },
                                    { name: 'website', label: 'Website/Social Media Link', type: 'url' }
                                ].map((field) => (
                                    <div key={field.name}>
                                        <input
                                            type={field.type}
                                            placeholder={field.label}
                                            className="w-full border-b-2 py-4 md:py-10 text-base md:text-lg placeholder:font-medium placeholder:text-black placeholder:opacity-100 border-gray-200 focus:outline-none focus:border-black transition-colors"
                                            onChange={(e) => setFormData(prev => ({ ...prev, [field.name]: e.target.value }))}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Message Field */}
                            <div>
                                <textarea
                                    placeholder="What's on your mind?"
                                    rows={4}
                                    className="w-full border-2 border-gray-200 p-3 rounded-lg text-base md:text-lg focus:outline-none focus:border-black transition-colors"
                                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                />
                            </div>

                            {/* Services Selection */}
                            <div>
                                <h3 className="font-semibold mb-3 text-base md:text-lg">Which services are you interested in?</h3>
                                <div className="flex flex-wrap gap-2">
                                    {services.map((service) => (
                                        <button
                                            key={service}
                                            type="button"
                                            className={`px-4 md:px-16 py-2 rounded-full text-sm md:text-lg ${formData.services.includes(service)
                                                ? 'bg-black border-2 border-black text-white'
                                                : 'bg-white border-2 border-black hover:bg-gray-200'
                                                }`}
                                            onClick={() => handleServiceToggle(service)}
                                        >
                                            {service}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* How did you hear about us */}
                            <div>
                                <h3 className="font-semibold mb-3 text-base md:text-lg">How did you hear about us?</h3>
                                <div className="flex flex-wrap gap-2">
                                    {hearAboutUs.map((source) => (
                                        <button
                                            key={source}
                                            type="button"
                                            className={`px-4 md:px-16 py-2 rounded-full text-sm md:text-lg ${formData.source === source
                                                ? 'bg-black border-2 border-black text-white'
                                                : 'bg-white border-2 border-black hover:bg-gray-200'
                                                }`}
                                            onClick={() => setFormData(prev => ({ ...prev, source }))}
                                        >
                                            {source}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors text-base md:text-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Right Side - Images */}
                    <div className="w-full lg:w-3/6">
                        <div className="space-y-4 md:space-y-6">
                            {portfolioImages.map((item, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={item.image}
                                        alt={item.caption}
                                        className="w-full h-48 md:h-full object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Office Locations */}
                <div className="mt-12 md:mt-16">
                    <h2 className="text-3xl md:text-6xl py-6 md:py-10">Our Offices</h2>
                    <div className="space-y-8 md:space-y-10">
                        {officeLocations.map((office, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8">
                                <img
                                    src={office.image}
                                    alt={office.city}
                                    className="w-full md:w-1/2 h-48 md:h-auto object-cover rounded"
                                />
                                <div className='w-full md:w-1/2'>
                                    <h3 className="text-2xl md:text-5xl mt-4 md:mt-0">{office.city}</h3>
                                    <p className="text-base md:text-lg my-3 md:my-5 text-gray-600">{office.address}</p>
                                    <a
                                        href={`mailto:${office.email}`}
                                        className="text-sm md:text-base text-blue-600 hover:underline"
                                    >
                                        {office.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;