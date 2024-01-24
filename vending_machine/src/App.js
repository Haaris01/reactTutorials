import "./App.css";
import {Link, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardine";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<VendingMachine/>} />
          <Route exact path='/soda' element={<Soda/>} />
          <Route exact path='/sardines' element={<Sardines/>} />
          <Route exact path='/chips' element={<Chips/>} />
        </Routes>
    </div>
  );
}

export default App;
