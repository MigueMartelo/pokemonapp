import { startLoadingPokemons } from './pokemonSlice';

const pokemonApiURL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // dispatch(setPokemons());
  };
};
