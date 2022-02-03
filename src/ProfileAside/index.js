import React from "react";
import "./style.css";

function ProfileAside() {
    
    return (
        <div className="aside__profile--container">
            <div className="profile--container-content">
                <img
                    src="https://i.ibb.co/3THph5M/Me-Profile.jpg"
                />
                <div className="text">
                    <a>ciog_2</a>
                    <p>Carlos Iván</p>
                </div>
            </div>
            <a>
                Cambiar
            </a>    
        </div>
    );
}

export { ProfileAside };