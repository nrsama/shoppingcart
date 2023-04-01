import React, { useState } from 'react';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <div className="app">
      <div className="product-list">
        <Product
          name="Product 1"
          price={10}
          image="https://via.placeholder.com/150"
          onAddToCart={handleAddToCart}
        />
        <Product
          name="Product 2"
          price={20}
          image="https://via.placeholder.com/150"
          onAddToCart={handleAddToCart}
        />
        <Product
          name="Product 3"
          price={30}
          image="https://via.placeholder.com/150"
          onAddToCart={handleAddToCart}
        />
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;