import React from "react";
import { InstagramContext } from "../InstagramContext";
import "./style.css";
import "./publicationFooter.css";

function PublicationIteam({imageProfile, name, image, statusHystories}) {
    let statusStyle = {};
    
    if (statusHystories === true) {
        statusStyle = { 
            backgroundImage: `linear-gradient(to right top, #df933e, #ed6346, #ea2267, #c80094, #7223c3)` 
        };
    } else{
        statusStyle = { 
            backgroundColor: `white` 
        };    
    }

    
    let comentarios = 23;
    let likes = 12;
    let time = "hace 1 hora";
    let description = "No nos cansamos de ver los lanzamientos y aterrizajes del Falcon 9. ¿Apoco no es impresionante? 🚀";



    return(
        <article className="publication__iteam">
            <div className="publication__iteam--header">
                <div>
                    <a className="container__image"
                        style={statusStyle}
                    >
                        <img
                            src={imageProfile}
                            alt={"Foto del perfil de " + name}
                        />
                    </a>
                    <a className="container__name">
                        {name.toLowerCase()}
                    </a>
                </div>
                <div>
                    <svg >
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                </div>
            </div>
        
            <div className="publication__iteam--image">
                <img 
                    src={image} 
                    alt={"publicacion de " + name}
                />
            </div>
            <div className="publication__iteam-footer">
                <div className="publication__iteam-footer--like">
                    <div className="container-svg">
                        <svg className="LIKE" aria-label="Me gusta" role="img">
                            <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z">
                            </path>
                        </svg>

                        <svg className="COMENT" aria-label="Comentar">
                            <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z">
                            </path>
                        </svg>

                        <svg className="SHARE" aria-label="Compartir publicación" >
                            <line x1="22" x2="9.218" y1="3" y2="10.083">
                            </line>
                            <polygon points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334">
                            </polygon>
                        </svg>
                    </div>
                    <div className="container-more-images">
                        <p></p>
                    </div>
                    <a>
                        <svg aria-label="Guardar" >
                            <polygon points="20 21 12 13.44 4 21 4 3 20 3 20 21">
                            </polygon>
                        </svg>
                    </a>
                </div>













                <div className="publication__iteam--footer-description">
                    <h3 className="likes">{likes} Me gusta</h3>
                    <p className="description">
                        <a>{name.toLowerCase()}</a>
                        {description} 
                    </p>
                    <a className="coments">Ver los {comentarios} comentarios</a>
                    <a className="time">{time.toUpperCase()}</a>
                </div>
                














                <div className="publication__iteam--footer-comment">
                    <svg aria-label="Emoji" role="img">
                        <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z">
                        </path>
                    </svg>
                    <input
                        placeholder="Agrega un comentario..."
                    />
                    <button>
                        Publicar
                    </button>
                </div>

            </div>
        </article>    
    )
}

export { PublicationIteam };