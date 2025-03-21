import React from 'react'
import ServicesAccordion from '../components/ServicesAccordion'
import { Link } from 'react-router-dom'
import data from '../utils/data'

const Solution = () => {
    const { blogPosts } = data.Solutions;

    // Helper function to get a short excerpt from the overview text
    const getExcerpt = (text, maxLength = 120) => {
        if (!text) return '';
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };
    
    // Helper function to get the image from various locations in the post
    const getImage = (post) => {
        // Check all possible image locations
        if (post.image) return post.image;
        if (post.strategies && post.strategies.image) return post.strategies.image;
        // Default image if none found
        return 'https://via.placeholder.com/300x200?text=Case+Study';
    };

    return (
        <div>
            <div className='min-h-screen py-8 md:py-12 px-4 md:px-10 flex flex-col md:flex-row gap-8'>
                <div className='w-full md:w-1/2'>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl mb-6 md:mb-12">Solutions</h1>
                    <p className='text-base md:text-lg font-medium'>
                        From creative video production to strategic digital marketing, we offer complete solutions for your brand's success. Our video content is designed to communicate your brand's message in a powerful and engaging way. We seamlessly integrate digital marketing to amplify your brand's reach across multiple platforms. Whether it's video ads, social media content, or search marketing, we provide all the tools you need to thrive.
                    </p>
                    <div className='w-full h-[1px] bg-black my-4 md:my-5'></div>
                    <p className='text-base md:text-lg font-medium'>
                        Our team crafts unique brand stories that connect with your target audience and enhance your digital presence. We help you build brand recognition by combining storytelling with effective digital marketing strategies. Let us handle everything from video production to campaign management, ensuring your brand gets noticed. Our solutions are designed to elevate your brand's image, drive engagement, and boost conversions. With our expertise in both video and digital marketing, we offer a holistic approach to growing your business.
                    </p>
                </div>
                <div className='w-full md:w-1/2'>
                    <ServicesAccordion />
                </div>
            </div>
            <div className='px-4 md:px-10 pb-8 md:pb-12'>
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">Case Studies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {blogPosts.map((post, index) => (
                        <Link
                            to={`/solutionblogs/${index}`}
                            key={index}
                            state={{ blogData: post }}
                        >
                            <div className="rounded-xl overflow-hidden h-full bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={getImage(post)}
                                    alt={post.client}
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">
                                        {post.client}
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        {post.category || "Case Study"}
                                    </p>
                                    <p className="mt-2 text-gray-700 text-sm">
                                        {getExcerpt(post.overview)}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Solution