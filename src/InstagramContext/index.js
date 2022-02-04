import React from "react";
import { useLocalStorage } from "./useLocalStorage";   
import { DataPublication } from "../Data/Publication";

const InstagramContext = React.createContext();

function InstagramProvider(props) {

    const { loading } = useLocalStorage('TODOS_V1', []);


    
    return (
        <InstagramContext.Provider value={{
            loading,
            DataPublication
        }}>
            {props.children}
        </InstagramContext.Provider>
    );
}


export { InstagramContext, InstagramProvider };