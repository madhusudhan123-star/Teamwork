import React, { useState, useEffect, useRef } from 'react'
import data from '../utils/data'
import { useParallax } from 'react-scroll-parallax';
import Link from 'react-ripples-hover';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
    const [animcount, setAnimcount] = useState(5);
    const [rotation, setRotation] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [cursorset, setCursorset] = useState(false);
    const [hover, setHover] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPaused, setIsAutoPaused] = useState(false);
    const ANIMATION_DURATION = 1200; // 1.2 seconds for smoother transition
    const AUTO_SLIDE_DELAY = 5000; // 5 seconds between auto-slides
    const PAUSE_DURATION = 3000; // 3 seconds pause after manual navigation
    const horizontalScrollRef = useRef(null);
    const [isScrollingEnabled, setIsScrollingEnabled] = useState(false);
    const [isMouseInSection, setIsMouseInSection] = useState(false);
    const [slidePosition, setSlidePosition] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const slides = [
        data.Home.thirdsec.image1,
        data.Home.thirdsec.image2,
        data.Home.thirdsec.image1,
        data.Home.thirdsec.image2,
        data.Home.thirdsec.image1  // Add one more to ensure smooth transition back to start
    ];
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);

    const three_hover = () => {

    }
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


    const getRandomColor = () => {
        const colors = data.Home.services.bgColors;
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const [footerRef, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });
    const [isScrolled, setIsScrolled] = useState(false);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const mobileSlides = [
        data.Home.thirdsec.mobileImage1, // Add these images to your data.js
        data.Home.thirdsec.mobileImage2,
        data.Home.thirdsec.mobileImage3,
    ];

    const [hoveredTrending, setHoveredTrending] = useState(null);

    const trendingItemClass = (itemName) => `
        transition-opacity duration-300
        ${hoveredTrending && hoveredTrending !== itemName ? 'opacity-30' : 'opacity-100'}
    `;

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

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY - 50;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            setIsScrolled(scrollPosition > documentHeight - windowHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            handlePartnerSlide('right');
        }
        if (isRightSwipe) {
            handlePartnerSlide('left');
        }

        setTouchStart(0);
        setTouchEnd(0);
    };

    const handlePartnerSlide = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);

        if (isMobileView) {
            setCurrentPartnerIndex(prev => {
                if (direction === 'left') {
                    return prev <= 0 ? data.Home.partner.length - 1 : prev - 1;
                } else {
                    return prev >= data.Home.partner.length - 1 ? 0 : prev + 1;
                }
            });
        } else {
            const slideWidth = window.innerWidth / 4;
            const totalSlides = data.Home.partner.length;
            const maxScroll = -(totalSlides - 4) * slideWidth;

            setSlidePosition(prev => {
                let newPosition;
                if (direction === 'left') {
                    newPosition = prev + slideWidth;
                    if (newPosition > 0) {
                        newPosition = maxScroll;
                    }
                } else {
                    newPosition = prev - slideWidth;
                    if (newPosition < maxScroll) {
                        newPosition = 0;
                    }
                }
                return newPosition;
            });
        }

        setTimeout(() => setIsAnimating(false), 500);
    };

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
            <section className='relative'>
                {/* Fixed position header content */}
                <div className='sticky top-0 z-10 bg-white/90 backdrop-blur-sm pt-10 md:pt-20 px-4 md:px-6'>
                    <div className='container font-sora mx-auto'>
                        <h1 className='text-3xl md:text-6xl font-bold'>{data.Home.Headersection.title}</h1>
                        <p className='mt-4 md:mt-8 text-sm md:text-base'>{data.Home.Headersection.subtitle}</p>
                    </div>
                    {/* Horizontal animation text */}
                    <div className='relative mt-4 md:mt-6 w-full overflow-hidden'>
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
                <div ref={videoParallax.ref} className='relative top-[-140px] z-10 w-screen h-screen overflow-hidden transition-transform duration-300'>
                    <iframe
                        src="https://player.vimeo.com/video/1009850695?h=0ef5fe8a95&autoplay=1&loop=1&muted=1&controls=0"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        title="Hero Section Video"
                        className='absolute top-0 left-0 w-full h-full object-cover'
                    />
                </div>

            </section>

            {/* Second Section */}
            <section className='relative'>
                {/* Background_image */}
                <div ref={background_move.ref} className='bg-white hidden 2xl:flex xl:flex md:flex sm:hidden absolute top-0 w-screen h-screen items-center justify-center'>
                    <img src={data.Home.secondsec.sec_bg} className='' />
                </div>
                {/* main Content */}
                <div className='z-10 relative h-screen flex flex-col md:flex-row items-center px-4 md:mx-20'>
                    <div className='w-full md:w-3/6 flex flex-col gap-10 md:gap-28 mb-10 md:mb-0'>
                        <h1 className='text-2xl md:text-5xl font-bold'>{data.Home.secondsec.title}</h1>
                        <div className='h-full'>
                            <div
                                ref={arrowRef}
                                className='transition-transform hidden 2xl:block xl:block md:block sm:hidden duration-800 ease-out origin-center'
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
            </section>

            {/* third Section or the image slider */}
            <section className='relative'>
                {/* Mobile View - Single Slider */}
                <div className='md:hidden w-full h-[60vh] overflow-hidden relative'>
                    {mobileSlides.map((slide, index) => (
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
                                alt={`Mobile Slide ${index}`}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    ))}
                    {/* Mobile Navigation Button */}
                    {/* <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-20'>
                        <div 
                            onMouseOver={() => setCursorset(true)} 
                            onMouseLeave={() => setCursorset(false)} 
                            className='relative overflow-hidden bg-white rounded-full h-14 w-14 flex items-center justify-center' 
                            onClick={() => handleSlideChange('next')}
                        >
                            <img 
                                src={data.Home.thirdsec.arrow} 
                                className={`w-full relative transition-all duration-300 ease-in-out ${
                                    cursorset ? "left-[46px]" : "left-[0px]"
                                }`} 
                                alt="arrow" 
                            />
                            <img 
                                src={data.Home.thirdsec.arrow} 
                                className={`w-full absolute transition-all duration-300 ease-in-out ${
                                    cursorset ? "left-[0px] delay-300" : "left-[-46px]"
                                }`} 
                                alt="arrow" 
                            />
                        </div>
                    </div> */}
                </div>

                {/* Desktop View - Double Slider */}
                <div className='hidden md:flex gap-10'>
                    <div className='w-full md:w-[50vw] h-[50vh] md:h-screen overflow-hidden relative'>
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
                            <div onMouseOver={() => setCursorset(true)} onMouseLeave={() => setCursorset(false)} className='relative overflow-hidden bg-white rounded-full h-20 w-20 flex items-center justify-center' onClick={() => handleSlideChange('next')} >
                                <img src={data.Home.thirdsec.arrow} className={`w-full relative transition-all duration-300 ease-in-out ${cursorset ? " left-[66px]" : "left-[0px]"}`} alt="arrow" />
                                <img src={data.Home.thirdsec.arrow} className={`w-full absolute transition-all duration-300 ease-in-out ${cursorset ? " left-[0px] delay-300" : "left-[-66px]"}`} alt="arrow" />
                            </div>

                        </div>
                    </div>
                    <div onmouseover className='w-full md:w-[50vw] h-[50vh] md:h-screen overflow-hidden relative'>
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
            </section>

            {/* Show the services */}
            <section ref={horizontalScrollRef} className='h-full w-full' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {/* Mobile View */}
                <div className='md:hidden flex flex-col gap-8 px-4 py-10'>
                    {data.Home.services.content.map((service, index) => (
                        <div
                            key={index}
                            className='w-full p-6 rounded-2xl bg-white flex flex-col items-start'
                        >
                            <h2 className='text-3xl font-bold text-black mb-4'>
                                {service.title.split(' ').map((word, i) => (
                                    <React.Fragment key={i}>
                                        {word} {i === 0 && <br />}
                                    </React.Fragment>
                                ))}
                            </h2>
                            <p className='text-gray-700 mb-6'>{service.description}</p>
                            <div className='flex justify-end'>
                                <div className='relative overflow-hidden bg-black rounded-full h-12 w-12 flex items-center justify-center'>
                                    <img 
                                        src={data.Home.thirdsec.arrow} 
                                        className='w-full relative transition-all duration-300 ease-in-out invert'
                                        alt="arrow" 
                                    />
                                </div>
                            </div>
                            <div className='w-full mt-5 h-[2px] bg-black'></div>
                        </div>
                    ))}
                </div>

                {/* Desktop View */}
                <div ref={horizontalScrollRef} className='hidden md:flex h-[100vh] w-full flex items-center overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {data.Home.services.content.map((service, index) => (
                        <div
                            key={index}
                            className='w-[30vw] h-[90vh] flex flex-col items-center overflow-hidden justify-center flex-shrink-0 group transition-colors duration-500'
                            style={{
                                backgroundColor: `var(--bg-color-${index})`,
                                '--bg-color-0': 'transparent',
                                '--bg-color-1': 'transparent',
                                '--bg-color-2': 'transparent',
                                '--bg-color-3': 'transparent',
                                '--bg-color-4': 'transparent',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.setProperty(`--bg-color-${index}`, getRandomColor());
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.setProperty(`--bg-color-${index}`, 'transparent');
                            }}
                        >
                            <h1 className='text-6xl text-center font-bold text-gray-100 group-hover:text-white transition-colors duration-500'>
                                {service.title.split(' ').map((word, i) => (
                                    <React.Fragment key={i}>
                                        {word} {i === 0 && <br />}
                                    </React.Fragment>
                                ))}
                            </h1>
                            <div className='flex flex-col items-center justify-center transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out'>
                                <p className='px-8 text-center group-hover:text-black transition-colors duration-500'>
                                    {service.description}
                                </p>
                                <div className='relative overflow-hidden bg-white rounded-full h-20 w-20 flex items-center justify-center mt-8' onClick={() => handleSlideChange('next')} >
                                    <img src={data.Home.thirdsec.arrow} className='w-full relative transition-all duration-300 ease-in-out' alt="arrow" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Branding slider */}
            <section className='w-full h-[20vh] md:h-[15vh] relative my-6 md:my-10 flex flex-col overflow-hidden bg-white'>
                <div className='w-1/4 z-10 h-full absolute top-0 left-0 bg-gradient-to-r from-white to-transparent'>
                </div>
                <div className='w-1/4 z-10 h-full absolute top-0 right-0 bg-gradient-to-l from-white to-transparent'>
                </div>
                {/* First row - sliding left to right */}
                <div className='w-full flex-1 flex items-center overflow-hidden'>
                    <div className='flex animate-[slideLeft_20s_linear_infinite] whitespace-nowrap'>
                        {/* First set */}
                        <div className='flex gap-32 mx-20'>
                            <img src={data.Home.brand.brand1} className='h-12 w-auto object-contain grayscale  transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand2} className='h-12 w-auto object-contain grayscale  transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand3} className='h-12 w-auto object-contain grayscale  transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand4} className='h-12 w-auto object-contain grayscale  transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand5} className='h-12 w-auto object-contain grayscale  transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand6} className='h-12 w-auto object-contain grayscale  transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand7} className='h-12 w-auto object-contain grayscale  transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand8} className='h-12 w-auto object-contain grayscale  transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand9} className='h-12 w-auto object-contain grayscale  transition-all duration-300' alt="brand" />
                        </div>
                    </div>
                </div>

                {/* Second row - sliding right to left */}
                <div className='w-full flex-1 flex items-center overflow-hidden'>
                    <div className='flex animate-[slideRight_20s_linear_infinite] whitespace-nowrap'>
                        {/* First set */}
                        <div className='flex gap-32 mx-20'>
                            <img src={data.Home.brand.brand9} className='h-12 w-auto object-contain grayscale transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand1} className='h-12 w-auto object-contain grayscale transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand2} className='h-12 w-auto object-contain grayscale transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand3} className='h-12 w-auto object-contain grayscale transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand4} className='h-12 w-auto object-contain grayscale transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand5} className='h-12 w-auto object-contain grayscale transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand6} className='h-12 w-auto object-contain grayscale transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand7} className='h-12 w-auto object-contain grayscale transition-all duration-300' alt="brand" />
                            <img src={data.Home.brand.brand8} className='h-12 w-auto object-contain grayscale transition-all duration-300' alt="brand" />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Trending topic */}
            <section>
                <div className='flex flex-col md:flex-row mx-4 md:mx-16 mt-20 md:mt-40' 
                     onMouseLeave={() => setHoveredTrending(null)}>
                    <div className='w-full md:w-3/5 mb-10 md:mb-0 '>
                        <h1 className='text-2xl md:text-3xl font-bold mb-6 md:mb-10'>{data.Home.trending.title}</h1>
                        <div className='flex flex-col gap-10'>
                            {/* First content block */}
                            <div
                                className={`flex w-full justify-start flex-col items-start gap-8 md:gap-16 border-b-2 pb-10 border-black ${trendingItemClass('trending1')}`}
                                onMouseEnter={() => setHoveredTrending('trending1')}
                            >
                                <p className='border-2 border-solid border-black px-2 py-1 rounded-full'>Blog</p>
                                <div className='flex flex-col md:flex-row justify-between w-full'>
                                    <p className='text-lg md:text-xl font-bold w-full md:w-4/5 mb-4 md:mb-0'>
                                        The Future Trajectory of Marketing to Drive Positive Brand Growth
                                    </p>
                                    <img 
                                        src={data.Home.trending.image} 
                                        className='w-full h-48 object-cover rounded-lg md:hidden mb-4'
                                        alt="trending mobile" 
                                    />
                                    <p className='hidden md:block text-xl text-gray-600'>4 minutes</p>
                                </div>
                            </div>

                            {/* Second content block */}
                            <div 
                                className={`flex w-full justify-start flex-col items-start gap-8 md:gap-16 border-b-2 pb-10 border-black ${trendingItemClass('trending2')}`}
                                onMouseEnter={() => setHoveredTrending('trending2')}
                            >
                                <p className='border-2 border-solid border-black px-2 py-1 rounded-full'>Press Release</p>
                                <div className='flex flex-col md:flex-row justify-between w-full'>
                                    <p className='text-lg md:text-xl font-bold w-full md:w-4/5 mb-4 md:mb-0'>
                                        Schbang, India's Largest Independent Agency, Cements Its Status as a Global Challenger...
                                    </p>
                                    <img 
                                        src={data.Home.trending.image2} 
                                        className='w-full h-48 object-cover rounded-lg md:hidden mb-4'
                                        alt="trending mobile" 
                                    />
                                    <p className='hidden md:block text-xl text-gray-600'>2 minutes</p>
                                </div>
                            </div>

                            {/* Third content block */}
                            <div
                                className={`flex w-full justify-start flex-col items-start gap-8 md:gap-16 border-b-2 pb-10 border-black ${trendingItemClass('trending3')}`}
                                onMouseEnter={() => setHoveredTrending('trending3')}
                            >
                                <p className='border-2 border-solid border-black px-2 py-1 rounded-full'>Press Release</p>
                                <div className='flex flex-col md:flex-row justify-between w-full'>
                                    <p className='text-lg md:text-xl font-bold w-full md:w-4/5 mb-4 md:mb-0'>
                                        Dabur Chyawanprash's 'Anti-Medicine Campaign' Returns with a Festive Twist
                                    </p>
                                    <img 
                                        src={data.Home.trending.image3} 
                                        className='w-full h-48 object-cover rounded-lg md:hidden mb-4'
                                        alt="trending mobile" 
                                    />
                                    <p className='hidden md:block text-xl text-gray-600'>2 minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop images - hidden on mobile */}
                    <div className='hidden md:flex w-2/5 h-[300px] md:h-auto relative h-full justify-center items-center'>  
                        <img
                            src={data.Home.trending.image}
                            className={`w-3/4 rounded-lg absolute transition-opacity duration-300 ${hoveredTrending === 'trending1' ? 'opacity-100' : 'opacity-0'}`}
                            alt="trending"
                        />
                        <img
                            src={data.Home.trending.image2}
                            className={`w-3/4 rounded-lg absolute transition-opacity duration-300 ${hoveredTrending === 'trending2' ? 'opacity-100' : 'opacity-0'}`}
                            alt="trending"
                        />
                        <img
                            src={data.Home.trending.image3}
                            className={`w-3/4 rounded-lg absolute transition-opacity duration-300 ${hoveredTrending === 'trending3' ? 'opacity-100' : 'opacity-0'}`}
                            alt="trending"
                        />
                    </div>
                </div>
            </section>
            
            {/* Footer section */}
            <section ref={footerRef} className={`fixed bottom-0 left-0 w-full bg-black text-white transition-transform duration-1000 ease-in-out ${ isScrolled ? 'translate-y-0' : 'translate-y-full'}`} style={{ zIndex: 30, height: '90vh', '@media (min-width: 768px)': { height: '70vh'}}}>
                <div className='bg-white text-black p-10 flex justify-around items-center flex-wrap border-white border-8 borer-solid rounded-b-3xl'>
                    <p className='p-4 border-black border-2 border-solid rounded-full'>India: 2 39PM</p>
                    <p className='p-4 border-black border-2 border-solid rounded-full'>India: 2 39PM</p>
                    <p className='p-4 border-black border-2 border-solid rounded-full'>India: 2 39PM</p>
                    <p className='p-4 border-black border-2 border-solid rounded-full'>India: 2 39PM</p>
                </div>
                
                <div className='container mx-auto px-4 md:px-6 py-10 md:py-20'>
                    <div className='flex justify-center items-center mb-10 md:mb-20'>
                        <img src={data.Home.footer.logo} className='w-full md:w-auto max-w-[80%] md:max-w-screen-lg' alt="footer logo" />
                    </div>
                    
                    {/* Bottom section */}
                    <div className='mt-10 md:mt-20 border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center'>
                        <div className='flex space-x-4 md:space-x-6'>
                            {data.Home.footer.socialIcons.map((platform, link) => (
                                <a 
                                    key={platform}
                                    href={link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='text-gray-400 hover:text-white transition-colors duration-300'
                                >
                                    <img src={platform}  />
                                </a>
                            ))}
                        </div>
                        <div className='text-xs md:text-sm text-gray-400 text-center md:text-left'>
                            © 2024 {data.Home.footer.title}
                        </div>
                        <div className='flex flex-wrap md:flex-nowrap justify-center gap-4 md:space-x-6'>
                            <span className='text-xs md:text-sm text-gray-400 hover:text-white cursor-pointer'>Privacy Policy</span>
                            <span className='text-xs md:text-sm text-gray-400 hover:text-white cursor-pointer'>Terms of Service</span>
                            <span className='text-xs md:text-sm text-gray-400 hover:text-white cursor-pointer'>Cookie Policy</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner section - now overlaps footer */}
            <section className="relative z-0 mb-40 mt-40 bg-transparent overflow-hidden">
                <div className='w-full h-[40vh] md:h-[50vh] bg-gradient-to-r from-white to-transparent relative'>
                    {/* Left interactive area */}
                    <div className='hidden md:block'>
                        <div 
                            className='w-1/4 z-10 h-full absolute top-0 left-0 bg-gradient-to-r from-white to-transparent cursor-w-resize'
                            onClick={() => handlePartnerSlide('left')}
                        >
                        </div>
                        <div 
                            className='w-1/4 z-10 h-full absolute top-0 right-0 bg-gradient-to-l from-white to-transparent cursor-e-resize'
                            onClick={() => handlePartnerSlide('right')}
                        >
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row justify-between items-center px-4 bg-white/80 backdrop-blur-sm'>
                        <div
                            id="partner-slider"
                            className='overflow-hidden scroll-smooth grayscale flex items-center w-full'
                            style={{ 
                                transform: `translateX(${slidePosition}px)`,
                                transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none'
                            }}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {/* Original set */}
                            {data.Home.partner.map((partner, index) => (
                                <div 
                                    key={index} 
                                    className={`${
                                        isMobileView 
                                            ? 'w-full min-w-full px-4' 
                                            : 'w-1/4 min-w-[25%]'
                                    } h-full flex flex-col items-center justify-center`}
                                >
                                    <img 
                                        src={partner.image} 
                                        className='w-1/3 grayscale mb-10' 
                                        alt="partner logo" 
                                    />
                                    <div className='text-center'>
                                        <h1 className='text-lg font-bold text-black'>{partner.title}</h1>
                                        <div className='flex justify-center'>
                                            <p className='text-md text-center text-gray-600 w-full md:w-1/2 px-4 md:px-0'>
                                                {partner.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicate set */}
                            {/* {data.Home.partner.map((partner, index) => (
                                <div 
                                    key={`dup-${index}`} 
                                    className={`${
                                        isMobileView 
                                            ? 'w-full min-w-full px-4' 
                                            : 'w-1/4 min-w-[25%]'
                                    } h-full flex flex-col items-center justify-center`}
                                >
                                    <img 
                                        src={partner.image} 
                                        className='w-1/3 grayscale mb-10' 
                                        alt="partner logo" 
                                    />
                                    <div className='text-center'>
                                        <h1 className='text-lg font-bold text-black'>{partner.title}</h1>
                                        <div className='flex justify-center'>
                                            <p className='text-md text-center text-gray-600 w-full md:w-1/2 px-4 md:px-0'>
                                                {partner.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
                <div className='bg-white text-black p-10 flex justify-around items-center flex-wrap border-white border-8 borer-solid rounded-b-3xl'>
                    <p className='p-4 border-black border-2 border-solid rounded-full'>India: 2 39PM</p>
                    <p className='p-4 border-black border-2 border-solid rounded-full'>India: 2 39PM</p>
                    <p className='p-4 border-black border-2 border-solid rounded-full'>India: 2 39PM</p>
                    <p className='p-4 border-black border-2 border-solid rounded-full'>India: 2 39PM</p>
                </div>
            </section>
        </div>
    )
}

export default HeroSection
