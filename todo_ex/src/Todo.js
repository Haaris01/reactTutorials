import React, { Component } from 'react'
import './Todo.css';
class Todo extends Component{
    constructor(props){
        super(props);

        this.state = {
            task: this.props.task,
            isEditing : false,
            isCompleted : false,
        }

        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate =  this.handleUpdate.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
    }

    handleRemove(){
        this.props.remove(this.props.id);
    }

    handleUpdate(evt){
        evt.preventDefault();
        this.props.update(this.state.task, this.props.id);
        this.setState({
            isEditing: false
        })
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value,
        })
    }

    handleCompleted(evt){
        this.setState({
            isCompleted : !this.state.isCompleted
        })
    }

    toggleForm(){
        this.setState({
            isEditing : true
        })
    }

    render(){
        let result;

        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type="text"
                            name="task"
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button className='Todo-btn'>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <li className='Todo-li'>
                    <input type="checkbox" onChange={this.handleCompleted}/>
                    <label className={this.state.isCompleted ? "Todo-Compl" : ""}>{this.props.task}</label>
                    <button className="Todo-btn edit" onClick={this.toggleForm}>Edit</button>
                    <button className="Todo-btn delete" onClick={this.handleRemove}>Remove</button>
                </li>
            )
        }
        return(
            <div>
                {result}
            </div>
        )
    }

}

export default Todo;