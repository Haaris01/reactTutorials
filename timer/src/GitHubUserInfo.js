import React, { Component } from 'react'
import axios from 'axios'
class GitHubUserInfo extends Component {
    constructor(props) {
        super(props);
        this.state={imgUrl : "", name:""};
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    async componentDidMount() {
        const url = `https://api.github.com/users/${this.props.username}`;
        let response = await axios.get(url);
        console.log(response.data.avatar_url);

        this.setState({
            imgUrl : response.data.avatar_url,
            name : this.props.username
        });
    }
    render() {
        return (
            <div>
                <h1>GitHub User Info</h1>
                <h2>{this.state.name}</h2>
                <img src={this.state.imgUrl}/>
            </div>
        )
    }
}

export default GitHubUserInfo;