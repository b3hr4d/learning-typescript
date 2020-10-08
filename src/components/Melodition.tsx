import React from "react";
import Pokemon from "./Pokemon";
import { PokemonProps } from "./Search";

interface SearchState {
  error: boolean;
  pokemon: PokemonProps | null;
}

const Melodition: React.FC<SearchState> = (props) => {
  const { pokemon, error } = props;
  if (error) {
    return <p>Pokemone not found</p>;
  } else if (pokemon) {
    return <Pokemon pokemon={pokemon} />;
  } else {
    return <p>LOADING...</p>;
  }
};
export default Melodition;
