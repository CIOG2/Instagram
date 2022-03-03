import React from "react";
import { HystoriesItem } from "../HystoriesItems";
import { InstagramContext } from "../InstagramContext";
import "./style.css";

function Hystories() {

    const { DataHystories } = React.useContext(InstagramContext);
    let posicion = -1;
    let movimiento = 0;


    let pantalla = window.innerWidth;
    if (pantalla > 615) {
        pantalla = 615;
    }

    let anchoRestante = ((DataHystories.length * 85) - pantalla) - 85;
    let slide = [];
    
    if (anchoRestante >= 320) {
        let bucle = true;
        while (bucle) {
            if (anchoRestante > 320) {
                slide.push(320);
                anchoRestante = anchoRestante - 320;
            } else {
                slide.push(anchoRestante);
                anchoRestante = 0;
                bucle = false;
            }
        }
    } else {
        slide.push(anchoRestante);
    }


    const moverIzquierda = () => {
        if (slide.length >= 0) {
            document.getElementById("Boton-Derecha").style.display = "flex";
            movimiento = movimiento - slide[posicion];
            posicion--;
            document.getElementById("ContainerHystories").style.transform = `translateX(-${movimiento}px)`;
            if (-1 == posicion) {
                document.getElementById("Boton-Izquierda").style.display = "none";
            }
        }
    }  
    
    const moverDerecha = () => {
        if (slide.length >= posicion) {
            document.getElementById("Boton-Izquierda").style.display = "flex";
            posicion++;
            movimiento = movimiento + slide[posicion];
            document.getElementById("ContainerHystories").style.transform = `translateX(-${movimiento}px)`;
            if (slide.length == (posicion + 1)) {
                document.getElementById("Boton-Derecha").style.display = "none";
            }
        }
    }  

    return (
        <section className="section__hystories">
        <div 
          className="Boton-Izquierda"
          id="Boton-Izquierda"
          onClick={() => moverIzquierda()}
        >
            <img
                src="https://i.ibb.co/9qmjNVp/Flecha-Historia.png"
            />   
        </div>

        <div 
            className="Container__Hystories"
            id="ContainerHystories"
        >
             {DataHystories.map((item, index) => {
                return <HystoriesItem 
                    key={index}
                    name={item.name}
                    imageProfile={item.imageProfile}
                />
            })}
        </div>
    
        <div 
            className="Boton-Derecha"
            id="Boton-Derecha"
            onClick={() => moverDerecha()}
            >       
            <img src="https://i.ibb.co/9qmjNVp/Flecha-Historia.png"/>     
        </div>
        </section>
    );
}

export { Hystories };