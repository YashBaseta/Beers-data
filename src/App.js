// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BeerCard from '../src/components/BeerCard';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredBeers, setFilteredBeers] = useState([]);

  useEffect(() => {
    // Fetch the beers data from the API
    axios.get('https://api.sampleapis.com/beers/ale')
      .then(response => {
        setBeers(response.data);
        setFilteredBeers(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Filter beers based on the search query
    if (search) {
      setFilteredBeers(
        beers.filter(beer => beer.name.toLowerCase().includes(search.toLowerCase()))
      );
    } else {
      setFilteredBeers(beers);
    }
  }, [search, beers]);

  return (
    <div className="app">
      <h1 style={{textAlign:"center"}}>Beer List</h1>
      <input
      style={{height:"30px",width:"200px", }}
        type="text"
        placeholder="Search for a beer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="beer-cards">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
};

export default App;
