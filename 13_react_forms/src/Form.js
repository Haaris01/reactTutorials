import React, { Component } from 'react'
class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            username: evt.target.value,
        })
    }
    handleSubmit(evt){
        evt.preventDefault();
        alert(`You entered ${this.state.username}`);
        this.setState({username:''});
    }
    render() {
        //whenever using labels and using "for" use "htmlFor" because for is
        //reserved for loops
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username : </label>

                    <input 
                        type="text" 
                        onChange={this.handleChange} 
                        value={this.state.username}
                        id="username"
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;