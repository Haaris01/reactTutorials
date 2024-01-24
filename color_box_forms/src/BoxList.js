import React, { Component } from 'react'
import NewBoxform from './NewBoxform';
import Box from './Box';

class BoxList extends Component{

    constructor(props){
        super(props);

        this.state={
            colorboxes : [],
        }
        this.submit = this.submit.bind(this);
        this.remove = this.remove.bind(this);
    }

    submit(newBox){
        this.setState({
            colorboxes : [...this.state.colorboxes, newBox],
        })        
    }

    remove(id){
        this.setState({
            colorboxes: this.state.colorboxes.filter(box => box.id !== id)
        })
    }

    render(){
        const boxes = this.state.colorboxes.map(c => (
            <Box
                key={c.id}
                id={c.id}
                height={c.height}
                width={c.width}
                color={c.color}
                remove={() => this.remove(c.id)}
            />
        ));

        return (
            <div>
                <h1>Color Box Form</h1>
                <NewBoxform submit={this.submit} />
                {boxes}
            </div>
        );
    }
}

export default BoxList;