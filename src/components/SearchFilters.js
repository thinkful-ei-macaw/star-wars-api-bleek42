import React, { Component } from 'react';
//import StarWarsAPI from '../StarWarsAPI';

class SearchFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Characters: '',
            Planets: '',
            Spaceships: '',
            Vehicles: '',
            Films: '',
            Species: ''
        }
    }

    // submitSearch = (event) => {
    //     event.preventDefault();

    // }

    render() {
        return (
            <div>
                <form htmlFor="filter-dropdown">
                    <select>
                        <option>Characters</option>
                        <option>Planets</option>
                        <option>Spaceships</option>
                        <option>Vehicles</option>
                        <option>Films</option>
                        <option>Species</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default SearchFilters;
