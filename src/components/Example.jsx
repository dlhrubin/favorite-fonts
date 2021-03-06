import React from 'react';
import PropTypes from 'prop-types';

// Implement example text box
function Example(props) {
  const { example, darkMode, handleChange } = props;
  return (
    <li className="example">
      <input id="exampleBox" className={darkMode ? 'dm-white' : ''} type="text" placeholder="Type something" onChange={handleChange} value={example} />
    </li>
  );
}

// Set defaults
Example.defaultProps = {
  example: '',
  darkMode: false,
  handleChange: () => {},
};

// Define propTypes
Example.propTypes = {
  example: PropTypes.string,
  darkMode: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default Example;
