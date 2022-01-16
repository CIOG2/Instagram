import React from "react";
import { InstagramContext } from "../InstagramContext";
import { NavBar } from "../NavBar";
import { MainContainer } from "../MainContainer";

function AppUI() {
    
    const { 
        loag
    } = React.useContext(InstagramContext);

    return (
        <React.Fragment>
            <NavBar />
            <MainContainer />
        </React.Fragment>
    );
}

export { AppUI };