import React, { useState } from 'react'

function Blog({ id,image,name,quote }) {
    const [readMore , setReadMore ] =useState(false);
  return (
    <article key={id} >
        <img src={image} alt="" />
        <h4>{name}</h4>
        <p>{readMore ? quote : `${quote.substring(0, 200)}...`}
            <span className='readMore' onClick={() => setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Read More'}</span>              
        </p>
    </article>
  )
}

export default Blog
