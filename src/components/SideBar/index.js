import React, { useState,useEffect } from 'react'
import { FaShoppingCart,FaTimes } from 'react-icons/fa';
import ShowCart from "../AddToCart/ShowCart"
import "./SideBar.css"
import { useLocation} from 'react-router-dom';

import { useSelector } from "react-redux";

function SideBar() {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ totalQuantity,setTotalQuantity] = useState(0);
    const location = useLocation();

    const counter = useSelector( state=> state.counter)

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    useEffect(() => {
        const cartData = localStorage.getItem("cart");
        const cart = cartData ? JSON.parse(cartData) : [];
        const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
        setTotalQuantity(totalQuantity);
    }, [totalQuantity]);

    const handleShopClick = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };
  return (
    <div>
        <div className="nav-icon cart" onClick={handleShopClick}>
            <FaShoppingCart  />
            <div className="items-number">{counter}</div>
        </div>
        {isOpen && totalQuantity>0 &&(
            <div className="sidebar">
            <button onClick={closeSidebar} className='closeBtn'> <FaTimes /> </button>
            <ShowCart />
            </div>
        )}    
    </div>
  )
}

export default SideBar
