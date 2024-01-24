import React, { Component } from 'react'
import './Joke.css'

class Joke extends Component{
    constructor(props){
        super(props);
    }
    getColor(){
        const val = this.props.votes;
        if(val >= 15) return "#4CAF50";
        else if(val >= 12) return "#8BC34A";
        else if(val >= 9) return "#CDDC39";
        else if(val >= 6) return "#FFEB3B";
        else if(val >= 3) return "#FFC107";
        else if(val >= 0) return "#FF9800";
        else return "#f44336";
    }

    getEmoji(){
        const val = this.props.votes;
        if(val >= 15) return "em em-rolling_on_the_floor_laughing";
        else if(val >= 12) return "em em-laughing";
        else if(val >= 9) return "em em-smiley";
        else if(val >= 6) return "em em-slightly_smiling_face";
        else if(val >= 3) return "em em-neutral_face";
        else if(val >= 0) return "em em-confused";
        else return  "em em-angry";
    }    
   
    render(){        
        return(
            <div className='Joke'>
                <div className='Joke-buttons'>
                    <i 
                        className="fa-solid fa-arrow-up"
                        onClick={this.props.upvote}/>
                    <span 
                        className='Joke-voteCount'
                        style={{borderColor: this.getColor()}}
                    >
                        {this.props.votes}
                    </span>
                    <i 
                        className="fa-solid fa-arrow-down"
                        onClick={this.props.downvote}/>
                </div>
                <div className='Joke-text'>
                    {this.props.joke}
                </div>
                <div className='Joke-emoji'>
                    <i className={this.getEmoji()}></i>
                </div>
            </div>
        )
    }
}

export default Joke;