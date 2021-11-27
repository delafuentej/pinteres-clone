import React from  "react";
import data from "../../data.json";
import Card from "../Card/Card";
import "./List.scss";


const List=(props)=>{
    const {filter}=props;
/*     console.log(term)
 */    return (
        <section
        className="listContainer"
        >
        {data.filter((card)=>{
            const {name}=card;
            console.log(name)
    
                return name.includes(filter);
        })
        .map((card)=>{
            return <Card 
            key={card._id} 
            img={card.img} 
            name={card.name}
            />
        })}
           
        </section>
                
            )
        }
        




export default List;