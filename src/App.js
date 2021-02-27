import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import AllBeers from './Components/AllBeers';
import RandomBeer from './Components/RandomBeer';
import CreateBeer from './Components/CreateBeer';
import BeerDetails from './Components/BeerDetails';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/create-beer" component={CreateBeer} />
        <Route exact path="/beer/:id" component={BeerDetails} />
      </Switch>
    </div>
  );
}

export default App;
