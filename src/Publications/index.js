import React from "react";
import { Hystories } from "../Hystories";
import { PublicationIteam } from "../PublicationIteam";
import { InstagramContext } from "../InstagramContext";
import "./style.css";



function Publications() {
    
    const { DataPublication } = React.useContext(InstagramContext);

    return (
        <section className="section__publications">
            <Hystories/>
            
            {DataPublication.map((item, index) => {
                return <PublicationIteam 
                    key={index}
                    imageProfile={item.imageProfile}
                    image={item.image}
                    name={item.name}
                    statusHystories={item.statusHystories}
                />
            })}      
        
        </section>
    );
}

export { Publications };