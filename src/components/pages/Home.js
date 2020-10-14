import React, { useState, useContext } from 'react';

import PokemonContext from '../../context/pokemon/pokemonContext';

import SearchResults from '../layout/SearchResults';

const Home = () => {
  const pokemonContext = useContext(PokemonContext);
  const { searchPokemon } = pokemonContext;

  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    searchPokemon(search);
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1 className='title'>Pokemon Finder</h1>

        <input
          placeholder='Search'
          className='search-input'
          type='text'
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </form>

      <SearchResults />
    </div>
  );
};

export default Home;
