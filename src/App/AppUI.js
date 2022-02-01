import React from "react";
import { InstagramContext } from "../InstagramContext";
import { NavBar } from "../NavBar";
import { MainContainer } from "../MainContainer";
import { Skeletons } from "../Skeletons";

function AppUI() {

    const { 
        loading,
    } = React.useContext(InstagramContext);


    return (
        <React.Fragment>
            {loading && <Skeletons/>}
            <NavBar />
            <MainContainer />
        </React.Fragment>
    );
}

export { AppUI };