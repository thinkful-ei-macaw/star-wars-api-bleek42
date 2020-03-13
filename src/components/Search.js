import React, { Component } from "react";
//import StarWarsAPI from '../StarWarsAPI';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }
    }

    render(){
        return(
            <div className="search_container">
                <h2>Search for you favorite Star Wars characters!</h2>
                <label htmlFor="search_input"></label>
                <input placeholder="Luke, Chewbacca, etc..."/>
            </div>
        )
    }

}

export default Search;