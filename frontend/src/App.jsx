import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screen/Home';
import Login from './screen/Login';
import Signup from './screen/Signup';
import { CartProvider } from './components/ContextReducer';
import Cart from './screen/Cart';
import MyOrder from './screen/MyOrder';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myorders" element={<MyOrder />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
