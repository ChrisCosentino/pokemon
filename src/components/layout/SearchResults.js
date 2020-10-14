import React, { Fragment, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import PokemonContext from '../../context/pokemon/pokemonContext';

const SearchResults = () => {
  const pokemonContext = useContext(PokemonContext);
  const {
    pokemonList,
    setSelectedPokemon,
    selectedPokemon,
    error,
  } = pokemonContext;

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  if (selectedPokemon !== null) {
    return <Redirect to={`/p/${selectedPokemon.id}`} />;
  }

  return (
    <Fragment>
      {pokemonList.length ? (
        <div className='search-results'>
          {pokemonList.map((pokemon) => (
            <img
              key={pokemon.id}
              onClick={() => handleSelectPokemon(pokemon)}
              className='card-img-preview'
              src={pokemon.imageUrlHiRes}
              alt={pokemon.name}
            />
          ))}
        </div>
      ) : (
        <Fragment>
          {!error ? (
            <div className='results-empty'>Search for a Pokemon!</div>
          ) : (
            <div className='error-msg'>{error}</div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default SearchResults;
