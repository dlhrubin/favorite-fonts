import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/_global.scss';

// Implement font size controls
class FontSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  // Show font sizes menu when font size display is clicked
  handleMenuClick = () => {
    const { showMenu } = this.state;
    this.setState({
      showMenu: !showMenu,
    });
  }

  handleOptionClick = () => {
    this.setState({
      showMenu: false,
    });
  }

  render() {
    const { fontSize, handleChange } = this.props;
    const { showMenu } = this.state;
    const menuStyle = { visibility: showMenu ? 'visible' : 'hidden' };
    const caratStyle = { transform: showMenu ? 'rotate(180deg)' : '' };
    const menuButtonStyle = (cond) => ({
      backgroundColor: cond ? styles.paleAccent : '',
      color: cond ? styles.brightAccent : '',
    });
    const defaultSizes = ['8', '12', '14', '20', '24', '32', '40', '64', '96', '120', '184', '280'];
    const options = defaultSizes.map((size) => (
      <li key={size}>
        <button
          type="button"
          onClick={(e) => { handleChange(e, size); this.handleOptionClick(e); }}
          style={menuButtonStyle(size === fontSize)}
        >
          <span style={{ fontWeight: '600' }}>{size}</span>
        </button>
      </li>
    ));
    return (
      <li className="font-size">
        <div>
          <button id="fontSize" type="button" style={menuButtonStyle(showMenu)} onClick={this.handleMenuClick}>
            <span id="currentSize" style={{ fontWeight: 600 }}>{`${fontSize}px`}</span>
            <i className="fas fa-caret-down" style={caratStyle} />
          </button>
          <div id="sizeMenu" className="options-container" style={menuStyle}>
            <ul className="size-options">
              {options}
            </ul>
          </div>
        </div>
        <input id="slider" type="range" min="8" max="300" value={fontSize} onChange={(e) => handleChange(e, '')} />
      </li>
    );
  }
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
