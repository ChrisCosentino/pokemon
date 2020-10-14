import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import PokemonContext from '../../context/pokemon/pokemonContext';

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
          <div>
            <span className='row-title'>Type:</span>
            <span>
              {selectedPokemon.types.map((type, index) => (
                <div key={index}>{type}</div>
              ))}
            </span>
          </div>
          <div>
            <span className='row-title'>Rarity:</span>
            <span>{selectedPokemon.rarity}</span>
          </div>
          <div>
            <span className='row-title'>Series:</span>
            <span>{selectedPokemon.series}</span>
          </div>
          <div>
            <span className='row-title'>Set:</span>
            <span>{selectedPokemon.set}</span>
          </div>

          {selectedPokemon.evolvesFrom && (
            <div>
              <span className='row-title'>Evolves from:</span>
              <span>{selectedPokemon.evolvesFrom}</span>
            </div>
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
