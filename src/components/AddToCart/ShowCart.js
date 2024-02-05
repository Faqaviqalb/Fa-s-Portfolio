import React, {useState,useEffect} from 'react';
import { FaStar,FaPlus,FaMinus  } from "react-icons/fa";

import { useDispatch } from 'react-redux';
import {increment,decrement } from "../../actions"

const ShowCart = () => {   
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
    const cartData = localStorage.getItem('cart');
    setCart(cartData ? JSON.parse(cartData) : []);
    }, []);

    const handleDecrement = (itemId) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId) {
                item.quantity -= 1;
            }

            return item;

        }).filter((item) => item.quantity > 0);
            setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        dispatch(decrement())
    };

    const handleIncrement = (itemId) => {
        const updatedCart = cart.map((item) => {
            if (item.id === itemId) {
            item.quantity += 1;
            }
            return item;
        });

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        dispatch(increment())
    };
    let stars = [];
    const countStars = (count) => {
    stars = [];
    for (let i = 0; i < count; i++) {
        stars.push(<FaStar className='stared' key={i} />);
    }
    for (let j = 0; j < 5 - count; j++) {
        stars.push(<FaStar className='notStared' key={`1${j}`} />);
    }
    };
    return (
    <div className="allCartsSideBar">
            {cart.map(({ id, image, name, price, rating,quantity }) => (
            <article className='cart' key={id}>
                <img src={image} alt={name} />
                <div className="rating">
                    {countStars(rating)}
                    {stars}
                </div>            
                <div className="d-flex">
                    <div className="plantTitle">{name}</div>
                    <div className="price">{price}</div>                             
                </div>
                <div className="quantitySection d-flex">
                    <button className='remove' onClick={() => handleDecrement(id)}><FaMinus /></button>
                    <div className="quantity">{quantity}</div>
                    <button className='add' onClick={() => handleIncrement(id)}><FaPlus /></button>
                </div>
                
            </article> 
            ))}
    </div>
    );
};

export default ShowCart;