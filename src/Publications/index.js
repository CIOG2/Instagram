import React from "react";
import { Hystories } from "../Hystories";
import "./style.css";

const publiciones = [{}, {}, {}, {}];

function Publications() {
    
    return (
        <section className="section__publications">
            <Hystories/>
            {
                publiciones.map((publicion, index) => (
                    <div 
                        key={index}
                    className="simular__de__publicacion"></div>   
                ))        
            }  
        </section>
    );
}

export { Publications };