import React, { Component } from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos : [
                // {task : , id : }
            ],
        }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }

    create(todo){
        this.setState({
            todos : [...this.state.todos, todo]
        })
    }

    update(updatedTask,id){
        console.log(updatedTask);
        const newTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                return {...todo, task : updatedTask}
            }
            return todo;
        }) 
        console.log(newTodos);
        this.setState({
            todos : newTodos,
        })
    }

    remove(id){
        this.setState({
            todos : this.state.todos.filter(todo => todo.id !== id)
        })
    }

    render(){
        const todos = this.state.todos.map(todo => (
            <Todo 
                task={todo.task} 
                id={todo.id}
                key={todo.id}
                remove={this.remove}
                update={this.update}
            />
        ))
        return(
            <div className='TodoList-container'>
                <h2 className='TodoList-title'>Todo List</h2>
                <h3 className='TodoList-subtitle'>Add Item</h3>
                <TodoForm create={this.create}/>
                <div>
                <h3 className='TodoList-subtitle'>Tasks</h3>
                    {
                    this.state.todos.length === 0?
                    <h3 className='TodoList-muted'>Add Tasks To Be Done!</h3> : 
                    
                    <ul className='TodoList-list'>
                        {todos}
                    </ul>
                    }
                    
                </div>
            </div>
        )
    }
}

export default TodoList;