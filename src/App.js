import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (product, size) => {
    const existingItem = cart.find((item) => item.name === product.name && item.size === size);

    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      setCart([...cart, { ...product, size }]);
    }
  };

  const placeOrder = () => {
    // Handle placing order logic
    console.log('Order placed!');
    setCart([]);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <h1>T-Shirt Shop</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} addToCart={addToCart} />
      <button onClick={() => setIsCartOpen(true)}>Cart ({cart.length})</button>
      {isCartOpen && <Cart cart={cart} placeOrder={placeOrder} closeCart={closeCart} />}
    </div>
  );
};

export default App;
