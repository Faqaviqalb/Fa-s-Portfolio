import React, { useState, useEffect } from 'react';
import data from '../../assets/data';
import { useSearchParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const plantNameToFind = searchParams.get('name');
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    function getPlantsData() {
      const filteredPlants = data.filter(plant =>
        plant.name.toLowerCase().includes(plantNameToFind.toLowerCase())
      );
      setPlants(filteredPlants);
    }
    getPlantsData();
  }, [plantNameToFind]);
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
    <div className="allCartsSearch">
          {plants.map(({ id, image, name, price, rating }) => (
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
                <button>Add To Cart</button>

            </article> 
          ))}
    </div>
  );
};

export default SearchResults;