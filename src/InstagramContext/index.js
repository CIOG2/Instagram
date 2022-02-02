import React from "react";
import { useLocalStorage } from "./useLocalStorage";   

const InstagramContext = React.createContext();

function InstagramProvider(props) {
    const DATA = [
        {
            imageProfile: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
            name: "AMABLIZ",
            image: "https://i.ibb.co/mBGQVjg/Ama.jpg"
        },
        {
            imageProfile: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
            name: "AMABLIZ",
            image: "https://soyhorizonte.com/wp-content/uploads/2020/10/Javascript-by-SoyHorizonte.jpg"
        },
        {
            imageProfile: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
            name: "AMABLIZ",
            image: "https://i.ibb.co/mBGQVjg/Ama.jpg"
        },
        {
            imageProfile: "https://i.ibb.co/x2YRS2Q/Ama.jpg",
            name: "AMABLIZ",
            image: "https://i.ibb.co/mBGQVjg/Ama.jpg"
        },
    ];
    const { loading } = useLocalStorage('TODOS_V1', []);


    
    return (
        <InstagramContext.Provider value={{
            loading,
            DATA
        }}>
            {props.children}
        </InstagramContext.Provider>
    );
}


export { InstagramContext, InstagramProvider };