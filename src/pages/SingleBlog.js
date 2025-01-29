import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import data from '../utils/data'

const SingleBlog = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    // Get blog data from location state or fetch from data.js
    const blogPost = location.state?.blogData || data.Blogs.blogPosts[id];

    // Redirect to blogs page if no blog post is found
    if (!blogPost) {
        navigate('/blogs');
        return null;
    }

    return (
        <div className="min-h-screen py-12">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl py-5 font-bold">{blogPost.title}</h1>
                <div className="flex items-center py-5 text-gray-600 space-x-4">
                    <span>{blogPost.date}</span>
                </div>
                <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-[400px] object-cover rounded-xl mb-8"
                />
                <div className="space-y-4">
                    <div className="prose max-w-none">
                        {blogPost.content.split('\n').map((paragraph, index) => (
                            <p key={index} className="my-4 text-gray-700 leading-relaxed">
                                {paragraph.trim()}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
