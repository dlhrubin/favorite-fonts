import React from 'react';
import PropTypes from 'prop-types';

// Implement example text box
function Example(props) {
  const { example, handleChange } = props;
  return (
    <li className="example">
      <input id="exampleBox" type="text" placeholder="Type something" onChange={handleChange} value={example} />
    </li>
  );
}

// Set defaults
Example.defaultProps = {
  example: '',
  handleChange: () => {},
};

// Define propTypes
Example.propTypes = {
  example: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Example;
