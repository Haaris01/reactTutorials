import React, { Component } from 'react';
import './Deck.css';
import axios from 'axios';
import Card from './Card'

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck'
class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            drawn: [],
        }
        this.getCard = this.getCard.bind(this);
    }

    async componentDidMount() {
        const DECK_URL = `${API_BASE_URL}/new/shuffle/`;
        let deck = await axios.get(DECK_URL);
        this.setState({ deck: deck.data });
    }

    async getCard() {
        //https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1
        let id = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if(cardRes.data.success === false){
                throw new Error("No card remaining")
            }
            let card = cardRes.data.cards[0];
            this.setState(st => ({
                drawn: [
                    ...st.drawn, {
                        id: card.code,
                        image: card.image,
                        name: `${card.suit} ${card.value}`,
                    }
                ]
            }));
        } catch(err) {
            alert(err);
        }
    }

    render() {
        const cards = this.state.drawn.map((card) => (
            <Card key={card.id} image={card.image} name={card.name}/>
        ));
        return (
            <div className="Deck">
                <h1 className="Deck-title">♦ Card Dealer ♦</h1>
                <h2 className="Deck-title subtitle">♦ A little demo made with react ♦</h2>
                <button onClick={this.getCard} className="Deck-btn">Get Card!</button>
                <div className="Deck-cardarea">{cards}</div>
            </div>
        );
    }
}

export default Deck;