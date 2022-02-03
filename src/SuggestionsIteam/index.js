import React from "react";
import "./style.css";

function SuggestionsIteam() {
     
    return (
        <div className="container-suggestions-iteam">
            <div className="suggestions-iteams-content">
                <a>
                    <img
                        src="https://i.ibb.co/3THph5M/Me-Profile.jpg"
                    />
                </a>
                <div className="text">
                    <a href="https://www.youtube.com/">ciog_2</a>
                    <p>Sugerencia para ti</p>
                </div>
            </div>
            <a>
                Seguir
            </a>    
        </div>
    )
}

export { SuggestionsIteam };