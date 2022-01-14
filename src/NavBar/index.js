import React from "react";
import { Search } from "../NavBar/search";
import './style.css';

function NavBar() {
    
    return (
        <header className="Header">
            <nav className="NavBar">
                <div className="NavBar__container NavBar__container--image">
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
                </div>
                <div className="NavBar__container NavBar__container--search">
                    <Search className="search"/>
                </div>
                <div className="NavBar__container NavBar__container--Links">
                    <a href="#"> <img src="https://i.ibb.co/ncMG4sr/Home.png" alt="Inicio"/> </a>
                    <a href="#"> <img src="https://i.ibb.co/hWQ0k7X/Messenger.png" alt="Messenger"/> </a>
                    <a href="#"> <img src="https://i.ibb.co/7RsT9LZ/Agregar.png" alt=""/> </a>
                    <a href="#"> <img src="https://i.ibb.co/Mhc3kX8/Brujula.png" alt=""/> </a>
                    <a href="#"> <img src="https://i.ibb.co/k5wBk5c/Corazon.png" alt=""/> </a>
                    <a href="#"> <img src="https://i.ibb.co/k5wBk5c/Corazon.png" alt=""/> </a>
                </div>
            </nav>
        </header>
    )
}

export { NavBar };