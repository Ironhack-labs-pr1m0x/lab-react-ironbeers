import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class BeerDetails extends React.Component {
  state = {
    beer: null,
  };

  componentDidMount() {
    if (!this.props.beer) {
      const beerId = this.props.match.params.id;
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then((res) => {
          this.setState({ beer: res.data });
        })
        .catch((err) => console.log(err));
    } else {
      this.setState({ beer: this.props.beer });
    }
  }

  render() {
    if (this.state.beer === null) return <h3>Fetching data ...</h3>;
    const { name, image_url, tagline, description } = this.state.beer;
    return (
      <div style={{ width: '750px', margin: '0 auto', padding: '50px' }}>
        <img src={image_url} alt="" style={{ height: '200px' }} />
        <h1>{name}</h1>
        <p>{tagline}</p>
        <p>{description}</p>
        <Link to="/">
          <button>Back to home</button>
        </Link>
      </div>
    );
  }
}
