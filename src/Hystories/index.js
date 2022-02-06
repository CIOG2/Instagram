import React from "react";
import { HystoriesItem } from "../HystoriesItems";
import { InstagramContext } from "../InstagramContext";
import "./style.css";

function Hystories() {

    const { DataHystories } = React.useContext(InstagramContext);

    const [ Desplazar, setDesplazar ] = React.useState(false);
    const mover = () => {
        setDesplazar(!Desplazar);
    }
    
    //* Trate de usar un generator para no perder el valor Pero no funciona
    function* Move() {
        let n = 0;
        while (true) {
            n = n - 320;
            yield n;
        }
    }

    return (
        <section className="section__hystories">
        <div className="Boton-Izquierda"></div>


    //* Lo aplico en este contenedor
        <div 
            className="CONTAINER-CALIS"
            style={Desplazar ? {transform: `translateX(${Move().next().value}px)`} : {transform: "translateX(0px)"}}
        >
        


             {DataHystories.map((item, index) => {
                return <HystoriesItem 
                    key={index}
                    name={item.name}
                    imageProfile={item.imageProfile}
                />
            })}
        </div>

    
    //* Este es el boton azul que se ve en el video
        <div 
            className="Boton-Derecha"
            onClick={mover} 
        >            
        </div>
        
        </section>
    );
}

export { Hystories };