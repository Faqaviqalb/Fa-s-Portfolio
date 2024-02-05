import React from 'react'
import Blog from "./Blog"

function Blogs({blogs}) {
  return (
    <div className="blogs">
        {
            blogs.map((datas) =>{
                return(
                    <Blog key={datas.id} {...datas} />
                )
            })
        }          
    </div>
  )
}

export default Blogs
