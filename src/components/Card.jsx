import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: 'Lorem ipsum dolor',
    };
  }

  // If user has typed in the "Type something box", display this text on the card
  componentDidUpdate(prevProps) {
    if (this.props.text !== prevProps.text) {
      const { text } = this.props;
      const innerTrimmed = text.split(/\s+/).join(' ');
      this.setState({
        displayed: innerTrimmed,
      });
    }
  }

  // If user has typed into the card's text box, display this text on the card
  handleChange = (e) => {
    this.setState({
      displayed: e.target.value,
    });
  }

  render() {
    const {
      name, styles,
    } = this.props;
    const { displayed } = this.state;
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
        <textarea value={displayed} onChange={this.handleChange} />
      </div>
    );
  }
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
