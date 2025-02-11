import React, { useRef, useState, useEffect } from 'react';
import data from '../utils/data';
import '../styles/hideScrollbar.css';
import Footer from '../components/Footer';

const About = () => {
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);
    const scrollRef = useRef(null);
    const [scrollWidth, setScrollWidth] = useState(0);
    const [clientWidth, setClientWidth] = useState(0);

    // Initialize and update measurements
    useEffect(() => {
        const updateMeasurements = () => {
            if (scrollRef.current) {
                setScrollWidth(scrollRef.current.scrollWidth);
                setClientWidth(scrollRef.current.clientWidth);
            }
        };

        updateMeasurements();
        window.addEventListener('resize', updateMeasurements);
        return () => window.removeEventListener('resize', updateMeasurements);
    }, []);

    // Handle scroll behavior
    useEffect(() => {
        const container = containerRef.current;
        const scrollContainer = scrollRef.current;

        if (!container || !scrollContainer) return;

        const handleScroll = () => {
            const containerRect = container.getBoundingClientRect();
            const scrollProgress = Math.max(0, Math.min(1,
                (-containerRect.top) / (containerRect.height - window.innerHeight)
            ));

            // Calculate horizontal scroll position
            const maxScroll = scrollWidth - clientWidth;
            const scrollLeft = maxScroll * scrollProgress;

            if (containerRect.top <= 0 && containerRect.bottom >= window.innerHeight) {
                scrollContainer.scrollLeft = scrollLeft;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollWidth, clientWidth]);

    return (
        <div className="min-h-screen">
            <div className="mx-4 md:mx-16 my-12 md:my-28">
                {/* First section */}
                <div className="">
                    <div className="flex flex-col mt-5 md:mt-10 gap-10 md:gap-20 items-start justify-center">
                        <h1 className="text-2xl md:text-4xl font-bold w-full md:w-1/2">
                            {data.About.maintitle}
                        </h1>
                        <div className="bg-black w-full h-[1px]"></div>
                    </div>
                    <div className="flex flex-col md:flex-row mt-5 md:mt-10 gap-5 md:gap-10 items-start justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold w-full md:w-3/12">
                            {data.About.sidetitle}
                        </h2>
                        <p className="mt-2 md:mt-5 w-full md:w-9/12 whitespace-pre-line text-base md:text-lg">
                            {data.About.sidecontent}
                        </p>
                    </div>
                </div>

                {/* Sticky horizontal scroll section */}
                <div
                    ref={containerRef}
                    className="h-[300vh] my-20 hidden md:block relative"
                >
                    <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                        <div
                            ref={scrollRef}
                            className="flex w-full overflow-x-hidden hide-scrollbar"
                        >
                            <div className="flex gap-8 px-16">
                                {data.About.advantages.map((item, index) => (
                                    <div
                                        key={index}
                                        className="w-[600px] flex-shrink-0"
                                    >
                                        <img
                                            className="w-full object-cover"
                                            src={item.image}
                                            alt={item.title}
                                        />
                                        <h2 className="text-3xl font-bold my-5 px-3">
                                            {item.title}
                                        </h2>
                                        <p className="px-4 pb-4 text-base">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile section */}
                <div className="my-10 block md:hidden md:my-20 overflow-hidden">
                    <h1 className="text-2xl md:text-3xl mb-6 md:mb-10">
                        {data.About.horzientaltitle}
                    </h1>
                    <div className="flex flex-col gap-4 md:gap-8 pb-8">
                        {data.About.advantages.map((item, index) => (
                            <div
                                key={index}
                                className="text-center w-full flex-shrink-0"
                            >
                                <img
                                    className="w-full h-48 md:h-auto object-cover"
                                    src={item.image}
                                    alt={item.title}
                                />
                                <h2 className="text-xl md:text-3xl font-bold my-3 md:my-5 px-3">
                                    {item.title}
                                </h2>
                                <p className="px-3 md:px-4 pb-4 text-sm md:text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;