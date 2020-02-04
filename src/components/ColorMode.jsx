import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../css/_global.scss';

// Implement light/dark mode controls
class ColorMode extends Component {
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
    const { darkMode, handleChange } = this.props;
    const { showMenu } = this.state;
    const menuStyle = { visibility: showMenu ? 'visible' : 'hidden' };
    const modes = [{name: "dark", color: styles.dark}, {name: "light", color: "rgb(255,255,255)"}];
    const options = modes.map((mode) => {
      const currentMode = darkMode ? 'dark' : 'light';
      return (<li key={mode.name}>
        <button
          type="button"
          onClick={(e) => { handleChange(e, mode.name); this.handleOptionClick(e); }}
          style={{backgroundColor: mode.color}}
        >
          <i className="fas fa-check-circle icon-circle" style={{visibility: currentMode === mode.name && showMenu ? "visible" : "hidden"}}/>
        </button>
      </li>)
    });
    return (
      <li className="color-mode">
        <button className={"icon-btn".concat(darkMode ? " dm-white" : "")} id="colorMode" type="button" onClick={this.handleMenuClick}>
          <i className="fas fa-fill-drip" />
        </button>
          <ul className="dropdown" style={menuStyle}>
            {options}
          </ul>
      </li>
    );
  }
}

// Set defaults
ColorMode.defaultProps = {
  darkMode: false,
  handleChange: () => {},
};

// Define propTypes
ColorMode.propTypes = {
  darkMode: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default ColorMode;
