import React, { useRef } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import "./results.css"

function Search() {
    const navigate = useNavigate();
    const searchInputRef = useRef();
    const onSearchHandler = (e) => {
        e.preventDefault();
        const searchQuery = {
        name: searchInputRef.current.value
        }
        const query = createSearchParams(searchQuery);
        navigate(`/search?${query}`)
        searchInputRef.current.value = '';
    };
    return (
        <div className="search-container">
            <form onSubmit={ onSearchHandler }>
                <input type="text" className="search" ref={searchInputRef}/>
                <button type="submit" className="search-button">
                    <FaSearch  />
                </button>
            </form>
        </div>
    )
}

export default Search
