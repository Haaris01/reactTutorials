import React, { Component } from 'react'
import "./Die.css";
class Die extends Component {

    render(){
        const di = "fas fa-dice-";
        const rollClass = `${this.props.isRolling ? 'rolling' : 'no-roll'}`
        return (
            <i className={`Die ${di}${this.props.face} ${rollClass}`}></i>
        )
    }
  
}

export default Die;