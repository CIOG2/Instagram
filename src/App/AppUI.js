import React from "react";
import { InstagramContext } from "../InstagramContext";
import { NavBar } from "../NavBar";
import { MainContainer } from "../MainContainer";
import { Skeletons } from "../Skeletons";

function AppUI() {

  
    return (
        <React.Fragment>
            {/* {loading22 && <Skeletons/>} */}
        
            <NavBar />
            <MainContainer />
        </React.Fragment>
    );
}

export { AppUI };