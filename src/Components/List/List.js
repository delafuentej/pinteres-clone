import React from  "react";
import data from "../../data.json";
import Card from "../Card/Card";
import "./List.scss";


const List=()=>{
    return (
        <section
        className="listContainer"
        >
        {data.map((card)=>{
           
            return(
               
                <Card 
                key={card._id} 
                img={card.img} 
                name={card.name}
                />
            )
        })}
        </section>
    );


}

export default List;