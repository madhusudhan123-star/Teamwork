import React, { useRef, useEffect, useState } from 'react';
import data from '../utils/data';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    return (
        <footer className={`w-full bg-black text-white transition-all duration-1000 ease-in-out `} >
            <div className='container mx-auto px-4 md:px-6 py-8 md:py-20'>
                {/* Logo */}
                <div className='flex justify-center items-center mb-8 md:mb-20'>
                    <img
                        src={data.Home.footer.logo}
                        className='w-1/2 md:w-auto max-w-full md:max-w-xl'
                        alt="footer logo"
                    />
                </div>

                {/* Footer Links and Info */}
                <div className='mt-8 md:mt-20 border-t border-gray-800 pt-6 md:pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10'>
                        {/* Social Icons */}
                        <div className='flex space-x-6 order-2 md:order-1'>
                            {data.Home.footer.socialIcons.map((icon, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className='hover:opacity-80 transition-opacity'
                                >
                                    <img src={icon} className="w-6 md:w-8" alt={`social-${index}`} />
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className='text-sm md:text-base text-gray-400 order-1 md:order-2'>
                            © 2024 {data.Home.footer.title}
                        </div>

                        {/* Navigation Links */}
                        <div className='flex flex-wrap justify-center gap-4 md:gap-6 order-3'>
                            <Link to="/about" className='text-sm text-gray-400 hover:text-white transition-colors'>About Us</Link>
                            <Link to="/contact" className='text-sm text-gray-400 hover:text-white transition-colors'>Contact</Link>
                            <Link to="/privacy" className='text-sm text-gray-400 hover:text-white transition-colors'>Privacy</Link>
                            <Link to="/policy" className='text-sm text-gray-400 hover:text-white transition-colors'>Policy</Link>
                            <Link to="/blogs" className='text-sm text-gray-400 hover:text-white transition-colors'>Blog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
// 