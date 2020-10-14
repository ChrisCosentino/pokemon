import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PokemonState from './context/pokemon/PokemonState';

import Home from './components/pages/Home';
import PokeDetails from './components/pages/PokeDetails';

import './styles.css';

const App = () => {
  return (
    <PokemonState>
      <Router>
        <Switch>
          <Route path='/p/:name' component={PokeDetails} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </PokemonState>
  );
};

export default App;
