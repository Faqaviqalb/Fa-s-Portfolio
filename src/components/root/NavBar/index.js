import React from 'react';
import logo from "../../../assets/images/logo.png";
import "./NavBar.css";
import { FaUserAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Search from "../../SearchComponents/search"
import SideBar from "../../SideBar/index"
import LeftSideBar from "../../LeftSideBar/index"

function NavBar({ searchQuery, setSearchQuery }) {
    const [ scrolled, setScrolled ] = useState(true);
    const [ isDesktop, setIsDesktop ] = useState(window.innerWidth > 998)
    useEffect(()=>{
        function onScroll(){
            if (window.scrollY > 50){
                setScrolled(false);
            }else{
                setScrolled(true);
            }
        }
        window.addEventListener("scroll" , onScroll);
        return () =>window.removeEventListener("scroll" , onScroll)
    },[])

    useEffect(()=>{
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 998);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])
  return (
    <div className={`${scrolled ? "scrolled" : ""} `}>
        {isDesktop ? (<div className='nav-container'>
            <div className="nav-sec left-sec">
                <Link to="/"><img src={ logo } alt="logo" /></Link>             
                <div className="navigations">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="nav-sec right-sec">
                <Search />
                <SideBar />            
                <div className="nav-icon user">      
                    <Link to="/profile" className="m-0"><FaUserAlt/></Link> 
                </div>                      
            </div>
        </div>) : (<div className='nav-container'>
            <div className="nav-sec">
                <LeftSideBar />  
                <Link to="/"> <img src={ logo } alt="logo" /> </Link>
            </div>
            <div className="nav-sec right-sec">
                <SideBar />
                <div className="nav-icon user">      
                    <Link to="/profile" className="m-0"><FaUserAlt/></Link> 
                </div>  
            </div>
        </div>)}

    </div>
  )
}

export default NavBar;
