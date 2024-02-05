import React from 'react'
import Product from "./product"
import { useParams } from 'react-router-dom';


function AllProducts({plants}) {
  const { category } = useParams();
  const filteredItems = plants.filter(item => item.category === category || (category !== 'outdoor' && category !== 'indoor'));
  return (
    <div className="allCarts">
      <div className="carts">
        {
          filteredItems.map((plant)=>{
            return (
              <Product key={plant.id} {...plant}/>

            )
          })
        }
      </div>

    </div>
  )
}

export default AllProducts
