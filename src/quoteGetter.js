import React, { Component } from 'react';

class QuoteGetter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: 'Please press the button to get a random quote',
            author: '',
        }
        this.endpoint = 'https://thesimpsonsquoteapi.glitch.me/quotes';
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        fetch(this.endpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    quote: data[0].quote,
                    author: data[0].character,
                })
                console.log(this.state)
            })

    }
    render() {
        return (
            <div className='fDiv'>
                <h1>Random Quote</h1>
                <p className='quote'>{this.state.quote}</p>
                <i className='author'>{this.state.author}</i>
                <br />
                <input className='button' type='button' onClick={this.handleClick} value="Get quote" />
            </div>
        )
    }
}

export default QuoteGetter;