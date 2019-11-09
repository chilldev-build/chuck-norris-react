import React, { Component } from "react";
import { loadData } from "../utils/loadData"


class Quote extends Component {
    state = {
        quote: "fetching quotes...",
        categories: 'this is a category'
    }

    //lifecycle method
    async componentDidMount() {
        const category = this.props.match.params.category_name;

        this.getQuote(category); //call getQuote function
    }    

    getQuote = async category => {
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
        this.getQuote(this.props.match.params.category_name);
    };


    //render method
    render(){
        const { quote } = this.state; //deconstruction this. refers to the class we are in
        const category = this.props.match.params.category_name;
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