import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:5000/api/foodData');
                const products = response.data[0].map(product => ({
                    ...product,
                    price: Number(product.price) // Ensure price is a number
                }));
                setProducts(products); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <div className="flex flex-wrap justify-center gap-6">
                {products.map((product, index) => (
                    <div key={index} className="w-full max-w-xs">
                        <ProductCard
                            imageSrc={product.img || 'https://via.placeholder.com/150'} // Placeholder image if not available
                            title={product.name}
                            price={product.price || 100} // Default price if not available
                            description={product.description || 'No description available'} // Default description if not available
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
