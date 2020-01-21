import React, { Component } from 'react';
import FontSize from './FontSize';

// Implement major header
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSize: '8',
    };
  }

  handleChange = (e) => {
    this.setState({
      fontSize: e.target.value,
    });
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
          <FontSize fontSize={fontSize} handleChange={this.handleChange} />
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
