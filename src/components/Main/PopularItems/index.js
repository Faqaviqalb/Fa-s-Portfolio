import React, { useEffect, useState } from 'react'
import "./Popular.css"
import data from "../../../assets/data";
import { FaStar,FaAngleLeft,FaAngleRight } from "react-icons/fa";
import AddButton from '../../AddToCart/AddButton';

function Populars() {
    const [ items, setItems ] = useState(data);
    const [ index,setIndex ]= useState(0);
    const [ prevDisabled,setPrevDisabled ] = useState(false);
    const [ nextDisabled,setNextDisabled ] = useState(false);
    
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
    useEffect(() => {
        let slider = setInterval(() => {
        setIndex(index - 1);
        }, 3000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);
    useEffect(() => {
        if (index === 0) {
            setNextDisabled(true);
        }else{
            setNextDisabled(false);
        }
        if (index === -6) {
            setPrevDisabled(true);
            setIndex(0);
        }else{
            setPrevDisabled(false);
        }
    }, [index, items]);

      const [containerWidth, setContainerWidth] = useState('100%');

    useEffect(() => {
        const handleResize = () => {
        const screenWidth = window.innerWidth;
        const newContainerWidth = Math.min(screenWidth * 0.65 , 1000) + 'px'; // Adjust the multiplier and maximum width as needed
        setContainerWidth(newContainerWidth);
        };

        handleResize(); // Initial call to set the container width

        window.addEventListener('resize', handleResize);
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='container p-relative'>
            <div className="moreInfo">
                <h3>Green Plant Store</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error veniam id facere maxime accusantium nemo, omnis, suscipit provident aliquam assumenda quos. Sequi accusamus sit at dolorum fuga provident nisi ratione eaque! At laboriosam ullam eligendi, beatae maxime iusto eveniet sed.
                </p>
            </div> 
            <h1 className='specialHeader'>SPECIAL PRODUCTS</h1>
            <div className="popularCarts" style={{ width: containerWidth }}>  
                <div className="carts d-flex">
                    {
                        items.map((item,value) =>{
                            const { id,image,name,price,rating } = item;
                            let position = 'activeSlide';
                            
                            let leftPosition = `${(value + index) * 220}px`;
                            if (index > 4) {
                                position = 'lastSlide';
                            }
                            return (
                                <div className={`cart ${position}`} key={id} style={{ left: leftPosition }}>
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

                                </div>  
                            )
                        })
                    }     
                </div>        

            </div>
                            <button className={prevDisabled ? 'prev disabled' : 'prev'} onClick={() => setIndex(index - 1)} >
                    <FaAngleLeft />
                </button>
                <button className={nextDisabled ? 'next disabled' : 'next'} onClick={() => setIndex(index + 1)}>
                    <FaAngleRight />
                </button>
        </div>
    )
}

export default Populars
