import React, { Component } from 'react'
import NumItem from './NumItem'

class NumList extends Component{
    constructor(props){
        super(props);
        this.state = {
            nums : [1,2,3,4,5],
        }
        this.remove = this.remove.bind(this);
    }

    remove(num){
        console.log('Removing');
        console.log(num);
        this.setState(st => ({
            nums : st.nums.filter(n => (n !== num))
        }));
    }
    render() {
        let nums = this.state.nums.map(n => (
            <NumItem value={n} key={n} remove={this.remove}/>
        ));
        return (
            <div>
                <h1>Number List</h1>
                <ul>
                    {nums}
                </ul>
            </div>
        )
    }
    // render() {
    //     let nums = this.state.nums.map(n => (
    //       <NumItem value={n} remove={() => this.remove(n)} />
    //     ));
    //     return <ul>{nums}</ul>;
    // }
}

export default NumList;