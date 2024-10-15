import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPizzaSlice, FaUserCircle, FaSignInAlt, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <FaPizzaSlice className="text-4xl text-red-500" />
                    <h1 className="md:text-2xl font-bold text-gray-800 poppins">LaunchBox</h1>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes className="text-3xl text-gray-700" /> : <FaBars className="text-3xl text-gray-700" />}
                </div>

                {/* Navigation Links */}
                <nav className={`md:flex space-x-8 ${isMobileMenuOpen ? 'flex flex-col absolute bg-white shadow-lg w-full left-0 top-16' : 'hidden'}`}>
                    <Link to="/" className="flex items-center text-gray-700 hover:text-red-500 transition duration-300 p-2">
                        <FaPizzaSlice className="mr-1" /> Home
                    </Link>
                    <Link to="/menu" className="flex items-center text-gray-700 hover:text-red-500 transition duration-300 p-2">
                        <FaInfoCircle className="mr-1" /> Menu
                    </Link>
                    <Link to="/about" className="flex items-center text-gray-700 hover:text-red-500 transition duration-300 p-2">
                        <FaInfoCircle className="mr-1" /> About Us
                    </Link>
                    <Link to="/contact" className="flex items-center text-gray-700 hover:text-red-500 transition duration-300 p-2">
                        <FaInfoCircle className="mr-1" /> Contact
                    </Link>
                </nav>

                {/* User Action Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/signin">
                        <button className="flex items-center text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded-full transition duration-300">
                            <FaSignInAlt className="mr-2" />
                            <span>Sign In</span>
                        </button>
                    </Link>
                </div>
            </div>

        </header>
    );
};

export default Header;
