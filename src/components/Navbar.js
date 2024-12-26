import React, { useState } from 'react';
import data from '../utils/data';
import Link from 'react-ripples-hover';

const Navbar = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

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

                    {/* Solutions Dropdown */}
                    <div className="relative inline-block group"
                        onMouseEnter={() => setHoveredItem('solutions')}>
                        <button className={navItemClass('solutions') + ' flex items-center gap-2'}>
                            {data.navbar.navbarItems.solutions.title}
                            <img src={data.navbar.drop} className='w-5 transition-transform duration-300 group-hover:rotate-180' />
                        </button>
                        <div className="absolute w-[90vw] top-full left-[-50vw] mt-5 bg-white shadow-lg p-4 z-50 
                            opacity-0 invisible 
                            origin-top
                            scale-y-0
                            group-hover:opacity-100 
                            group-hover:visible 
                            group-hover:scale-y-100
                            transition-all duration-300 ease-out
                            flex flex-row">
                            <div className='w-1/4 text-2xl font-bold'>
                                <a href={data.navbar.navbarItems.solutions.items.brand_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.solutions.items.brand}
                                </a>
                                <a href={data.navbar.navbarItems.solutions.items.tech_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.solutions.items.tech}
                                </a>
                                <a href={data.navbar.navbarItems.solutions.items.media_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.solutions.items.media}
                                </a>
                            </div>
                            <div className="flex-1 grid grid-cols-2 gap-4">
                                <a href={data.navbar.navbarItems.solutions.items.img1_link}>
                                    <img src={data.navbar.navbarItems.solutions.items.img1} alt="solution 1" className="w-full" />
                                </a>
                                <a href={data.navbar.navbarItems.solutions.items.img2_link}>
                                    <img src={data.navbar.navbarItems.solutions.items.img2} alt="solution 2" className="w-full" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* About Dropdown */}
                    <div className="relative inline-block group"
                        onMouseEnter={() => setHoveredItem('about')}>
                        <button className={navItemClass('about') + ' flex items-center gap-2'}>
                            {data.navbar.navbarItems.about.title}
                            <img src={data.navbar.drop} className='w-5 transition-transform duration-300 group-hover:rotate-180' />
                        </button>
                        <div className="absolute top-full left-[-55vw] mt-5 bg-white shadow-lg p-4 w-[90vw] z-50 
                            opacity-0 invisible 
                            origin-top
                            scale-y-0
                            group-hover:opacity-100 
                            group-hover:visible 
                            group-hover:scale-y-100
                            transition-all duration-300 ease-out
                            flex flex-row">
                            <div className='w-1/5 text-2xl font-bold'>
                                <a href={data.navbar.navbarItems.solutions.items.brand_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.about.items.how}
                                </a>
                                <a href={data.navbar.navbarItems.solutions.items.tech_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.about.items.our}
                                </a>
                                <a href={data.navbar.navbarItems.solutions.items.media_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.about.items.news}
                                </a>
                                <a href={data.navbar.navbarItems.solutions.items.media_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.about.items.schbanf}
                                </a>
                                <a href={data.navbar.navbarItems.solutions.items.media_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.about.items.csr}
                                </a>
                                <a href={data.navbar.navbarItems.solutions.items.media_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.about.items.meet}
                                </a>
                            </div>
                            <div className="w-4/5 grid grid-cols-2 gap-2 mt-2">
                                <a href={data.navbar.navbarItems.about.items.img1_link}>
                                    <img src={data.navbar.navbarItems.about.items.img1} alt="about 1" className="w-full" />
                                </a>
                                <a href={data.navbar.navbarItems.about.items.img2_link}>
                                    <img src={data.navbar.navbarItems.about.items.img2} alt="about 2" className="w-full" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Resources Dropdown */}
                    <div className="relative inline-block group"
                        onMouseEnter={() => setHoveredItem('resources')}>
                        <button className={navItemClass('resources') + ' flex items-center gap-2'}>
                            {data.navbar.navbarItems.resource.title}
                            <img src={data.navbar.drop} className='w-5 transition-transform duration-300 group-hover:rotate-180' />
                        </button>
                        <div className="absolute top-full left-[-60vw] mt-5 bg-white shadow-lg p-4 w-[90vw] z-50 
                            opacity-0 invisible 
                            origin-top
                            scale-y-0
                            group-hover:opacity-100 
                            group-hover:visible 
                            group-hover:scale-y-100
                            transition-all duration-300 ease-out
                            flex flex-row">
                            <div className='w-1/5 text-2xl font-bold'>
                                <a href={data.navbar.navbarItems.solutions.items.brand_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.resource.items.blog}
                                </a>
                                <a href={data.navbar.navbarItems.solutions.items.tech_link} className="block py-2 hover:bg-gray-100">
                                    {data.navbar.navbarItems.resource.items.the}
                                </a>
                            </div>
                            <div className="w-4/5 grid grid-cols-2 gap-2 mt-2">
                                <a href={data.navbar.navbarItems.resource.items.img1_link}>
                                    <img src={data.navbar.navbarItems.resource.items.img1} alt="resource 1" className="w-full" />
                                </a>
                                <a href={data.navbar.navbarItems.resource.items.img2_link}>
                                    <img src={data.navbar.navbarItems.resource.items.img2} alt="resource 2" className="w-full" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <a href={data.navbar.navbarItems.careers_link}
                        className={navItemClass('careers')}
                        onMouseEnter={() => setHoveredItem('careers')}>
                        {data.navbar.navbarItems.careers}
                    </a>
                    <div className='bg-black rounded-full '>
                        <Link
                            href={data.navbar.navbarItems.contact_link}
                            rippleColor="#FFF1C2"
                            duration={1.7}
                            className="bg-black rounded-full inline-flex items-center transition-all"
                            style={{ borderRadius: '9999px' }} // Ensuring border-radius is always applied
                        >
                            <div className='whitespace-nowrap text-white'>
                                {data.navbar.navbarItems.contact}
                                <span className="ml-1">{data.navbar.navbarItems.contact_img}</span>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                    <div className="pt-20 px-6 h-full overflow-y-auto">
                        <a href={data.navbar.navbarItems.work_link} className="block py-3 text-xl">
                            {data.navbar.navbarItems.work}
                        </a>

                        {/* Mobile Solutions Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleMobileDropdown('solutions')}
                                className="flex items-center justify-between w-full py-3 text-xl"
                            >
                                {data.navbar.navbarItems.solutions.title}
                                <img
                                    src={data.navbar.drop}
                                    className={`w-4 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`pl-4 transition-all duration-300 ${activeDropdown === 'solutions' ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
                                {Object.keys(data.navbar.navbarItems.solutions.items).map((key) => {
                                    if (!key.includes('link') && !key.includes('img')) {
                                        return (
                                            <a key={key} href={data.navbar.navbarItems.solutions.items[`${key}_link`]} className="block py-2">
                                                {data.navbar.navbarItems.solutions.items[key]}
                                            </a>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>

                        {/* Mobile About Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleMobileDropdown('about')}
                                className="flex items-center justify-between w-full py-3 text-xl"
                            >
                                {data.navbar.navbarItems.about.title}
                                <img
                                    src={data.navbar.drop}
                                    className={`w-4 transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`pl-4 transition-all duration-300 ${activeDropdown === 'about' ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
                                {Object.keys(data.navbar.navbarItems.about.items).map((key) => {
                                    if (!key.includes('link') && !key.includes('img')) {
                                        return (
                                            <a key={key} href={data.navbar.navbarItems.about.items[`${key}_link`]} className="block py-2">
                                                {data.navbar.navbarItems.about.items[key]}
                                            </a>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>

                        {/* Mobile Resources Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleMobileDropdown('resources')}
                                className="flex items-center justify-between w-full py-3 text-xl"
                            >
                                {data.navbar.navbarItems.resource.title}
                                <img
                                    src={data.navbar.drop}
                                    className={`w-4 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <div className={`pl-4 transition-all duration-300 ${activeDropdown === 'resources' ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
                                {Object.keys(data.navbar.navbarItems.resource.items).map((key) => {
                                    if (!key.includes('link') && !key.includes('img')) {
                                        return (
                                            <a key={key} href={data.navbar.navbarItems.resource.items[`${key}_link`]} className="block py-2">
                                                {data.navbar.navbarItems.resource.items[key]}
                                            </a>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>

                        <a href={data.navbar.navbarItems.careers_link} className="block py-3 text-xl">
                            {data.navbar.navbarItems.careers}
                        </a>

                        <div className="mt-4">
                            <Link
                                href={data.navbar.navbarItems.contact_link}
                                rippleColor="#FFF1C2"
                                duration={1.7}
                                className="bg-black text-white rounded-full px-6 py-3 inline-block w-full text-center"
                            >
                                {data.navbar.navbarItems.contact}
                                <span className="ml-1">{data.navbar.navbarItems.contact_img}</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
