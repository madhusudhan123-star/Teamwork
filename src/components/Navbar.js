import React, { useState } from 'react';
import data from '../utils/data';
import Link from 'react-ripples-hover';

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isHovered, setIsHovered] = useState(false);


    const navItemClass = (itemName) => `
        text-gray-700 transition-opacity duration-300
        ${hoveredItem && hoveredItem !== itemName ? 'opacity-30' : 'opacity-100'}
    `;

    const toggleMobileDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    return (
        <nav className="bg-white py-4 font-sora relative">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-xl font-bold">
                    <img src={data.navbar.logo} className='w-3/5' alt="logo" />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className={`w-6 h-0.5 bg-black transition-all duration-300 mb-1.5 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-black transition-all duration-300 mb-1.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                {/* Desktop Menu */}
                <div className="space-x-12 hidden md:flex items-center"
                    onMouseLeave={() => setHoveredItem(null)}>

                    <a href={data.navbar.navbarItems.work_link}
                        className={navItemClass('work')}
                        onMouseEnter={() => setHoveredItem('work')}>
                        {data.navbar.navbarItems.work}
                    </a>

                    {/* About Dropdown */}
                    <div className="relative inline-block group"
                        onMouseEnter={() => setHoveredItem('solutions')}>
                        <button className={navItemClass('solutions') + ' flex items-center gap-2 whitespace-nowrap'}>
                            <a href={data.navbar.navbarItems.solutions.aboutlink}>
                                {data.navbar.navbarItems.solutions.title}
                            </a>
                        </button>
                    </div>

                    {/* About Dropdown */}
                    <div className="relative inline-block group"
                        onMouseEnter={() => setHoveredItem('about')}>
                        <button className={navItemClass('about') + ' flex items-center gap-2 whitespace-nowrap'}>
                            <a href={data.navbar.navbarItems.about.sollink}>
                                {data.navbar.navbarItems.about.title}
                            </a>
                        </button>
                    </div>

                    {/* Resources Dropdown */}
                    <div className="relative inline-block group"
                        onMouseEnter={() => setHoveredItem('resources')}>
                        <button className={navItemClass('resources') + ' flex items-center gap-2 whitespace-nowrap'}>
                            <a href={data.navbar.navbarItems.resource.bloglink}>
                                {data.navbar.navbarItems.resource.title}
                            </a>
                        </button>
                    </div>
                    <div className='bg-black rounded-full '>
                        <Link
                            href={data.navbar.navbarItems.contact_link}
                            rippleColor="#FFFFFF"
                            duration={1.7}
                            className="bg-black rounded-full inline-flex items-center text-white hover:text-black transition-all"
                            style={{ borderRadius: '9999px' }} // Ensuring border-radius is always applied
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)} // Ensuring border-radius is always applied
                        >
                            <div style={{ color: isHovered ? 'black' : 'white', }} className='whitespace-nowrap'>
                                {data.navbar.navbarItems.contact}
                                <span className="ml-1">{data.navbar.navbarItems.contact_img}</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <div className="pt-20 px-6 h-full overflow-y-auto">
                        {/* Home Link */}
                        <a
                            href={data.navbar.navbarItems.work_link}
                            className="block py-3 text-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {data.navbar.navbarItems.work}
                        </a>

                        {/* About Link */}
                        <a
                            href={data.navbar.navbarItems.solutions.aboutlink}
                            className="block py-3 text-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {data.navbar.navbarItems.solutions.title}
                        </a>

                        {/* Solutions Link */}
                        <a
                            href={data.navbar.navbarItems.about.sollink}
                            className="block py-3 text-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {data.navbar.navbarItems.about.title}
                        </a>

                        {/* Blogs Link */}
                        <a
                            href={data.navbar.navbarItems.resource.bloglink}
                            className="block py-3 text-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {data.navbar.navbarItems.resource.title}
                        </a>

                        {/* Contact Link */}
                        <a
                            href={data.navbar.navbarItems.contact_link}
                            className="block py-3 text-xl"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {data.navbar.navbarItems.contact}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
