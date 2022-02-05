import React from "react";
import { HystoriesItem } from "../HystoriesItems";
import { InstagramContext } from "../InstagramContext";
import "./style.css";

function Hystories() {
    
    const { DataHystories } = React.useContext(InstagramContext);
    

    return (
        <section className="section__hystories">
        <div className="Boton-Izquierda"></div>

            {DataHystories.map((item, index) => {
                return <HystoriesItem 
                    key={index}
                    name={item.name}
                    imageProfile={item.imageProfile}
                />
            })}

        {/* <div className="CONTAINER-CALIS">
        </div> */}

        <div className="Boton-Derecha"
        >            
        </div>
        
        </section>
    );
}

export { Hystories };