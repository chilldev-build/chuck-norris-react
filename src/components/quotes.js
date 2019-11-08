import React, { Component } from "react";
import { loadData } from "../utils/loadData"
import { buildChildren } from "@babel/types";

class Quote extends Component {
    state = {
        quote: "fetching quotes..."
    }

    async componentDidMount() {
        this.getQuote();
    }    

    componentDidMount(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.getQuote();
        }
    }

    getQuote = async () => {
        const { category } = this.props;

        const data = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        const quote = data.value;
        
        this.setState({
            quote
        })
    }

    handleClick = e => {
        e.preventDefault();
        this.getQuote();
    };

    render(){
        const { quote } = this.state;
        const { category } = this.props;
        return (
            <>
            <p>{quote}</p>
            <button onClick={e => this.handleClick(e)}>
                Get Another Quote
            </button>
            </>
        );
    }
}


export default Quote;