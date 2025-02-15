import React from 'react';
import { Link } from 'react-router-dom';
import LinkRipple from 'react-ripples-hover';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-sora px-4">
            <div className="text-center">
                <h1 className="text-6xl md:text-9xl font-bold mb-4">404</h1>
                <h2 className="text-2xl md:text-4xl font-bold mb-8">Page Not Found</h2>
                <p className="text-gray-600 mb-12 text-base md:text-lg">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <div className="bg-black rounded-full hover:text-black inline-block">
                    <LinkRipple
                        rippleColor="#FFFFFF"
                        duration={1.7}
                        className="bg-black rounded-full hover:bg-white transition-colors"
                    >
                        <Link to="/" className="block px-8 py-4 text-white hover:text-black transition-colors">
                            Return Home
                        </Link>
                    </LinkRipple>
                </div>
            </div>
        </div>
    );
};

export default Error;