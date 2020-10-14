import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import PokemonContext from '../../context/pokemon/pokemonContext';

import DetailRow from '../layout/DetailRow';

const PokeDetails = () => {
  const pokemonContext = useContext(PokemonContext);
  const { selectedPokemon, setSelectedPokemon } = pokemonContext;

  const handleBackBtn = () => {
    setSelectedPokemon(null);
  };

  if (selectedPokemon === null) {
    return <Redirect to='/' />;
  }

  return (
    <div className='poke-details'>
      <div className='card'>
        <div className='details-name'>{selectedPokemon.name}</div>
        <img
          className='details-img'
          src={selectedPokemon.imageUrlHiRes}
          alt={selectedPokemon.name}
        />
      </div>

      <div className='details-info'>
        <h1 className='detail'>Details</h1>
        <div className='detail-table'>
          <DetailRow title='Type' types={selectedPokemon.types} />
          <DetailRow title='Rarity' val={selectedPokemon.rarity} />
          <DetailRow title='Series' val={selectedPokemon.series} />
          <DetailRow title='Set' val={selectedPokemon.set} />
          {selectedPokemon.evolvesFrom && (
            <DetailRow title='Evolves from' val={selectedPokemon.evolvesFrom} />
          )}

          <button className='back-btn' onClick={handleBackBtn}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokeDetails;
