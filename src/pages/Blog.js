import React from 'react'
import { Link } from 'react-router-dom'
import data from '../utils/data'

const Blog = () => {
    const { blogPosts } = data.Blogs;

    return (
        <div className="min-h-screen py-12">
            <div className=" px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
                    Digital Marketing Insights
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {blogPosts.map((post, index) => (
                        <Link
                            to={`/blogs/${index}`}
                            key={index}
                            state={{ blogData: post }}
                        >
                            <div className="rounded-xl overflow-hidden">
                                <img
                                    className="w-full h-48 object-cover"
                                    src={post.image}
                                    alt={post.title}
                                />
                                <div className="">
                                    <h2 className="text-lg ">
                                        {post.title}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog