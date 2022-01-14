import React from "react";
import { InstagramProvider } from "../InstagramContext";
import { AppUI } from "../App/AppUI";
import './main.css';


function App() {
  return (
    <InstagramProvider>
      <AppUI />
    </InstagramProvider>
  );
}

export default App;