import React, { Component } from "react";
import vendMachineImg from "./VendingMachine.png";
import "./VendingMachine.css";
import Message from "./Message";
import Chips from "./Chips";
import Sardines from "./Sardine";
import Soda from "./Soda";
import { Link } from "react-router-dom";
class VendingMachine extends Component {
  render() {
    return (
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendMachineImg})` }}
      >
        <Message>
          <h1>Hello i am a vending machine what would you like to eat</h1>
        </Message>
        <Message>
          <h1>
            <Link to="/soda">Soda</Link>
          </h1>
          <h1>
            <Link to="/chips">Chips</Link>
          </h1>
          <h1>
            <Link to="/sardine">Sardines</Link>
          </h1>
          
        </Message>
      </div>
    );
  }
}

export default VendingMachine;
