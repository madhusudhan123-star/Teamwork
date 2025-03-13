import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import data from '../utils/data'

const SingleBlog = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    
    // Determine if this is a solution blog or regular blog
    const isSolutionBlog = location.pathname.includes('solutionblogs');
    
    // Get blog data from location state or fetch from data.js based on blog type
    const blogPost = location.state?.blogData || 
        (isSolutionBlog ? data.Solutions.blogPosts[id] : data.Blogs.blogPosts[id]);

    // Redirect if no blog post is found
    if (!blogPost) {
        navigate(isSolutionBlog ? '/solution' : '/blogs');
        return null;
    }
    
    // Helper function to get the image from various locations in the post
    const getImage = (post) => {
        // Check all possible image locations
        if (post.image) return post.image;
        if (post.strategies && post.strategies.image) return post.strategies.image;
        // Default image if none found
        return 'https://via.placeholder.com/800x400?text=Case+Study';
    };

    // Handle rendering solution blog posts differently than regular blog posts
    if (isSolutionBlog) {
        return (
            <div className="min-h-screen py-12">
                <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                    <h1 className="text-4xl py-5 font-bold">{blogPost.client}</h1>
                    {blogPost.category && (
                        <div className="flex items-center py-2 text-gray-600">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                                {blogPost.category}
                            </span>
                        </div>
                    )}
                    
                    {/* Main Banner Image - Use the helper function to get the image */}
                    <img
                        src={getImage(blogPost)}
                        alt={blogPost.client}
                        className="w-full h-[400px] object-cover rounded-xl my-6"
                    />
                    
                    {/* Overview Section */}
                    {blogPost.overview && (
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold mb-3 relative">
                                <span className="relative z-10">Overview</span>
                                {/* <span className="absolute bottom-0 left-0 w-20 h-2 bg-yellow-200 z-0"></span> */}
                            </h2>
                            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-sm border border-yellow-100">
                                {typeof blogPost.overview === 'string' ? (
                                    blogPost.overview.split('\n').map((paragraph, index) => (
                                        <p key={index} className="text-gray-700 leading-relaxed mb-4">{paragraph.trim()}</p>
                                    ))
                                ) : (
                                    <p className="text-gray-700 leading-relaxed">{JSON.stringify(blogPost.overview)}</p>
                                )}
                            </div>
                        </div>
                    )}
                    
                    {/* Strategies Section */}
                    {blogPost.strategies && (
                        <div className="mt-12">
                            <h2 className="text-2xl font-semibold mb-6 relative">
                                <span className="relative z-10">Strategies</span>
                                {/* <span className="absolute bottom-0 left-0 w-20 h-2 bg-blue-200 z-0"></span> */}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {Object.entries(blogPost.strategies).map(([key, value], index) => {
                                    if (key === 'conclusion') return null; // Skip conclusion, we'll render it separately

                                    // Generate a color based on the strategy key
                                    const colors = ["blue", "indigo", "purple", "green", "teal", "orange", "red"];
                                    const colorIndex = index % colors.length;
                                    const color = colors[colorIndex];
                                    
                                    return (
                                        <div 
                                            key={key} 
                                            className={`bg-gradient-to-br from-${color}-50 to-white p-6 rounded-xl shadow-sm border border-${color}-100 transition-all duration-300 hover:shadow-md`}
                                        >
                                            <h3 className={`text-xl font-semibold capitalize mb-4 text-${color}-700 flex items-center`}>
                                                <span className={`inline-block w-8 h-8 mr-2 rounded-full bg-${color}-100 text-${color}-500 flex items-center justify-center text-sm`}>
                                                    {index + 1}
                                                </span>
                                                {key.replace(/_/g, ' ').toUpperCase()}
                                            </h3>
                                            
                                            {Array.isArray(value) ? (
                                                <ul className="space-y-2">
                                                    {value.map((item, i) => (
                                                        <li key={i} className={`flex items-start`}>
                                                            <span className={`inline-block w-4 h-4 mr-2 mt-1 rounded-full bg-${color}-100 flex-shrink-0`}></span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : typeof value === 'object' && value !== null ? (
                                                <div className="space-y-4">
                                                    {Object.entries(value).map(([subKey, subValue]) => (
                                                        <div key={subKey} className="mb-3">
                                                            <div className={`font-medium capitalize mb-2 text-${color}-600 border-b border-${color}-100 pb-1`}>
                                                                {subKey.replace(/_/g, ' ')}:
                                                            </div>
                                                            
                                                            {Array.isArray(subValue) ? (
                                                                <ul className="space-y-2">
                                                                    {subValue.map((item, i) => (
                                                                        <li key={i} className={`flex items-start`}>
                                                                            <span className={`inline-block w-4 h-4 mr-2 mt-1 rounded-full bg-${color}-100 flex-shrink-0`}></span>
                                                                            <span>{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            ) : typeof subValue === 'object' && subValue !== null ? (
                                                                // Handle nested objects
                                                                <div className="pl-4 border-l-2 border-gray-100">
                                                                    {Object.entries(subValue).map(([nestedKey, nestedValue]) => (
                                                                        <div key={nestedKey} className="mb-2">
                                                                            <span className="font-medium italic capitalize">{nestedKey.replace(/_/g, ' ')}: </span>
                                                                            {typeof nestedValue === 'object' ? 
                                                                                JSON.stringify(nestedValue) : 
                                                                                <span className="text-gray-700">{nestedValue}</span>
                                                                            }
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ) : (
                                                                <p className="text-gray-700">{subValue}</p>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p className="text-gray-700">{value}</p>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    
                    {/* Enhancements Section - Special handling for Aparna Construction case */}
                    {(blogPost.enhancements || blogPost.Enhancing) && (
                        <div className="mt-12">
                            <h2 className="text-2xl font-semibold mb-6 relative">
                                <span className="relative z-10">Enhancing {blogPost.client && blogPost.client.includes('Aparna') ? 'the 3D Walkthrough Video for Aparna Constructions' : ''}</span>
                                {/* <span className="absolute bottom-0 left-0 w-28 h-2 bg-blue-200 z-0"></span> */}
                            </h2>
                            <div className="grid grid-cols-1 gap-6">
                                {Object.entries(blogPost.enhancements || blogPost.Enhancing || {}).map(([key, value], index) => {
                                    // Group pairs of title and answer together
                                    if (!key.endsWith('_title')) return null;
                                    
                                    const baseKey = key.replace('_title', '');
                                    const answerKey = baseKey + '_answer';
                                    const title = value;
                                    const answer = (blogPost.enhancements || blogPost.Enhancing)[answerKey];
                                    
                                    // Generate a color
                                    const colors = ["blue", "indigo", "purple", "green", "teal", "orange"];
                                    const colorIndex = Math.floor(index / 2) % colors.length;
                                    const color = colors[colorIndex];
                                    
                                    return (
                                        <div 
                                            key={baseKey} 
                                            className={`bg-gradient-to-br from-${color}-50 to-white p-6 rounded-xl shadow-sm border border-${color}-100 transition-all duration-300 hover:shadow-md`}
                                        >
                                            <h3 className={`text-xl font-semibold mb-4 text-${color}-700`}>
                                                {title}
                                            </h3>
                                            <p className="text-gray-700 leading-relaxed">{answer}</p>
                                        </div>
                                    );
                                }).filter(Boolean)}
                            </div>
                        </div>
                    )}
                    
                    {/* Results Section - Handle both array and object formats */}
                    {blogPost.results && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-3 relative">
                                <span className="relative z-10">Results</span>
                                {/* <span className="absolute bottom-0 left-0 w-16 h-2 bg-green-200 z-0"></span> */}
                            </h2>
                            
                            {Array.isArray(blogPost.results) ? (
                                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-sm border border-green-100">
                                    <ul className="space-y-3">
                                        {blogPost.results.map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-700">
                                                <span className="inline-block w-5 h-5 mr-2 mt-0.5 rounded-full bg-green-100 flex-shrink-0"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(blogPost.results).map(([key, value]) => (
                                        <div key={key} className="bg-gradient-to-br from-green-50 to-white p-5 rounded-xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-300">
                                            <h3 className="font-medium capitalize text-green-800 mb-2">
                                                {key.replace(/_/g, ' ')}
                                            </h3>
                                            <p className="font-bold text-lg text-gray-800">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    
                    {/* Impact Section - Handle both string and object formats */}
                    {blogPost.impact && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-3 relative">
                                <span className="relative z-10">The Impact of Enhanced 3D Walkthroughs</span>
                                {/* <span className="absolute bottom-0 left-0 w-14 h-2 bg-blue-200 z-0"></span> */}
                            </h2>
                            
                            {typeof blogPost.impact === 'string' ? (
                                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm border border-blue-100">
                                    <p className="text-gray-700 leading-relaxed">{blogPost.impact}</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(blogPost.impact).map(([key, value]) => (
                                        <div key={key} className="bg-gradient-to-br from-blue-50 to-white p-5 rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
                                            <h3 className="font-medium capitalize text-blue-800 mb-2">
                                                {key.replace(/_/g, ' ')}
                                            </h3>
                                            <p className="font-bold text-lg text-gray-800">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    
                    {/* Conclusion Section - Get from strategies or directly from blogPost */}
                    {(blogPost.conclusion || (blogPost.strategies && blogPost.strategies.conclusion)) && (
                        <div className="mt-12">
                            <h2 className="text-2xl font-semibold mb-3 relative">
                                <span className="relative z-10">Conclusion</span>
                                {/* <span className="absolute bottom-0 left-0 w-24 h-2 bg-purple-200 z-0"></span> */}
                            </h2>
                            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-sm border border-purple-100">
                                <p className="text-gray-700 leading-relaxed">
                                    {blogPost.conclusion || blogPost.strategies.conclusion}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
    
    // Original rendering for regular blog posts
    return (
        <div className="min-h-screen py-12">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
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
