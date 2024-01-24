import "./App.css";
import { Routes, Route } from "react-router-dom";
import Food from "./Food";
import Meal from "./Meal";
import FoodSearch from "./FoodSearch";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<FoodSearch />} />
                <Route path="*" element={<h1>Uh Oh! Something went wrong</h1>} />
                {/*  "*" matches when no other routes are matched */}
                <Route path="/food/:id" element={<Food />} />
                <Route
                    path="/food/:foodName/drink/:drinkName"
                    element={<Meal />}
                />
            </Routes>
        </div>
    );
}

export default App;
