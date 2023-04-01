// Product.js

import React from 'react';

function Product(props) {
  const { name, price, image, onAddToCart } = props;

  const handleAddToCart = () => {
    const product = { name, price };
    onAddToCart(product);
  };

  return (
    <div className="product">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
