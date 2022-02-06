import React from "react";
import "./style.css";     


function HystoriesItem({imageProfile, name}) {


    const recortarNombre = (nombre) => {
        if(nombre.length > 9){
            return nombre.substring(0,9) + "...".toLowerCase();
        }else{
            return nombre.toLowerCase();
        }
    }



    return (
        <div className="history__iteam">
            <div className="container--history-image">
                <img 
                    className="history--image"
                    src={imageProfile}
                    alt={"Foto del perfil de " + name}
                />
            </div>
            <span className="history__iteam--name">
                {recortarNombre(name)}
            </span>
        </div>
    );
}

export { HystoriesItem};