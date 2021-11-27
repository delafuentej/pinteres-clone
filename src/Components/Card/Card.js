import React from "react";

const Card=(props)=>{
    const{img,name}=props;

    return (
        <div>
            <img src={img} alt={name} />
            <p>{name}</p>

        </div>
    )
}

export default Card;