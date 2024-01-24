import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Food(props) {
    const params = useParams();
    const name = params.id;
    let imgUrl = `https://source.unsplash.com/1600x900/?${name}`;

    return (
        <div>
            <h1>I like to eat {name}</h1>
            <img src={imgUrl} style={{ width: "30%" }} />
        </div>
    );
}

export default Food;
