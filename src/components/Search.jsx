import React from 'react';
import PropTypes from 'prop-types';

// Implement search bar
function Search(props) {
  const { query, handleChange, handleDelete } = props;
  const buttonStyle = { visibility: (query.trim()) ? 'visible' : 'hidden' };
  return (
    <li className="search">
      <i className="fas fa-search" />
      <input id="search" type="text" placeholder="Search fonts" value={query} onChange={handleChange} />
      <button id="reset-query" className="icon-btn" type="button" style={buttonStyle} onClick={handleDelete}>
        <i className="fas fa-times" />
      </button>
    </li>
  );
}

// Set defaults
Search.defaultProps = {
  query: '',
  handleChange: () => {},
  handleDelete: () => {},
};

// Define propTypes
Search.propTypes = {
  query: PropTypes.string,
  handleChange: PropTypes.func,
  handleDelete: PropTypes.func,
};

export default Search;
