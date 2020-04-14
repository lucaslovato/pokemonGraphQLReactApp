import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMON } from '../graphql/get-pokemon';
import { Pokemon } from '../components/Pokemon';

export const PokemonsContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(
    GET_POKEMON,
    {
      variables: { first: 9 }

    });
  return (
    <div className="pokemon">
      {
        pokemons &&
        pokemons.map(
          pokemon =>
            <Pokemon pokemon={pokemon} key={pokemon.id} />
        )
      }
    </div>
  );
}