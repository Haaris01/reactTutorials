import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "./Joke";
import { v4 as uuidv4 } from "uuid";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
      loading: false,
    };
    this.seenJokes = new Set(this.state.jokes.map((j) => j.joke));
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // load jokes here
    if (this.state.jokes.length === 0) {
      this.getJokes();
    }
  }

  async getJokes() {
    try{
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com/", {
            headers: { Accept: "application/json" },
        });

        let newJoke = res.data.joke;
        if (!this.seenJokes.has(newJoke)){
            jokes.push({ id: uuidv4(), joke: res.data.joke, votes: 0 });
        }
        else console.log(newJoke);
        }
        this.setState(
        (st) => ({
            jokes: [...st.jokes, ...jokes],
            loading: false,
        }),
        () =>
            window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
        );
    } catch(err){
        alert(err);
    }
  }
  handleVote(id, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          j.id === id ? { ...j, votes: j.votes + delta } : j
        ),
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  }

  handleClick(evt) {
    this.setState({ loading: true }, () => this.getJokes());
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="fa-regular fa-8x fa-face-laugh fa-spin"></i>
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }
    let jokes = this.state.jokes.sort((a,b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span className="JokeList-title-dad">Dad</span>{" "}
            <span className="JokeList-title-jokes"> Jokes</span>
          </h1>
          <img className="JokeList-logo" src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            <span className="New">New</span><span className="Jokes">Jokes</span>
          </button>
        </div>

        <div className="JokeList-jokes">
          {jokes.map((j, idx) => (
            <Joke
              key={j.id}
              joke={j.joke}
              votes={j.votes}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
