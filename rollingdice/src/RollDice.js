import React, { Component } from 'react'
import Die from './Die';
import "./RollDice.css"
class RollDice extends Component{
    static defaultProps = {
        faces : ["one", "two", "three", "four", "five", "six"],
        num : [1,2,3,4,5,6]
    }
    constructor(props){
        super(props);
        this.state = {
            face1 : this.props.faces[Math.floor((Math.random() * this.props.faces.length))],
            face2 : this.props.faces[Math.floor((Math.random() * this.props.faces.length))],
            isRolling : false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.setState({
            isRolling : true,
        })
        setTimeout(() => {
            this.setState({
                face1 : this.props.faces[Math.floor((Math.random() * this.props.faces.length))],
                face2 : this.props.faces[Math.floor((Math.random() * this.props.faces.length))],
            })
        },500)
        setTimeout(() => {
            this.setState({
                isRolling : false,
            })
        },1000)
        
    }

    render(){
        const rollClass = `RollDice-btn ${
            this.state.isRolling ? 'Rolling wobble' : 'Roll'
        }`
        return(
            <div className="RollDice">
                <Die face={this.state.face1} isRolling={this.state.isRolling}/>
                <Die face={this.state.face2} isRolling={this.state.isRolling}/>
                {
                    (this.state.isRolling) ? 
                    <button className={rollClass} onClick={this.handleClick} disabled>
                        Rolling..
                    </button> :
                    <button className={rollClass} onClick={this.handleClick} >
                        Roll Dice!!
                    </button>
                }
                
            </div>
        )
    }
}

export default RollDice;