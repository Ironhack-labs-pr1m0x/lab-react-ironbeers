import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div style={{ backgroundColor: '#3dc4fc', textAlign: 'center' }}>
      <Link to="/">
        <img
          src="/home.png"
          alt=""
          style={{ width: '50px', padding: '15px' }}
        />
      </Link>
    </div>
  );
}
