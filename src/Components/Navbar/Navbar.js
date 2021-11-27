import React from "react";

import "./Navbar.scss"

const Navbar=(props)=>{
    return (
    
            <nav>
                <input 
                type="text" 
                placeholder="search"
                className="searchInput"
                onChange={(e)=>{
                    props.handleSearch(e.target.value)

                }}
                />


            </nav>

    
    )

}

export default Navbar;