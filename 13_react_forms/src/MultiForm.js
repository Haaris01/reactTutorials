import React, { Component } from 'react'
class MultiForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        alert(`You entered ${this.state.username}`);
        this.setState({username:''});
    }
    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="username" 
                        onChange={this.handleChange} 
                        value={this.state.username}
                        name="username"
                    />
                    <input 
                        type="email" 
                        placeholder="email" 
                        onChange={this.handleChange} 
                        value={this.state.email}
                        name="email"
                    />
                    <input 
                        type="password" 
                        placeholder="password" 
                        onChange={this.handleChange} 
                        value={this.state.password}
                        name="password"
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default MultiForm;