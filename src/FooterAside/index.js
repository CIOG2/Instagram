import React from "react";
import "./style.css";


function FooterAside() {
    
    return (
        <div className="aside__footer--container">
            <ul>
                <li><a>Información</a></li>
                <li><a>Ayuda</a></li>
                <li><a>Prensa</a></li>
                <li><a>API</a></li>
                <li><a>Empleo</a></li>
                <li><a>Privacidad</a></li>
                <li><a>Condiciones</a></li>
                <li><a>Ubicaciones</a></li>
                <li><a>Cuentas destacadas</a></li>
                <li><a>Hastags</a></li>
                <li><a></a></li>
            </ul>
            <p>
                © 2022 INSTAGRAM FROM META
            </p>
        </div>    
    )
}

export { FooterAside };