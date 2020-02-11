import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/_global.scss';

const DEFAULT_TEXT = 'Then came the night of the first falling star.';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: DEFAULT_TEXT,
    };
  }

  // If component is lazy-loaded and user has typed in the "Type something box",
  // display this text instead of default
  componentDidMount() {
    const { text } = this.props;
    if (text !== DEFAULT_TEXT) {
      this.updateText(text);
    }
  }

  // If user has typed in the "Type something box", display this text on the card
  componentDidUpdate(prevProps) {
    const { text } = this.props;
    if (text !== prevProps.text) {
      this.updateText(text);
    }
  }

  // Update displayed text
  updateText = (text) => {
    const innerTrimmed = text.split(/\s+/).join(' ');
    this.setState({
      displayed: innerTrimmed || DEFAULT_TEXT,
    });
  }

  render() {
    const {
      name, size, darkMode, numStyles,
    } = this.props;
    const { displayed } = this.state;
    const textStyle = {
      fontSize: `${size}px`,
      fontFamily: `${name}, sans-serif`,
    };
    return (
      <div className="card">
        <div className="card-header">
          <div>
            <span className="font-name">{name}</span>
            <span className="num-styles" style={{ color: darkMode ? styles.lighterGray : '' }}>
              {numStyles}
              {' '}
  styles
            </span>
          </div>
          <button type="button">
            <i className="fas fa-plus-circle icon-circle" />
          </button>
        </div>
        <div id="cardText" className="text-container" contentEditable="true" suppressContentEditableWarning style={textStyle} ref={this.textArea}>{displayed}</div>
      </div>
    );
  }
}

Card.defaultProps = {
  name: '',
  text: '',
  size: '40',
  darkMode: false,
  numStyles: 0,
};

Card.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  darkMode: PropTypes.bool,
  numStyles: PropTypes.number,
};

export default Card;
