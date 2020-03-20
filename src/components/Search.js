import React, { Component } from "react";

class Search extends Component {

    state = {
        form: '',
        submitted: false,
        data: [],
        categories: [],
        error: null
    }  
    
    componentDidMount() {
        this.getStarWarsCategories();
    }

    getStarWarsCategories() {
        const categories = [];
        fetch('https://swapi.co/api/')
        .then(res => {
            if(!res.ok) {
                return res.json()
                .then(err => {
                    console.error(err);
                })
            }
            return res.json();
        })
        .then(data => {
            //console.log(data)
            for(const key in data) {
                categories.push(key);
            }
            this.setState({
                categories: categories
            })
        })
        .catch(err => this.setState({
            error: console.error(err)
        }))
    }

    getStarWarsData(category) {
        fetch(`https://swapi.co/api/${category}?name=${this.state.form}`)
            .then(res => {
                if (!res.ok) {
                    return res.json()
                        .then(err => {
                            console.error(err);
                        })
                }
                return res.json();
            })
            .then(data => {
                console.log(data)
                this.setState({
                    data: data.results || []
                })
            })
            .catch(err => this.setState({
                error: console.error(err)
            }))
    }

    submitSearch(search) {
        this.setState({
            form: search,
            submitted: true
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = event.target.category.value;
        this.getStarWarsData(name);
    }

    render() {
        return (
            <div>
                <h2>Search for you favorite Star Wars characters!</h2>
                <form className="Search-Form"
                onSubmit={event => this.handleSubmit(event)}>
                    <label htmlFor="search"> Type here </label>
                    <input
                    type="text"
                    id="search"
                    onChange={event => this.submitSearch(event.target.value)}
                    />
                    <label htmlFor="category"> Search Options </label>
                    <select name="category">
                        {this.state.categories.map(category => (
                            <option value={category}>{category}</option>
                        ))}
                    </select>
                    <button>Search</button>
                </form>
                        <section>{this.state.data.map(item => (
                            <li>
                                {item.name}
                            </li>
                        ))}</section>
            </div>
        )
    }
}

export default Search;