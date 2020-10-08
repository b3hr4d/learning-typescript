import React, { Component } from "react";
import { PokemonProps } from "./Search";

interface IProps {
  pokemon: PokemonProps;
}

class Pokemon extends Component<IProps> {
  render() {
    const { pokemon } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <img
          style={{ margin: "auto" }}
          src={pokemon.imageUrl}
          alt="pokemon"
          className="pokemon-img"
        />
        <p>
          {pokemon.name} has {pokemon.numberOfAbilites} abilites and{" "}
          {pokemon.baseExperience} base experience point.
        </p>
      </div>
    );
  }
}

export default Pokemon;
