import React from 'react';
import { Link } from 'react-router-dom';
import "./HeroSection.css"
import plant1 from "../../../assets/images/single_lush_green_tropical_plant.png";
import { FaAngleDoubleRight, FaShippingFast,FaRegCalendarCheck,FaMoneyBillWave } from "react-icons/fa";


export default function HeroSection() {
  return (
    <section className="heroSectionContainer container">
        <article className="heroSectionItem" >
          <div className="animatedImg">
            <img src={plant1} alt="plant" className='w-100'/>
          </div>
          <div className="heroInfo">
            <p>An addiction to gardening is not all bad when you consider all the other choices in life.</p>
            <Link to="/products">All Products<FaAngleDoubleRight className='angleDouble'/></Link>
          </div>
        </article>
        <div className="services">
          <div className='service'><FaShippingFast className='serviceIcon' />Free Shipping</div>
          <div className='service'><FaMoneyBillWave  className='serviceIcon' /> Easy Payment </div>
          <div className='service'><FaRegCalendarCheck className='serviceIcon' />Fast Delivery</div>
        </div>
    </section>
    
  )
}
