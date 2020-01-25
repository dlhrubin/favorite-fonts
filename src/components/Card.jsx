import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: 'Then came the night of the first falling star.',
      boxHeight: "",
      lineHeight: "",
      entered: false,
      backspaced: false
    };
    this.sizeSetter = React.createRef();
    this.textArea = React.createRef();
  }
  
  // Fetch height of shadow textarea element and set as textarea's height
  componentDidMount() {
    const sizeSetter = this.sizeSetter.current;
    this.setState({
      boxHeight: sizeSetter.clientHeight,
      lineHeight: sizeSetter.clientHeight
    });
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

  // If user has typed into the card's text box, display this text and auto-resize text box
  handleChange = (e) => {
    const sizeSetter = this.sizeSetter.current;
    const textBox = this.textArea.current;
    const {boxHeight, lineHeight, entered, backspaced} = this.state;
    this.setState({
      displayed: e.target.value,
      boxHeight: !e.target.value ? lineHeight :
                 entered ? boxHeight + lineHeight : 
                 backspaced ? Math.min(sizeSetter.clientHeight, textBox.scrollHeight) :
                 Math.max(sizeSetter.clientHeight, textBox.scrollHeight),
      entered: false,
      backspaced: false
    });
  }

  // Add new line to text box on enter and delete line(s) on backspace
  handleKeyDown = (e) => {
    if (e.key === "Enter") {
      this.setState({
        entered: true
      });
    } else if (e.key === "Backspace") {
      this.setState({
        backspaced: true
      })
    }
  }

  render() {
    const {
      name, styles,
    } = this.props;
    const { displayed, boxHeight, lineHeight} = this.state;
    const textStyle = {
      height: "" ? 'auto' : boxHeight + "px"
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
        <div className="text-container">
          <textarea value={displayed} style={textStyle} ref={this.textArea} onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
          <span className="size-setter" style={{minHeight: lineHeight + "px"}} ref={this.sizeSetter}>{displayed}</span>
        </div>
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
