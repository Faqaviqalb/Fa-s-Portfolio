import React, { useState } from 'react'
import AllProducts from "./allProducts"
import data from '../../assets/data';
import "./Popular.css"
import { Link } from 'react-router-dom';

function Products({ searchQuery }) {
  const [ plants, setPlants ] = useState(data);
  
  return (
    <div className='productsContainer'>
      <div className="btns">
          <Link to="/all">
            <button>All</button>
          </Link>
          <Link to="/indoor">
            <button>Indoor Plants</button>
          </Link>
          <Link to="/outdoor">
            <button>Outdoor Plants</button>
          </Link>
      </div>

      <AllProducts plants={plants} />     
    </div>
  )
}

export default Products
