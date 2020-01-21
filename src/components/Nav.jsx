import React from 'react';
import PropTypes from 'prop-types';
import FontSize from './FontSize';
import Example from './Example';

// Implement major header
function Nav(props) {
  const { fontSize, changeExample, changeFontSize } = props;
  return (
    <nav>
      <ul>
        <li className="search">
          <i className="fas fa-search" />
          <input type="text" placeholder="Search fonts" />
        </li>
        <Example handleChange={changeExample} />
        <FontSize fontSize={fontSize} handleChange={changeFontSize} />
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

// Set defaults
Nav.defaultProps = {
  fontSize: '8',
  changeExample: () => {},
  changeFontSize: () => {},
};

// Define propTypes
Nav.propTypes = {
  fontSize: PropTypes.string,
  changeExample: PropTypes.func,
  changeFontSize: PropTypes.func,
};

export default Nav;
