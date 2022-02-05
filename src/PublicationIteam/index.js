import React from "react";
import { InstagramContext } from "../InstagramContext";
import "./style.css";

function PublicationIteam({imageProfile, name, image, statusHystories}) {
    let statusStyle = {};
    
    if (statusHystories === true) {
        statusStyle = { 
            backgroundImage: `linear-gradient(to right top, #df933e, #ed6346, #ea2267, #c80094, #7223c3)` 
        };
    } else{
        statusStyle = { 
            backgroundColor: `white` 
        };    
    }

    return(
        <article className="publication__iteam">
            <div className="publication__iteam--header">
                <div>
                    <a className="container__image"
                        style={statusStyle}
                    >
                        <img
                            src={imageProfile}
                            alt={"Foto del perfil de " + name}
                        />
                    </a>
                    <a className="container__name">
                        {name.toLowerCase()}
                    </a>
                </div>
                <div>
                    <svg >
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                </div>
            </div>
        
            <div className="publication__iteam--image">
                <img 
                    src={image} 
                    alt={"publicacion de " + name}
                />
            </div>
            <div className="publication__iteam-footer">
                
            </div>
        </article>    
    )
}

export { PublicationIteam };