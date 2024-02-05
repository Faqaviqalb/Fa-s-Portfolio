import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo.png"
import "./Footer.css"
import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,FaAngleRight  } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer'>
        <div className="col-md-4 col-12 footer-section">
            <div className="storeHeader">
                <img src={logo} alt="logo" />
                <h3>Green Plant Store</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto aliquid expedita quam odio omnis id blanditiis eos quibusdam deserunt veritatis.</p>
            
        </div>
        <div className="col-md-3 col-12 footer-section">
            <h3>Links</h3>
            <Link to="/"><FaAngleRight />Home</Link>
            <Link to="/products"><FaAngleRight />Products</Link>
            <Link to="/about"><FaAngleRight />About</Link>
            <Link to="/contact"><FaAngleRight />Contact</Link>
        </div>
        <div className="col-md-4 col-12 footer-section">
            <h3>Store Information</h3>
            <p className='contactInfo'> <FaMapMarkerAlt  /> Green Plant Store Demo ,Australia Melbourne</p>
            <p className='contactInfo'> <FaPhoneAlt /> Call Us: 09910815849 </p>
            <p className='contactInfo'> <FaEnvelope /> Email Us: fqaviqalb@gmail.Com</p>
        </div>
      
    </div>
  )
}

export default Footer
