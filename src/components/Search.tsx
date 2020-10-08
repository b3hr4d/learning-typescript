import React, { Component } from "react";
import Melodition from "./Melodition";

export interface SearchState {
  error: boolean;
  pokemon: PokemonProps | null;
}
interface SearchProps {
  pokemonName?: string;
  match?: Match;
}
interface Match {
  url: string;
}
export interface PokemonProps {
  name: string;
  numberOfAbilites: number;
  baseExperience: number;
  imageUrl: string;
}

class Search extends Component<SearchProps, SearchState> {
  pokemonRef: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      error: false,
      pokemon: null,
    };
    this.pokemonRef = React.createRef();
  }
  componentDidMount() {
    if (this.props.match?.url) this.startFetching(this.props.match.url);
  }
  startFetching(inputValue: string | undefined) {
    console.log(inputValue);
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then((res) => {
      if (res.status !== 200) {
        this.setState({ error: true });
        return;
      }
      res.json().then((data) => {
        console.log(data);
        this.setState({
          error: false,
          pokemon: {
            name: data.name,
            numberOfAbilites: data.abilities.length,
            baseExperience: data.base_experience,
            imageUrl: data.sprites.front_default,
          },
        });
      });
    });
  }
  sreachClick = (): void => {
    const inputValue = this.pokemonRef.current?.value;
    this.startFetching(inputValue);
  };

  render() {
    const { error, pokemon } = this.state;
    return (
      <div>
        <input type="text" ref={this.pokemonRef} />
        <button onClick={this.sreachClick} className="mybutton">
          Search
        </button>
        <Melodition error={error} pokemon={pokemon} />
      </div>
    );
  }
}

export default Search;
