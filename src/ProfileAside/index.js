import React from "react";
import "./style.css";

function ProfileAside() {
    
    return (
        <div className="aside__profile--container">
            <div className="profile--container-content">
                <a>
                    <img
                        src="https://i.ibb.co/3THph5M/Me-Profile.jpg"
                    />
                </a>
                <div className="text">
                    <a href="https://www.youtube.com/">ciog_2</a>
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