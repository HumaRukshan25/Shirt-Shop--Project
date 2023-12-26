// Cart.js
import React from 'react';
import './Cart.css';
import CartItem from './CartItem'; // Import CartItem

const Cart = ({ cart, placeOrder, closeCart }) => {
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.name} item={item} />
      ))}
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      <button onClick={placeOrder}>Place Order</button>
      <button onClick={closeCart}>Close</button>
    </div>
  );
};

export default Cart;
