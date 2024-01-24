import React, { Component } from "react";
import Message from "./Message";
import {Link} from 'react-router-dom';
import './Sardine.css';

class Sardines extends Component {
  render() {
    return (
      <div
        className="Sardine"
        style={{
          backgroundImage:
            "url('https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif')",
        }}
      >
        <Message>
            <h1>you don't eat the sardines. the sardines, they eat you!</h1>
            <Link exact to="/">GO BACK</Link>
        </Message>
      </div>
    );
  }
}

export default Sardines;
