import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <>
        <nav>
          <div>
            <h2>Joenny Garcia</h2>
          </div>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Header;
