import React from "react";
import { HystoriesItem } from "../HystoriesItems";
import { InstagramContext } from "../InstagramContext";
import "./style.css";

function Hystories() {
    
    const { DataHystories } = React.useContext(InstagramContext);
    
    return (
        <section className="section__hystories">


            {DataHystories.map((item, index) => {
                return <HystoriesItem 
                    key={index}
                    name={item.name}
                    imageProfile={item.imageProfile}
                  />
            })}

        </section>
    );
}

export { Hystories };