import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

export default class AllBeers extends React.Component {
  state = {
    beers: null,
    searchValue: '',
  };

  handleSearchInput = (searchValue) => {
    this.setState({ searchValue });
    this.handleBeerFiltering(searchValue);
  };

  handleBeerFiltering = (searchValue) => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchValue}`)
      .then((res) => {
        this.setState({
          beers: res.data,
        });
      });
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((res) => {
      this.setState({ beers: res.data });
    });
  }

  render() {
    if (this.state.beers === null) return <h3>Fetching data...</h3>;

    return (
      <div>
        <SearchBar handleSearchInput={this.handleSearchInput} />

        <div>
          <h1>ALL BEERS</h1>
          {this.state.beers.map((beer) => {
            return (
              <Link to={`/beer/${beer._id}`} key={beer._id}>
                <div
                  style={{
                    display: 'flex',
                    border: '2px solid black',
                    padding: '15px',
                  }}
                >
                  <div>
                    <img
                      src={beer.image_url}
                      alt=""
                      style={{ height: '150px' }}
                    />
                  </div>
                  <div>
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>Created by: {beer.contributed_by}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
