import React from "react";
import { InstagramContext } from "../InstagramContext";
import { NavBar } from "../NavBar";


function AppUI() {
    
    const { 
        loag
    } = React.useContext(InstagramContext);

    return (
        <React.Fragment>
            <NavBar />
        </React.Fragment>
    );
}

export { AppUI };