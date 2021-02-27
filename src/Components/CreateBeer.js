import React from 'react';
import axios from 'axios';

export default class AllBeers extends React.Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: 0,
    contributed_by: '',
  };

  handleInputChange = (ev) => {
    if (ev.target.name !== 'attenuation_level') {
      this.setState({ [ev.target.name]: ev.target.value });
    } else {
      this.setState({ attenuation_level: +ev.target.value });
    }
  };

  handleFormData = (ev) => {
    ev.preventDefault();

    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div style={{ width: '750px' }}>
        <form action="" style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="name">Name</label>
          <input
            onChange={this.handleInputChange}
            name="name"
            type="text"
            value={this.state.name}
          />
          <label htmlFor="tagline">Tagline</label>
          <input
            onChange={this.handleInputChange}
            name="tagline"
            type="text"
            value={this.state.tagline}
          />
          <label htmlFor="description">Description</label>
          <textarea
            onChange={this.handleInputChange}
            name="description"
            id=""
            cols="30"
            rows="10"
            value={this.state.description}
          ></textarea>
          <label htmlFor="first_brewed">First Brewed</label>
          <input
            onChange={this.handleInputChange}
            name="first_brewed"
            type="text"
            value={this.state.input}
          />
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            onChange={this.handleInputChange}
            name="brewers_tips"
            type="text"
            value={this.state.brewers_tips}
          />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            onChange={this.handleInputChange}
            name="attenuation_level"
            type="text"
            value={this.state.attenuation_level}
          />
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            onChange={this.handleInputChange}
            name="contributed_by"
            type="text"
            value={this.state.contributed_by}
          />
          <button onClick={this.handleFormData}>ADD NEW BEER</button>
        </form>
      </div>
    );
  }
}
