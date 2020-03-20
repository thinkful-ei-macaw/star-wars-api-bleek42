import React, { Component } from 'react';

class Results extends Component {

    state = {
        searchResult: [],
        loading: false
    }

    render() {

        return (
            <div>
                <ul className="results">
                    {/*{searchResult.map(result => (
                        <li>{ }</li>
                    ))}*/}
                </ul>
            </div>
        )
    }

}

export default Results;