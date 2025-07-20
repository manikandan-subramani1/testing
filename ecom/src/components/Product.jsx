import React from "react";
import { Link } from "react-router-dom";
import Navebar from "./Navebar";

const product = {
    name: "Wireless Headphones",
    price: "$99.99",
    description:
        "Experience high-fidelity sound with these wireless headphones. Featuring noise cancellation, long battery life, and a comfortable fit for all-day use.",
    image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    rating: 4.5,
    reviews: 120,
};

const Product = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
            <div className="flex flex-col md:flex-row gap-8">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full md:w-1/2 rounded-lg object-cover"
                />
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-400 text-xl mr-2">
                                {"★".repeat(Math.floor(product.rating))}
                                {"☆".repeat(5 - Math.floor(product.rating))}
                            </span>
                            <span className="text-gray-600 ml-2">
                                ({product.reviews} reviews)
                            </span>
                        </div>
                        <p className="text-gray-700 mb-6">{product.description}</p>
                        <div className="text-2xl font-semibold text-green-600 mb-6">
                            {product.price}
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;