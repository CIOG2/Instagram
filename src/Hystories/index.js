import React from "react";
import { HystoriesItem } from "../HystoriesItems";
import "./style.css";

function Hystories() {

    const DATA = [
        {
            image: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
            name: "AMABLIZ"
        },
        {
            image: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
            name: "Amabliz"
        },        {
            image: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
            name: "Amabliz"
        },        {
            image: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
            name: "Amabliz"
        },
    ];

    return (
        <section className="section__hystories">
            
            {DATA.map((value, index) => {
                return <HystoriesItem 
                    key={index}
                    name={value.name}
                    image={value.image}
                  />
            })}

        </section>
    );
}

export { Hystories };