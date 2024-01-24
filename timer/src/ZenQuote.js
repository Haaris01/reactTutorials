import axios from 'axios';
import React, { Component } from 'react'
import './ZenQuote.css'
class ZenQuote extends Component{
    constructor(props){
        super(props);
        this.state = {
            quote : "",
            isLoaded : false,
        }
    }
    componentDidMount(){
        axios.get("https://type.fit/api/quotes").then(response => {
            setTimeout(
                function() {
                    this.setState({quote : response.data[Math.floor(Math.random() * 1000)].text, isLoaded: true});
                }.bind(this),
                2000
            );
        })
        .catch(err => {
            console.log("no response");
        })
    }

    render(){
        return(
            <div>
                { this.state.isLoaded ? (
                    <div>
                        <h1>Always Remember...</h1>
                        <h4>{ this.state.quote }</h4>
                    </div>
                )
                    : (
                    <div className="ZenQuote-loader"></div>
                )
                }               
            </div>
        )
    }
}

export default ZenQuote;