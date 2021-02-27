import React from 'react';
import axios from 'axios';
import BeerDetails from './BeerDetails';

export default class AllBeers extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => {
        this.setState({ beer: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.beer === null) return <h3>Fetching Data ...</h3>;
    return (
      <div>
        <BeerDetails beer={this.state.beer} />
      </div>
    );
  }
}
