import "./App.css";
import Dog from "./Dog";
import Cat from "./Cat";
import About from "./About";
import DogHater from "./DogHater";
import { Route, Routes, NavLink } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="DisplayPage">
                <div className="NavHead">
                    <nav className="Navbar">
                        <NavLink
                            exact
                            to="/"
                            className="Navbuttons"
                            activeClassName="active-link"
                        >
                            About
                        </NavLink>
                        <NavLink
                            exact
                            to="/dog"
                            className="Navbuttons"
                            activeClassName="active-link"
                        >
                            Dog
                        </NavLink>
                        <NavLink
                            exact
                            to="/cat"
                            className="Navbuttons"
                            activeClassName="active-link"
                        >
                            Cat
                        </NavLink>
                        <NavLink
                            exact
                            to="/dog/hater"
                            className="Navbuttons"
                            activeClassName="active-link"
                        >
                            Dog Hater
                        </NavLink>
                    </nav>
                </div>
                <div className="Mainpage">
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/dog/hater" element={<DogHater />} />
                        <Route path="/dog" element={<Dog />} />
                        <Route path="/cat" element={<Cat />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
