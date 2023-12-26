import React from 'react';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.name}>
          <p>Name: {product.name}</p>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          {/* Ensure that price is a valid number */}
          <button onClick={() => addToCart(product, 'L')}>Buy Large</button>
          <button onClick={() => addToCart(product, 'M')}>Buy Medium</button>
          <button onClick={() => addToCart(product, 'S')}>Buy Small</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
