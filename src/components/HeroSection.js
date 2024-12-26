import React, { useState, useEffect, useRef } from 'react'
import data from '../utils/data'
import { useParallax } from 'react-scroll-parallax';
import Link from 'react-ripples-hover';


const HeroSection = () => {
    const [animcount, setAnimcount] = useState(5);
    const [rotation, setRotation] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const arrowRef = useRef(null);
    const videoParallax = useParallax({
        translateY: [20, -20],  // Move upward while scrolling
        scale: [1, 1.5],       // Scale up from 100% to 130%
        easing: 'easeInQuad',
        startScroll: 0,        // Start effect immediately
        endScroll: 800,        // End effect after 800px of scroll
        speed: -8             // Negative speed for reversed parallax
    });
    const background_move = useParallax({
        translateX: [10, -20],  // Move upward while scrolling
        translateX: [-20, 0],  // Move upward while scrolling
        startScroll: 1000,
    })

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPaused, setIsAutoPaused] = useState(false);
    const ANIMATION_DURATION = 1200; // 1.2 seconds for smoother transition
    const AUTO_SLIDE_DELAY = 5000; // 5 seconds between auto-slides
    const PAUSE_DURATION = 3000; // 3 seconds pause after manual navigation
    const slides = [
        data.Home.thirdsec.image1,
        data.Home.thirdsec.image2,
        data.Home.thirdsec.image1,
        data.Home.thirdsec.image2,
        data.Home.thirdsec.image1  // Add one more to ensure smooth transition back to start
    ];

    const horizontalScrollRef = useRef(null);
    const [isScrollingEnabled, setIsScrollingEnabled] = useState(false);
    const [isMouseInSection, setIsMouseInSection] = useState(false);

    useEffect(() => {
        if (isAutoPaused) return; // Don't run auto-slide while paused

        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                if (prev >= slides.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, AUTO_SLIDE_DELAY);

        return () => clearInterval(interval);
    }, [isAutoPaused]); // Add isAutoPaused to dependencies


    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!arrowRef.current) return;

            const rect = arrowRef.current.getBoundingClientRect();
            const arrowCenterX = rect.left + rect.width / 2;
            const arrowCenterY = rect.top + rect.height / 2;

            // Calculate angle between mouse and arrow center
            const angle = Math.atan2(
                e.clientY - arrowCenterY,
                e.clientX - arrowCenterX
            ) * (180 / Math.PI);

            setRotation(angle);
        };

        // Add reset handler when mouse leaves the window
        const handleMouseLeave = () => {
            setRotation(0); // Reset to original position
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!horizontalScrollRef.current || !isScrollingEnabled) return;

            const { clientX } = e;
            const { scrollWidth, clientWidth } = horizontalScrollRef.current;
            const maxScrollLeft = scrollWidth - clientWidth;

            // Calculate the scroll position based on mouse X position
            const scrollLeft = (clientX / window.innerWidth) * maxScrollLeft;
            horizontalScrollRef.current.scrollLeft = scrollLeft;
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isScrollingEnabled]);

    useEffect(() => {
        // Reset scroll position when mouse leaves section
        if (!isMouseInSection && horizontalScrollRef.current) {
            horizontalScrollRef.current.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        }
    }, [isMouseInSection]);

    const handleSlideChange = (direction) => {
        // Pause auto-slide
        setIsAutoPaused(true);

        // Change slide
        setCurrentSlide(prev => {
            if (direction === 'next') {
                return prev >= slides.length - 1 ? 0 : prev + 1;
            } else {
                return prev <= 0 ? slides.length - 1 : prev - 1;
            }
        });

        // Resume auto-slide after PAUSE_DURATION
        setTimeout(() => {
            setIsAutoPaused(false);
        }, PAUSE_DURATION);
    };

    const handleMouseEnter = () => {
        setIsScrollingEnabled(true);
        setIsMouseInSection(true);
    };

    const handleMouseLeave = () => {
        setIsScrollingEnabled(false);
        setIsMouseInSection(false);
    };

    return (
        <div className='font-sora overflow-hidden'>
            {/* Main content container with padding for scroll space */}
            <div className='relative'>
                {/* Fixed position header content */}
                <div className='sticky top-0 z-10 bg-white/90 backdrop-blur-sm pt-20 px-6'>
                    <div className='container font-sora mx-auto'>
                        <h1 className='text-6xl font-bold'>{data.Home.Headersection.title}</h1>
                        <p className='mt-8'>{data.Home.Headersection.subtitle}</p>
                    </div>
                    {/* Horizontal animation text */}
                    <div className='relative mt-6 w-full overflow-hidden'>
                        <div className='flex animate-[scroll_20s_linear_infinite] whitespace-nowrap'>
                            {/* First set of items */}
                            {Array.from({ length: animcount }).map((_, index) => (
                                <div key={`first-${index}`} className='flex items-center shrink-0'>
                                    <img src={data.Home.Headersection.star} className='w-10 mx-2 animate-star-spin' alt="star" />
                                    <h1 className="outlined-text text-3xl font-bold uppercase">{data.Home.Headersection.textrotate}</h1>
                                    <img src={data.Home.Headersection.star} className='w-10 mx-2 animate-star-spin' alt="star" />
                                </div>
                            ))}
                            {/* Duplicate set for seamless loop */}
                            {Array.from({ length: animcount }).map((_, index) => (
                                <div key={`first-${index}`} className='flex items-center shrink-0'>
                                    <img src={data.Home.Headersection.star} className='w-10 mx-2 animate-star-spin' alt="star" />
                                    <h1 className="outlined-text text-3xl font-bold uppercase">
                                        {data.Home.Headersection.textrotate}
                                    </h1>
                                    <img src={data.Home.Headersection.star} className='w-10 mx-2 animate-star-spin' alt="star" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Video container with parallax */}
                <div
                    ref={videoParallax.ref}
                    className='relative top-[-140px] z-10 w-screen h-screen overflow-hidden transition-transform duration-300'
                >
                    <iframe
                        src="https://player.vimeo.com/video/1009850695?h=0ef5fe8a95&autoplay=1&loop=1&muted=1&controls=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Hero Section Video"
                        className='absolute top-0 left-0 w-full h-full object-cover'
                    />
                </div>

            </div>

            {/* Second Section */}
            <div className='relative'>
                {/* Background_image */}
                <div ref={background_move.ref} className='bg-white absolute top-0 w-screen h-screen flex items-center justify-center'>
                    <img src={data.Home.secondsec.sec_bg} className='' />
                </div>
                {/* main Content */}
                <div className=' z-10 relative h-screen flex items-center mx-20'>
                    <div className='w-3/6 hidden lg:flex md:flex sm:hidden flex-col gap-28'>
                        <h1 className=' text-2xl lg:text-5xl md:text-3xl font-bold '>{data.Home.secondsec.title}</h1>
                        <div className='h-full'>
                            <div
                                ref={arrowRef}
                                className='transition-transform duration-800 ease-out origin-center'
                                style={{ transform: `rotate(${rotation}deg)` }}
                            >
                                <div className='w-40 h-7 bg-black rotate-[45deg] translate-x-[6.3rem] -translate-y-[1rem]'></div>
                                <div className='w-60 h-8 bg-black rounded-r-3xl'></div>
                                <div className='w-40 h-7 bg-black rotate-[-45deg] translate-x-[6.3rem]  translate-y-[1.2rem]'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-start gap-10'>
                        <h1 className='text-xl lg:text-3xl md:text-2xl font-bold'>{data.Home.secondsec.sectitle}</h1>
                        <p>{data.Home.secondsec.subtitle}</p>
                        <div className='bg-black rounded-full hover:text-black'>
                            <Link
                                href={data.navbar.navbarItems.contact_link}
                                rippleColor="#FFFFFF"
                                duration={1.7}
                                className="bg-black rounded-full hover:text-black inline-flex items-center transition-all"
                                style={{
                                    borderRadius: '9999px',
                                    padding: '10px',

                                    transition: 'color 0.3s, background-color 0.3s',
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)} // Ensuring border-radius is always applied
                            >
                                <div style={{ color: isHovered ? 'black' : 'white', }} className='whitespace-nowrap px-5 text-white hover:text-black'>
                                    {data.Home.secondsec.button}
                                    <span className="ml-1">{data.navbar.navbarItems.contact_img}</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* third Section or the image slider */}
            <div className='flex gap-10 relative'>
                <div className='w-[50vw] h-screen overflow-hidden relative'>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-all ease-in-out`}
                            style={{
                                transform: `translateY(${(index - currentSlide) * 100}%)`,
                                opacity: 1,
                                transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
                            }}
                        >
                            <img
                                src={slide}
                                alt={`Slide ${index}`}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    ))}
                    {/* Navigation Buttons */}
                    <div className='absolute bottom-8 left-8 flex gap-4 z-20'>
                        <button
                            onClick={() => handleSlideChange('next')}
                            className='bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 border-2 border-black'
                        >
                            →
                        </button>

                    </div>
                </div>
                <div className='w-[50vw] h-screen overflow-hidden relative'>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-all ease-in-out`}
                            style={{
                                transform: `translateY(${(currentSlide - index) * 100}%)`,
                                opacity: 1,
                                transition: `transform ${ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`
                            }}
                        >
                            <img
                                src={slide}
                                alt={`Slide ${index}`}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Show the services */}
            <div
                ref={horizontalScrollRef}
                className='h-[50vh] w-full flex items-center overflow-x-auto scrollbar-hide 
                [-ms-overflow-style:none] [scrollbar-width:none] 
                [&::-webkit-scrollbar]:hidden'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className='w-[30vw] flex-shrink-0'>
                    <h1>Brand Solution</h1>
                    
                </div>
                <div className='w-[30vw] flex-shrink-0'>
                    <h1>Tech Solution</h1>
                </div>
                <div className='w-[30vw] flex-shrink-0'>
                    <h1>Media Solution</h1>
                </div>
                <div className='w-[30vw] flex-shrink-0'>
                    <h1>Research Solution</h1>
                </div>
                <div className='w-[30vw] flex-shrink-0'>
                    <h1>Film Photography</h1>
                </div>
            </div>
        </div>
    )
}

export default HeroSection


