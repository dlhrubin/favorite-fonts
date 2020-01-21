import React from 'react';
import PropTypes from 'prop-types';

// Implement example text box
function Example(props) {
  const { handleChange } = props;
  return (
    <li className="example">
      <input type="text" placeholder="Type something" onChange={handleChange} />
    </li>
  );
}

// Set defaults
Example.defaultProps = {
  handleChange: () => {},
};

// Define propTypes
Example.propTypes = {
  handleChange: PropTypes.func,
};

export default Example;
