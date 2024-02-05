import React, { useState } from 'react'
import blogData from "../../../assets/blogData"
import "./Blogs.css"
import { FaAngleDoubleLeft } from "react-icons/fa";
import Blogs from "./Blogs"

function MainBlogs() {
    const [ data,setData ] = useState(blogData);  
  return (
    <div className='blogContainer container-fluid'>
        <div className="blog-header">         
            {/* <a className='seeAll'><FaAngleDoubleLeft />All Blogs</a> */}
            <h1 className='blogHeader'>Latest Blogs</h1>
        </div>   
        <Blogs blogs={data}/>    
    </div>
  )
}

export default MainBlogs
