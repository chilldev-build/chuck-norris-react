import React, { Component } from "react";
import { loadData } from "../utils/loadData"


class Quote extends Component {
    state = {
        quote: "fetching quotes...",
        categories: 'this is a category'
    }

    //lifecycle method
    async componentDidMount() {
        this.getQuote(); //call getQuote function
    }    

    componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.getQuote();
        }
    }

    getQuote = async () => {
        const { category } = this.props; //deconstruction

        const data = await loadData(
            `https://api.chucknorris.io/jokes/random?category=${category}`
        );
        const quote = data.value;

        this.setState({
            quote
        })
    }

    getCategory = async () => {
        
        const data = await loadData(
            `https://api.chucknorris.io/jokes/categories`
        );
        const categories = data;
            console.log(categories);
    }

    handleClick = e => {
        e.preventDefault();
        this.getQuote();
    };


    //render method
    render(){
        const { quote } = this.state; //deconstruction this. refers to the class we are in
        const { category } = this.props;
        console.log(this.props.category);
        return (
            <>
            <p>{ quote}</p>
            <button onClick={e => this.handleClick(e)}>
                Get Another Quote From the {category} Category
            </button>
            </>
        );
    }
}


export default Quote;