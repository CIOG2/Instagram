import React from "react";

const InstagramContext = React.createContext();



function InstagramProvider(props) {


    function loag() {
        console.log("InstagramProvider");
    }
    



    return (
        <InstagramContext.Provider value={
            loag
        }>
            {props.children}
        </InstagramContext.Provider>
    );
}


export { InstagramContext, InstagramProvider };