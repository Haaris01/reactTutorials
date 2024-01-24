import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
class NewBoxform extends Component {

    constructor(props){
        super(props);

        this.state = {
            height : "",
            width : "",
            color : "",
            id: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value 
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.submit({...this.state, id: uuidv4()});
        this.setState({
            height : "",
            width : "",
            color : "",
            id:""
        })
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="height">
                    Height : 
                </label>
                <input 
                    type="text"    
                    name="height" 
                    id="height" 
                    onChange={this.handleChange}
                    value={this.state.height}
                />
            </div>
            <div>
                <label htmlFor="width">width : </label>
                <input 
                    type="text"    
                    name="width"
                    id="width"
                    onChange={this.handleChange}
                    value={this.state.width} 
                />
            </div>
            <div>
                <label htmlFor="color">Color : </label>
                <input 
                    type="text" 
                    name="color" 
                    id="color"
                    onChange={this.handleChange}
                    value={this.state.color}
                />
            </div>
            <input type="submit" />
        </form>
        );
    }
}

export default NewBoxform;
