import React from "react";
import { useParams } from "react-router-dom";

function Meal() {
    const params = useParams();
    let url = `https://source.unsplash.com/1600x900/?`;
    let foodUrl = `${url}${params.foodName}`;
    let drinkUrl = `${url}${params.drinkName}`;

    return (
        <div>
            <h1>This is a Meal</h1>
            <h2>Food is {params.foodName}</h2>
            <img src={foodUrl} style={{width : "30%"}} />
            <h2>Drink is {params.drinkName}</h2>
            <img src={drinkUrl} style={{width : "30%"}} />
        </div>
    );
}

export default Meal;
