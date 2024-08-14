import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatchCart } from './ContextReducer';

const ProductCard = ({ imageSrc, title, price, description }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatchCart();

  const handleAddToCart = () => {
    if (quantity === 0) setQuantity(1);
    dispatch({ type: 'ADD', payload: { imageSrc, title, price, description, quantity: 1 } });
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    dispatch({ type: 'UPDATE', payload: { imageSrc, title, price, description, quantity: quantity + 1 } });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      dispatch({ type: 'UPDATE', payload: { imageSrc, title, price, description, quantity: quantity - 1 } });
    } else {
      setQuantity(0);
      dispatch({ type: 'REMOVE', payload: { title } });
    }
  };

  return (
    <div className="w-72 max-w-xs h-[350px] rounded-lg overflow-hidden shadow-lg p-4 bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col">
      <img className="w-full h-32 object-cover" src={imageSrc} alt={title} />
      <div className="flex flex-col flex-grow">
        <div className="font-bold text-lg mb-1 truncate">{title}</div>
        <div className="text-gray-800 text-sm mb-2 flex-grow overflow-hidden">{description}</div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {quantity === 0 ? (
            <button
              onClick={handleAddToCart}
              className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center space-x-2">
              <button
                onClick={handleDecrement}
                className="bg-red-500 text-white py-1 px-3 rounded"
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={handleIncrement}
                className="bg-green-500 text-white py-1 px-3 rounded"
              >
                +
              </button>
            </div>
          )}
        </div>
        <div className="text-gray-600 text-lg ml-2">₹{(price * (quantity || 1)).toFixed(2)}</div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProductCard;
