import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCards from '../components/ProductCard';
import Carousel from '../components/Carosel'; // Ensure the correct component name
import ProductList from '../components/ProductList';

function Home() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Carousel />
        <div className="absolute inset-x- flex justify-center">
      
          
        </div>
      </div>
      <div className="py-8 bg-gray-100">
        <hr className="my-8 border-t border-gray-300" />
        <div className="mx-auto px-2">
          <ProductList />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
