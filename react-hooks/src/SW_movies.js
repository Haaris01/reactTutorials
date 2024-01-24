import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function SW_movies() {
    const [number, setNumber] = useState(0);
    const [movie, setMovie] = useState("");

    useEffect(() => {
        async function getMovie(){
            let response = await axios.get(`https://swapi.dev/api/films/${number}/`);
            setMovie(response.data);
            console.log(response.data);
        }
        getMovie();
    }, [number]); //square bracket implies that this useEffect 

    return (
        <div>
            <h1>Star Wars</h1>
            <h4>{movie.title}</h4>
            <p>{movie.opening_crawl}</p>
            <select onChange={(evt) => setNumber(evt.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
    );
}

export default SW_movies;
