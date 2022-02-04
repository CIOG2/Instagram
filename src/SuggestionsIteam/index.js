import React from "react";
import "./style.css";

function SuggestionsIteam({name, imageProfile}) {
     
    return (
        <div className="container-suggestions-iteam">
            <div className="suggestions-iteams-content">
                <a>
                    <img
                        src={imageProfile}
                        alt={"foto del perfil de " + name}
                    />
                </a>
                <div className="text">
                    <a href="https://www.youtube.com/">{name}</a>
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