import React from "react";
import { ProfileAside  } from "../ProfileAside";
import { SuggestionsAside } from "../SuggestionsAside";
import { FooterAside } from "../FooterAside";
import "./style.css";

function Aside() {
    
    return (
        <aside className="aside">
            <ProfileAside/>
            <SuggestionsAside/>
            <FooterAside/>
        </aside>
    );
}

export { Aside };