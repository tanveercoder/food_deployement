import React from 'react';

function Footer() {
  return (
    <footer className="bg-white text-gray-800 p-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <img
              src="https://hungryhippo.ca/wp-content/uploads/2020/06/logo.png"
              alt="Hungary Hippo Logo"
              className="w-32 h-16 mb-4"
            />
            <p className="text-center md:text-left text-lg font-semibold">
              Satisfy your cravings with Hungary Hippo – delivering delicious meals to your doorstep.
            </p>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col md:flex-row items-center md:space-x-6 mb-6 md:mb-0">
            <a href="/about" className="hover:text-green-500">About Us</a>
            <a href="/contact" className="hover:text-green-500">Contact</a>
            <a href="/jobs" className="hover:text-green-500">Jobs</a>
            <a href="/press-kit" className="hover:text-green-500">Press Kit</a>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://twitter.com" className="text-blue-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://facebook.com" className="text-blue-600 hover:text-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://instagram.com" className="text-pink-500 hover:text-pink-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 2.162c3.19 0 3.57.012 4.83.07 1.38.068 2.572.309 3.4 1.138.828.827 1.07 2.02 1.138 3.4.058 1.26.07 1.64.07 4.83s-.012 3.57-.07 4.83c-.068 1.38-.309 2.572-1.138 3.4-.827.828-2.02 1.07-3.4 1.138-1.26.058-1.64.07-4.83.07s-3.57-.012-4.83-.07c-1.38-.065-2.644-.309-3.65-1.316-1.006-1.005-1.253-2.237-1.316-3.65-.057-1.27-.07-1.668-.07-4.883 0-3.215.013-3.613.07-4.883.065-1.406.31-2.644 1.316-3.65 1.005-1.006 2.237-1.253 3.65-1.316 1.27-.057 1.668-.07 4.883-.07zm0-2.162c-3.215 0-3.613.013-4.883.07-1.406.065-2.644.31-3.65 1.316-1.005 1.006-1.253 2.237-1.316 3.65-.057 1.27-.07 1.668-.07 4.883 0 3.215.013 3.613.07 4.883.065 1.406.31 2.644 1.316 3.65 1.006 1.005 2.237 1.253 3.65 1.316 1.27.057 1.668.07 4.883.07 3.215 0 3.613-.013 4.883-.07 1.406-.065 2.644-.31 3.65-1.316 1.005-1.006 1.253-2.237 1.316-3.65.057-1.27.07-1.668.07-4.883 0-3.215-.013-3.613-.07-4.883-.065-1.406-.31-2.644-1.316-3.65-1.006-1.005-2.237-1.253-3.65-1.316-1.27-.057-1.668-.07-4.883-.07zM12 6.62a5.38 5.38 0 1 0 0 10.758 5.38 5.38 0 0 0 0-10.758zm0 8.62a3.24 3.24 0 1 1 0-6.48 3.24 3.24 0 0 1 0 6.48zm4.89-8.28a1.075 1.075 0 1 0 0-2.15 1.075 1.075 0 0 0 0 2.15z"></path>
            </svg>
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-center border-t border-gray-300 pt-4">
          <p className="text-sm">
            &copy; 2024 Hungary Hippo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
