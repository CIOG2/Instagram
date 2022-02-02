import React from "react";
import { Hystories } from "../Hystories";
import { PublicationIteam } from "../PublicationIteam";
import { InstagramContext } from "../InstagramContext";
import "./style.css";



function Publications() {
    
    const { DATA } = React.useContext(InstagramContext);

    return (
        <section className="section__publications">
            <Hystories/>
            
            {DATA.map((value, index) => {
                return <PublicationIteam 
                    key={index}
                    imageProfile={value.imageProfile}
                    image={value.image}
                    name={value.name}
                />
            })}      
        
        </section>
    );
}

export { Publications };