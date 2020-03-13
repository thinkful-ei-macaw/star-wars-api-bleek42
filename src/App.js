import React from 'react';
import Search from './components/Search';
import SearchFilters from './components/SearchFilters';
import Results from './components/Results';


function App() {
  return (
    <div className="App">
      <Search />
      <SearchFilters />
    </div>
  );
}

export default App;