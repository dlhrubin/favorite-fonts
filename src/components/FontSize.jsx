import React from 'react';
import PropTypes from 'prop-types';

// Implement font size controls
function FontSize(props) {
  const { fontSize, handleChange } = props;
  return (
    <li className="fontSize">
      <button type="button">
        <span id="currentSize" style={{ fontWeight: 600 }}>{`${fontSize}px`}</span>
        <i className="fas fa-caret-down" />
      </button>
      <input id="slider" type="range" min="8" max="300" value={fontSize} onChange={handleChange} />
    </li>
  );
}

// Set defaults
FontSize.defaultProps = {
  fontSize: '8',
  handleChange: () => {},
};

// Define propTypes
FontSize.propTypes = {
  fontSize: PropTypes.string,
  handleChange: PropTypes.func,
};

export default FontSize;
