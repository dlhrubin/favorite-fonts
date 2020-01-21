import React, { Component } from 'react';

// Implement major header
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: '18px',
    };
  }

  render() {
    const { fontSize } = this.state;
    return (
      <nav>
        <ul>
          <li className="search">
            <i className="fas fa-search" />
            <input type="text" placeholder="Search fonts" />

          </li>
          <li className="example">
            <input type="text" placeholder="Type something" />
          </li>
          <li className="fontSize">
            <button type="button">
              <span style={{ fontWeight: 600 }}>{fontSize}</span>
              <i className="fas fa-caret-down" />
            </button>
            <input type="range" min="8" max="300" />
          </li>
          <li className="colorMode">
            <button type="button">
              <i className="fas fa-fill-drip" />
            </button>
          </li>
          <li className="view">
            <button type="button">
              <i className="fas fa-list-alt" />
            </button>
          </li>
          <li className="reset">
            <button type="button">
              <i className="fas fa-redo-alt" />
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
