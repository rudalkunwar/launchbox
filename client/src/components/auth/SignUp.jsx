import React from 'react';
import { FaUser, FaEnvelope, FaLock, FaRegCheckCircle } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignUp = () => {





    return (
        <section className="flex flex-col md:flex-row h-screen items-center bg-gray-50">
            {/* Left Image Section */}
            <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img className="object-cover  w-full h-full" src="https://img.freepik.com/premium-photo/food-day_1275925-3918.jpg?w=740" alt="Sign Up Background" />
            </div>

            {/* Right Sign Up Form Section */}
            <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full h-100">
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create your account</h1>

                    <form className="mt-6" method="POST" onSubmit={userSignup}>
                        <div>
                            <label className="block text-gray-700" htmlFor="name">Full Name</label>
                            <div className="flex items-center border-b border-gray-300 focus:border-blue-500">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700" htmlFor="email">Email Address</label>
                            <div className="flex items-center border-b border-gray-300 focus:border-blue-500">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700" htmlFor="password">Password</label>
                            <div className="flex items-center border-b border-gray-300 focus:border-blue-500">
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Create a password"
                                    minLength="6"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700" htmlFor="confirmPassword">Confirm Password</label>
                            <div className="flex items-center border-b border-gray-300 focus:border-blue-500">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm your password"
                                    minLength="6"
                                    className="w-full px-4 py-3 rounded-lg bg-gray-200 focus:outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Sign Up</button>
                    </form>
                    <hr className="my-6 border-gray-300 w-full" />

                    {/* Google Login Button */}
                    <button type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                        <div className="flex items-center justify-center">
                            <FaGoogle className="w-6 h-6" />
                            <span className="ml-4">Log in with Google</span>
                        </div>
                    </button>
                    <p className="mt-8 text-center">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold">Log in</Link></p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
