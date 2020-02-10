import React from 'react';
import PropTypes from 'prop-types';

// Implement search bar
function Search(props) {
  const {
    query, darkMode, handleChange, handleDelete,
  } = props;
  const buttonStyle = { visibility: (query.trim()) ? 'visible' : 'hidden' };
  return (
    <li className="search">
      <i className="fas fa-search" />
      <input className={darkMode ? 'dm-white' : ''} id="search" type="text" placeholder="Search fonts" autoComplete="off" value={query} onChange={handleChange} />
      <button id="reset-query" className={'icon-btn'.concat(darkMode ? ' dm-white' : '')} type="button" style={buttonStyle} onClick={handleDelete}>
        <i className="fas fa-times" />
      </button>
    </li>
  );
}

// Set defaults
Search.defaultProps = {
  query: '',
  darkMode: false,
  handleChange: () => {},
  handleDelete: () => {},
};

// Define propTypes
Search.propTypes = {
  query: PropTypes.string,
  darkMode: PropTypes.bool,
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default Search;
