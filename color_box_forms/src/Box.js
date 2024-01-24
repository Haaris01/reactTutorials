import React, { Component } from "react";

class Box extends Component {

    constructor(props){
        super(props);

        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(){
        this.props.remove(this.props.id);
    }
    render() {
        return (
        <div>
            <div
            style={{
                "height": `${this.props.height}em`,
                "width": `${this.props.width}em`,
                "backgroundColor": this.props.color
            }}
            ></div>
            <button onClick={this.handleRemove}>X</button>
        </div>
        );
    }
}

export default Box;
