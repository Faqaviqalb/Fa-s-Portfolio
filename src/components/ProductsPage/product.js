import React from 'react'
import { FaStar } from "react-icons/fa";
import AddButton from '../AddToCart/AddButton';

function product({ id,image,name,price,rating }) {
    const item = {
        id,
        image,
        name,
        price,
        rating
    };
    let stars = [];
    const countStars = (count)=>{   
        stars = [];   
        for (let i = 0; i < count ; i++) {
            stars.push(<FaStar className='stared' key={i} />);
        }
        for (let j = 0; j < 5-count; j++) {
            stars.push(<FaStar className='notStared' key={`1${j}`}/>);
        }
    }
  return (
    <article className='cart'>
        <img src={image} alt={name} />
        <div className="rating">
            {countStars(rating)}
            {stars}
        </div>     
        <div className="d-flex">
            <div className="plantTitle">{name}</div>
            <div className="price">{price}</div>                             
        </div>
        <AddButton item={item} />
    </article> 
  )
}

export default product
