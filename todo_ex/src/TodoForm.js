import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css';
class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            task : "", 
            id:""
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
        const todo = {...this.state, id:uuidv4()};
        this.props.create(todo);
        this.setState({
            task : "",
            id: ""
        })
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='task' className='TodoForm-label'></label>
                <input 
                    type="text" 
                    value={this.state.task}
                    name="task"
                    id="task"
                    onChange={this.handleChange}
                />
                <button className='TodoForm-btn'>Save</button>
            </form>
        )
    }
}

export default TodoForm;