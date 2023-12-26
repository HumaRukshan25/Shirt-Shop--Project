import React, { useState } from 'react';
import './ProductForm.css';

const ProductForm = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantityL, setQuantityL] = useState(0);
  const [quantityM, setQuantityM] = useState(0);
  const [quantityS, setQuantityS] = useState(0);

  const handleAddProduct = () => {
    const product = {
      name,
      description,
      price: parseFloat(price),
      quantities: {
        L: quantityL,
        M: quantityM,
        S: quantityS,
      },
    };
    addProduct(product);
  };

  return (
    <div>
      <h2>Products</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Description:</label>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      <label>Price:</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      <label>Quantity (L):</label>
      <input type="number" value={quantityL} onChange={(e) => setQuantityL(e.target.value)} />
      <label>Quantity (M):</label>
      <input type="number" value={quantityM} onChange={(e) => setQuantityM(e.target.value)} />
      <label>Quantity (S):</label>
      <input type="number" value={quantityS} onChange={(e) => setQuantityS(e.target.value)} />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductForm;
