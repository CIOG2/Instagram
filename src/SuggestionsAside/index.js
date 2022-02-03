import React from "react";
import { SuggestionsIteam } from "../SuggestionsIteam";
import "./style.css";


function SuggestionsAside() {
    
    return (
        <div className="aside__suggestions--container">
            <div className="suggestions--container-title">
                <h3>Sugerencias para ti</h3>
                <a>Ver todo</a>
            </div>
            <div className="suggestions--container-iteams">
                <SuggestionsIteam />
                <SuggestionsIteam />
                <SuggestionsIteam />
                <SuggestionsIteam />
                <SuggestionsIteam />
            </div>
        </div>    
    )
}

export { SuggestionsAside };