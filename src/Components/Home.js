import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div
        style={{
          width: '750px',
          padding: '25px',
          margin: '0 auto',
        }}
      >
        <Link to="/beers" style={{ textDecoration: 'none', color: 'black' }}>
          <div>
            <img src="/beers.png" alt="" />
            <h3>All Beers</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </Link>
        <Link
          to="/random-beer"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <div>
            <img src="/random-beer.png" alt="" />
            <h3>Random Beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </Link>
        <Link
          to="/create-beer"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <div>
            <img src="/new-beer.png" alt="" />
            <h3>New Beer</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </Link>
      </div>
    );
  }
}
