import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductSearch(){
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <form>
                <input type="text" name="search" id="search" placeholder="Product search" value={searchQuery} onChange={handleSearchChange} required />                        
                {searchQuery ? (
                    <NavLink className="pa-btn" to={`/search/${encodeURIComponent(searchQuery)}`}>Search</NavLink>
                ) : (
                    <button className="pa-btn">Search</button>                    
                )}
            </form>
        </>
    )
}