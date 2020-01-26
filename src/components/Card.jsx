import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_TEXT = 'Then came the night of the first falling star.';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: DEFAULT_TEXT,
    };

  }


  // If user has typed in the "Type something box", display this text on the card
  componentDidUpdate(prevProps) {
    if (this.props.text !== prevProps.text) {
      const { text } = this.props;
      const innerTrimmed = text.split(/\s+/).join(' ');
      this.setState({
        displayed: innerTrimmed || DEFAULT_TEXT,
      });
    }

  }

  render() {
    const {
      name, size, styles,
    } = this.props;
    const { displayed} = this.state;
    const textStyle = {
      fontSize: size + "px"
    }
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
        <div className='text-container' contentEditable='true' suppressContentEditableWarning={true} style={textStyle} ref={this.textArea}>{displayed}</div>
      </div>
    );
  }
}

Card.defaultProps = {
  name: '',
  text: '',
  size: '40',
  styles: [],
};

Card.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  styles: PropTypes.array,
};

export default Card;
