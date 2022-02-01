import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        setTimeout(() => {
            try {
                setLoading(false);       
            } catch (error) {
                console.error("hubo un error",error);
            }
        },1600);
      });
    
    return {loading};
}   

export { useLocalStorage };