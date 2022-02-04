import React from "react";
import { useLocalStorage } from "./useLocalStorage";   
import { DataPublication } from "../Data/Publication";
import { DataSuggestions } from "../Data/suggestions";
import { DataHystories } from "../Data/Hystories";

const InstagramContext = React.createContext();

function InstagramProvider(props) {

    const { loading } = useLocalStorage('TODOS_V1', []);


    
    return (
        <InstagramContext.Provider value={{
            loading,
            DataPublication,
            DataSuggestions,
            DataHystories,
        }}>
            {props.children}
        </InstagramContext.Provider>
    );
}


export { InstagramContext, InstagramProvider };