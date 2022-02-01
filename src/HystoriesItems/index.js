import React from "react";
import "./style.css";

function HystoriesItem({image, name}) {
   
    return (
        <div className="history__iteam">
            <div className="container--history-image">
                <img 
                    className="history--image"
                    src={image}
                    alt={"Foto del perfil de " + name}
                />
            </div>
            <span className="history__iteam--name">
                {name.toLowerCase()}
            </span>
        </div>
    );
}

export { HystoriesItem };