import React, { useState,useEffect } from 'react'
import Search from "../SearchComponents/search"
import "./leftSide.css"
import { FaTimes ,FaBars  } from 'react-icons/fa';
import { Link ,useLocation} from 'react-router-dom';
function LeftSideBar() {
    const [ isOpen, setIsOpen ] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);
    
    const handleSideBar = () => {
        setIsOpen(true);
    };

    const closeSidebar = () => {
        setIsOpen(false);
    };
  return (
    <div>
        <div className="left-menu" onClick={handleSideBar}>
            <FaBars />   
        </div>   
        {isOpen && (
            <div className="LeftSidebar">
                <button onClick={closeSidebar} className='closeBtn'> <FaTimes /> </button>
                <Search />
                <div className="left-navigations">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        )} 
      
    </div>
  )
}

export default LeftSideBar
