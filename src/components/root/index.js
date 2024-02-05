import React, { useState } from 'react';
import NavBar from './NavBar/index';
import Footer from './Footer/index';
import { Outlet } from 'react-router-dom';

const Root = () => {
    const [ searchQuery, setSearchQuery ] = useState('');
    return (
        <>
            <NavBar/>
            <Outlet />
            <Footer/>
        </>
    );
};

export default Root;