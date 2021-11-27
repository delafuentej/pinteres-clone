import React from  "react";
import data from "../../data.json";
import Card from "../Card/Card"
const List=()=>{
    return (
        <>
        {data.map(card=>{
            return(

                <Card key={card._id} img={card.img} name={card.name}/>
            )
        })}
        </>
    );


}

export default List;