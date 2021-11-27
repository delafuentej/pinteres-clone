import React from "react";
import "./Card.scss";

const Card=(props)=>{
    const{img,name}=props;

    return (
        <div
        className="cardContainer"
        >
            <img src={img} alt={name} />
            <p>{name}</p>

        </div>
    )
}

export default Card;