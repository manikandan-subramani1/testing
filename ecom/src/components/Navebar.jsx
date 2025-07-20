import React from 'react'
import { Link } from 'react-router-dom';

const Navebar = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
               <Link to="/"><h1 className="text-2xl font-bold text-gray-800">Ecom</h1></Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
                        <li><Link to="/About" className="text-gray-600 hover:text-gray-900">About</Link></li>
                        <li><Link to="/Product" className="text-gray-600 hover:text-gray-900">Product</Link></li>
                        <li><Link to="/ContactForm" className="text-gray-600 hover:text-gray-900">Contact Form</Link></li>
                        {/* <li><a href="#" className="text-gray-600 hover:text-gray-900">Cart</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navebar
