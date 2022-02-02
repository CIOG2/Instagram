import React from "react";
import { HystoriesItem } from "../HystoriesItems";
import { InstagramContext } from "../InstagramContext";
import "./style.css";

function Hystories() {
    
    const { DATA } = React.useContext(InstagramContext);
    
    return (
        <section className="section__hystories">


            {DATA.map((value, index) => {
                return <HystoriesItem 
                    key={index}
                    name={value.name}
                    imageProfile={value.imageProfile}
                  />
            })}

        </section>
    );
}

export { Hystories };