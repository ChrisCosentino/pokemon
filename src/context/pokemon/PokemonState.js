import React, { useReducer } from 'react';
import axios from 'axios';

import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';

import { SEARCH_POKEMON, SET_SELECTED_POKEMON, SET_ERROR } from '../types';

const PokemonState = (props) => {
  const initialState = {
    selectedPokemon: null,
    pokemonList: [],
    error: '',
  };

  const [state, dispatch] = useReducer(PokemonReducer, initialState);

  const searchPokemon = async (name) => {
    const res = await axios.get(
      `https://api.pokemontcg.io/v1/cards?name=${name}`
    );

    if (res.data.cards.length < 1) {
      dispatch({
        type: SET_ERROR,
        payload: 'The Pokemon doesnt exist!',
      });
    } else {
      dispatch({
        type: SEARCH_POKEMON,
        payload: res.data.cards,
      });
    }
  };

  const setSelectedPokemon = (pokemon) => {
    dispatch({
      type: SET_SELECTED_POKEMON,
      payload: pokemon,
    });
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon: state.selectedPokemon,
        pokemonList: state.pokemonList,
        error: state.error,
        searchPokemon,
        setSelectedPokemon,
      }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonState;
