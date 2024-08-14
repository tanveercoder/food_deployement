import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../components/ContextReducer'; // Adjust the import based on your setup

function Navbar() {
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem("authToken");
  const { cartItems } = useCart(); // Retrieve cart items from context

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/"; // Redirect to home or any other page after logout
  };

  // Calculate total quantity of products in the cart
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gradient-to-r from-red-600 to-red-800 shadow-lg">
      <div className="flex justify-between items-center p-4 md:px-8">
        {/* Logo and Navigation Links */}
        <div className="flex items-center space-x-6">
          <img
            src="https://hungryhippo.ca/wp-content/uploads/2020/06/logo.png"
            alt="Hippo Logo"
            className="w-36 h-14 object-contain"
          />
          <div className="hidden md:flex space-x-4">
            {!isAuthenticated ? (
              <Link to="/" className="text-white text-xl font-semibold hover:text-gray-300 transition duration-300">
                Home
              </Link>
            ) : (
              location.pathname === "/myorders" ? (
                <Link to="/" className="text-white text-xl font-semibold hover:text-gray-300 transition duration-300">
                  Home
                </Link>
              ) : (
                <Link to="/myorders" className="text-white text-xl font-semibold hover:text-gray-300 transition duration-300">
                  My Orders
                </Link>
              )
            )}
          </div>
        </div>

        {/* Cart and Logout Buttons */}
        <div className="flex items-center space-x-6 ml-auto">
          {isAuthenticated && (
            <>
              <Link to="/cart" className="relative flex items-center">
                <div className="relative flex items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {totalQuantity > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold rounded-full px-2 py-1 transform translate-x-1/2 -translate-y-1/2">
                      {totalQuantity}
                    </span>
                  )}
                </div>
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </>
          )}

          {!isAuthenticated && (
            <Link to="/login">
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
