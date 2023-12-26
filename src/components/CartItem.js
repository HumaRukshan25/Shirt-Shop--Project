// Assuming you have a container component or your App component where CartItem is used
import React from 'react';
import './CartItem.css';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item-container">
      <p>Name: {item.name}</p>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <hr />
    </div>
  );
};

export default CartItem;
