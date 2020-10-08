import React, { Component } from "react";
import ListItem from "./ListItem";

interface States {
  error: boolean;
  list: string[];
  api: {
    base: string;
    next: string | null;
    prev: string | null;
  };
}

export class PokemoneList extends Component<{}, States> {
  state = {
    error: true,
    list: [] as string[],
    api: {
      base: `https://pokeapi.co/api/v2/pokemon`,
      next: "",
      prev: "",
    },
  };

  componentDidMount() {
    this.startFetching(this.state.api.base);
  }
  startFetching = (api: string): void => {
    console.log(api);
    fetch(api).then((res) => {
      if (res.status !== 200) {
        this.setState({ error: true });
        return;
      }
      res.json().then((data) => {
        this.setState({
          error: false,
          list: data.results,
          api: {
            base: `https://pokeapi.co/api/v2/pokemon`,
            next: data.next,
            prev: data.previous,
          },
        });
      });
    });
  };
  nextPage = (): void => {
    if (this.state.api.next) this.startFetching(this.state.api.next);
  };
  prevPage = (): void => {
    if (this.state.api.prev) this.startFetching(this.state.api.prev);
  };
  render() {
    const { list, api } = this.state;
    const checker = (target: string | null) => {
      if (target) return false;
      else return true;
    };
    return (
      <div>
        {list.map((item: any, i: number) => {
          const itemCardElemProps = { handleEvents: (): void => {}, ...item };
          return <ListItem key={`${item.id}_${i}`} {...itemCardElemProps} />;
        })}
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            onClick={this.prevPage}
            value="prev"
            disabled={checker(api.prev)}
          >
            Prev
          </button>
          <button
            onClick={this.nextPage}
            value="next"
            disabled={checker(api.next)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default PokemoneList;
