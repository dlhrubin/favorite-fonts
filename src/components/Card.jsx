import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const {
    name, text, size, styles,
  } = props;
  return (
    <div className="card">
      <div className="card-header">
        <div>
          <span className="font-name">{name}</span>
          <span className="num-styles">
            {styles.length}
            {' '}
styles
          </span>
        </div>
        <button>
          <span>+</span>
        </button>
      </div>
      <textarea defaultValue={text} />
    </div>
  );
}

Card.defaultProps = {
  name: '',
  text: '',
  size: '8',
  styles: [],
};

Card.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  styles: PropTypes.array,
};

export default Card;
