import React from "react";
import { SuggestionsIteam } from "../SuggestionsIteam";
import { InstagramContext } from "../InstagramContext";
import "./style.css";


function SuggestionsAside() {
    
    const { DataSuggestions } = React.useContext(InstagramContext);
    
    return (
        <div className="aside__suggestions--container">
            <div className="suggestions--container-title">
                <h3>Sugerencias para ti</h3>
                <a>Ver todo</a>
            </div>
            <div className="suggestions--container-iteams">
                {DataSuggestions.map((item, index) => (
                    <SuggestionsIteam 
                        key={index} 
                        name={item.name}
                        imageProfile={item.imageProfile}
                    />
                ))}
            </div>
        </div>    
    )
}

export { SuggestionsAside };