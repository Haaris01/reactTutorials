import React, { Component } from 'react'

class ShoppingListForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            qty : '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value,
        })
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addItem(this.state);
        this.setState(st => ({
            name : '',
            qty : '',
        }))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name : </label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.name}
                        name="name"
                        id="name"
                    />
                    <label htmlFor="qty">Quantity : </label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.qty}
                        name="qty"
                        id="qty"
                    />
                    <button>Add Item</button>
                </form>
            </div>
        )
    }
}

export default ShoppingListForm;