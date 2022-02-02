import React from "react";
import { InstagramContext } from "../InstagramContext";
import "./style.css";

function PublicationIteam({imageProfile, name, image}) {
    
    const { DATA } = React.useContext(InstagramContext);

    return(
        <article className="publication__iteam">
            <div className="publication__iteam--header">
                <div>
                    <a>
                        <img
                            className="profile__image"
                            src={imageProfile}
                            // alt={"Foto del perfil de " + name}
                        />
                    </a>
                    <a>amabliz</a>
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