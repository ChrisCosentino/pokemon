import { SEARCH_POKEMON, SET_ERROR, SET_SELECTED_POKEMON } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_POKEMON:
      return {
        ...state,
        pokemonList: action.payload,
        error: '',
      };
    case SET_SELECTED_POKEMON:
      return {
        ...state,
        selectedPokemon: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        pokemonList: [],
      };
    default:
      return state;
  }
};
