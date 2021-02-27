import React, { Component } from 'react';

export default class SearchBar extends Component {
  handleSearchInput = (ev) => {
    this.props.handleSearchInput(ev.target.value);
  };

  render() {
    return (
      <div>
        <h3>FILTER BEERS</h3>
        <input
          onChange={this.handleSearchInput}
          type="text"
          style={{ width: '90%' }}
        />
      </div>
    );
  }
}
