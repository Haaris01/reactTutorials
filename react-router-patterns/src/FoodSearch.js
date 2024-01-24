import React from "react";
import { useState } from "react";
import { useParams, Link, Redirect, Route, Routes, Navigate } from "react-router-dom";

function FoodSearch() {
    const [food, setFood] = useState("");

    return (
        <div>
            {/\d/.test(food) ? (
                <Routes>
                    <Route path="*" element={<FoodSearch/>} />
                </Routes>
            ) : (
                <div>
                    <h1>Food Search 🤤🤤</h1>
                    <input
                        value={food}
                        onChange={(evt) => setFood(evt.target.value)}
                        placeholder="What do you wanna eat?"
                    />
                    <Link to={`/food/${food}`}>Go!</Link>
                </div>
            )}
        </div>
    );
}

export default FoodSearch;
