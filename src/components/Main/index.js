import React from 'react';
import "./Main.css";
import HeroSection from "./HeroSection/index"
import Populars from "./PopularItems/index"
import Banner from "./Banner/index"
import MainBlogs from "./Blogs/index"


function Main() {
    return (
        <div>
            <HeroSection />
            <Populars />
            <Banner />
            <MainBlogs />

        </div>
    )
}

export default Main
