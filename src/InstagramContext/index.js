import React from "react";
import { useLocalStorage } from "./useLocalStorage";



const InstagramContext = React.createContext();

function InstagramProvider(props) {
    const { loading } = useLocalStorage('TODOS_V1', []);


    
    return (
        <InstagramContext.Provider value={{
            loading
        }}>
            {props.children}
        </InstagramContext.Provider>
    );
}


export { InstagramContext, InstagramProvider };