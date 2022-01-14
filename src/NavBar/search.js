import React from "react"
import './styleSearch.css'

function Search() {
    return (
        <div className="Search__Container">
            <img src="https://i.ibb.co/rtnMJ9C/lupa.png" alt="Buscar"/>
            <input type="text" placeholder="Buscar"/>
        </div>    
    )
}

export { Search };