import React, { Component } from 'react';
import Results from './components/Results';
import Search from './components/Search';


class App extends Component {

  state = {
    results: [],
    loading: false
  }

  render() {
    return (
    <div className="App">
      <Search />
      <Results />
    </div>
  )}
  
}

export default App;