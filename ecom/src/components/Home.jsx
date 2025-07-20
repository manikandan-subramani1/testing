import React from 'react';
import { Link } from 'react-router-dom';

const productImages = [
    "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80", // Watch
];

const productNames = [
   
   
    "Running Shoes",
    "DSLR Camera",
    
];

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-100 to-purple-100 py-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Welcome to Ecom</h2>
                        <p className="text-lg text-gray-600 mb-6">Discover the best products at unbeatable prices. Shop now and enjoy exclusive deals!</p>
                        <a href="/About" className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">Shop Now</a>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?auto=format&fit=crop&w=600&q=80"
                            alt="Ecom Hero"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section className="container mx-auto px-4 py-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-8">Featured Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4, 5,6,7,8].map((item, idx) => (
                        <div key={item} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                            <img
                                src={productImages[idx % productImages.length]}
                                alt={productNames[idx % productNames.length]}
                                className="mb-4 rounded h-36 w-36 object-cover"
                            />
                            <h4 className="text-lg font-semibold mb-2">{productNames[idx % productNames.length]}</h4>
                            <p className="text-gray-600 mb-4">Product {item}</p>
                            <Link to="/Product">
                                <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">Add to Cart</button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white shadow mt-12"></footer>
                <div className="container mx-auto px-4 py-6 text-center text-gray-500"></div>
            <footer className="bg-white shadow mt-12">
                <div className="container mx-auto px-4 py-6 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Ecom. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Home;