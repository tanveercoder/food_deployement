import React from 'react';
import { useDispatchCart, useCart } from '../components/ContextReducer';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems } = useCart();
  const dispatch = useDispatchCart();
  const navigate = useNavigate();

  const handleRemove = (title) => {
    dispatch({ type: 'REMOVE', payload: { title } });
  };

  const handleIncrement = (title) => {
    const item = cartItems.find(item => item.title === title);
    if (item) {
      dispatch({ type: 'UPDATE', payload: { ...item, quantity: item.quantity + 1 } });
    }
  };

  const handleDecrement = (title) => {
    const item = cartItems.find(item => item.title === title);
    if (item) {
      if (item.quantity > 1) {
        dispatch({ type: 'UPDATE', payload: { ...item, quantity: item.quantity - 1 } });
      } else {
        handleRemove(title); // Remove item if quantity is 1
      }
    }
  };

  const handleCheckout = async () => {
    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
      alert("You need to be logged in to place an order.");
      navigate('/login');
      return;
    }

    const orderData = {
      order_data: cartItems,
      email: userEmail,
      order_date: new Date().toISOString(),
    };

    try {
      const response = await fetch("https://food-deployement-1.onrender.com/orderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.status === 200) {
        dispatch({ type: 'CLEAR' });
        navigate('/cart');
      } else {
        alert("Order failed. Please try again.");
      }
    } catch (error) {
      alert("Error placing order. Please try again.");
    }
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="relative p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
      >
        Back
      </button>
      <div className="mt-12">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Your Cart</h1>
        <div className="space-y-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-600">Your cart is empty</div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white border rounded-lg shadow-sm p-4 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                  <div className="flex flex-col">
                    <div className="text-lg font-semibold text-gray-700">{item.title}</div>
                    <div className="text-gray-600">₹{(item.price * item.quantity).toFixed(2)}</div>
                    <div className="text-gray-600">Quantity: {item.quantity}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 ml-auto">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(item.title)}
                      className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-xl font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.title)}
                      className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.title)}
                    className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="mt-8 border-t pt-6 flex justify-between items-center">
            <div className="flex justify-between font-semibold text-lg text-gray-800 mt-2">
              <span>Total:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <button
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
