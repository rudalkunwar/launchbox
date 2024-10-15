import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Home() {
    return (
        <section
            className="header-banner h-screen w-full bg-yellow-50 relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?semt=ais_hybrid)' }} // Change URL as needed
        >
            <div className="absolute inset-0 bg-opacity-30 "></div>
            <div className="flex flex-col items-center justify-center h-full relative z-10">
                <div className="rounded-full p-1 mt-8 bg-white shadow-lg transition-transform duration-300 transform hover:scale-105 flex items-center border border-red-300">
                    <input
                        type="text"
                        className="rounded-full px-4 py-2 focus:outline-none w-full bg-transparent placeholder-gray-500"
                        placeholder="Search here ..."
                    />
                    <button className="flex items-center justify-center text-sm bg-red-500 hover:bg-red-600 py-3 px-6 rounded-full text-white poppins transition duration-300">
                        <FaSearch className="mr-2" />
                        Search
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Home;
