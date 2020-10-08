import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";

import Profile from "./components/Profile";
import Melodition from "./components/Melodition";
import PokemoneList from "./components/PokemoneList";
import Search from "./components/Search";

export default function App() {
  return (
    <Router>
      <Header userName={"b3hr4d"} />
      <Switch>
        <Route exact path="/" component={Melodition} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/list" component={PokemoneList} />
        <Route exact path="/:pokemonName?" component={Search} />
      </Switch>
    </Router>
  );
}
