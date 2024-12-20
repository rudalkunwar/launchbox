import React, { useState } from 'react'
import { FaPizzaSlice } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import apiClient from '../../services/api'

function LogIn() {
    const [isLoading, setLoading] = useState(false);
    const userSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            const respose = await apiClient.post('/login', {
                email, password
            });

            if (respose) {
                toast.success('register complete');
            } else {
                console.log(res);
                toast.error('failed to register');
                setLoading(false);
            }
        } catch (e) {
            console.log(e);
            toast.error('failed to register');
            setLoading(false);
        }
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <FaPizzaSlice />
                    <span className='px-2'>LaunchBox</span>
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign into an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={userSignup}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {
                                        isLoading ? (<BeatLoader size={10} />) : (<span>Login</span>)
                                    }
                                </button>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account? <Link to="/signup" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Register here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogIn;