import React from 'react';
import { useDispatch } from 'react-redux';
import {increment} from "../../actions"

function AddButton({ item }) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    
    const existingCart = localStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];
    const newItem = {
      ...item,
      quantity: 1
    };
    cart.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    dispatch(increment())
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
}

export default AddButton;