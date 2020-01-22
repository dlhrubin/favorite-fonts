import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Example from './Example';
import FontSize from './FontSize';

// Implement major header
function Nav(props) {
  const {
    query, fontSize, changeSearch, deleteQuery, changeExample, changeFontSize,
  } = props;
  return (
    <nav>
      <ul>
        <Search query={query} handleDelete={deleteQuery} handleChange={changeSearch} />
        <Example handleChange={changeExample} />
        <FontSize fontSize={fontSize} handleChange={changeFontSize} />
        <li className="colorMode">
          <button className="icon-btn" type="button">
            <i className="fas fa-fill-drip" />
          </button>
        </li>
        <li className="view">
          <button className="icon-btn" type="button">
            <i className="fas fa-list-alt" />
          </button>
        </li>
        <li className="reset">
          <button className="icon-btn" type="button">
            <i className="fas fa-redo-alt" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

// Set defaults
Nav.defaultProps = {
  query: '',
  fontSize: '8',
  changeSearch: () => {},
  deleteQuery: () => {},
  changeExample: () => {},
  changeFontSize: () => {},
};

// Define propTypes
Nav.propTypes = {
  query: PropTypes.string,
  fontSize: PropTypes.string,
  changeSearch: PropTypes.func,
  deleteQuery: PropTypes.func,
  changeExample: PropTypes.func,
  changeFontSize: PropTypes.func,
};

export default Nav;
