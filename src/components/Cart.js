// Cart.js

import React from 'react';

function Cart(props) {
  const { cartItems } = props;

  const cartItemsCount = cartItems.length;
  const cartItemsTotal = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItemsCount === 0 && <p>Your cart is empty.</p>}
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      {cartItemsCount > 0 && (
        <>
          <p>Items: {cartItemsCount}</p>
          <p>Total: ${cartItemsTotal}</p>
        </>
      )}
    </div>
  );
}

export default Cart;
