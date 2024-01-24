import React, { Component } from "react";
import chipsImg from "./Chips.png";
import Message from "./Message";
import "./Chips.css";
import { Link } from "react-router-dom";
class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState((prevSt) => ({
      bags: [...prevSt.bags, { x, y }],
    }));
  }
  render() {
    const bags = this.state.bags.map((bag, i) => (
      <img
        src={chipsImg}
        key={i}
        className="bag"
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
        alt="lays packet"
      />
    ));
    return (
      <div className="Chips">
        <Message>
          <h1>bags eaten : {this.state.bags.length}</h1>
          <button onClick={this.handleClick}>NOM NOM NOM</button>
          <h1>
            <Link to="/">Go Back</Link>
          </h1>
        </Message>
        {bags}
      </div>
    );
  }
}

export default Chips;
