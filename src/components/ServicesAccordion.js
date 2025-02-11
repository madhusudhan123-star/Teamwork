import React, { useState } from 'react';
import data from '../utils/data';

const ServicesAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const { accordionData } = data.Solutions;

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="w-full mt-8">
            {accordionData.map((item, index) => (
                <div key={index} className="mb-2">
                    <button
                        className="w-full flex justify-between items-center py-4 px-6 text-left bg-white hover:bg-gray-50 transition-colors"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="font-bold text-lg">{item.title}</span>
                        <svg
                            className={`w-6 h-6 transform transition-transform duration-300 ${
                                activeIndex === index ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                        }`}
                    >
                        <div className="p-6 bg-white">
                            <p className="text-gray-700 mb-4">{item.content}</p>
                            {item.bullets && (
                                <ul className="list-disc pl-6 mb-4">
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i} className="text-gray-700 mb-1">{bullet}</li>
                                    ))}
                                </ul>
                            )}
                            {item.img && (
                                <div className="w-full overflow-hidden">
                                    <img 
                                        src={item.img} 
                                        alt={item.imageAlt} 
                                        className="w-full h-auto rounded-lg shadow-md mt-4 object-contain"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200"></div>
                </div>
            ))}
        </div>
    );
};

export default ServicesAccordion;
