import React from "react";
import "./Card.scss";

const Card=(props)=>{
    const{img,name}=props;

    return (
        <div
        className="cardContainer"
        >
            <div className="imgContainer">

                <img src={img} alt={name} />    
            </div>

            <div className="dataContainer">

                <p>{name}</p>
            </div>
           
           

        </div>
    )
}

export default Card;