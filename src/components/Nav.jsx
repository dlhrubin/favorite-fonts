import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Example from './Example';
import FontSize from './FontSize';
import ColorMode from './ColorMode';
import styles from '../css/_global.scss';

// Implement major header
function Nav(props) {
  const {
    query, example, fontSize, darkMode, grid, navFull, changeSearch, deleteQuery,
    changeExample, changeFontSize, changeMode, toggleLayout, reset, majorNavRef,
  } = props;
  const textColor = darkMode ? "white" : "";
  const navStyle = navFull ? {
    color: textColor, backgroundColor: darkMode ? styles.dark : "white", width: '100%', marginLeft: '0', marginRight: '0', padding: '0 60px', position: 'fixed', top: '0', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', boxShadow: darkMode ? '' : '1px 1px 8px lightgray',
  } : {color: textColor};
  return (
    <nav ref={majorNavRef} style={navStyle}>
      <ul style={{ border: navFull ? 'none' : '' }}>
        <Search query={query} darkMode={darkMode} handleDelete={deleteQuery} handleChange={changeSearch} />
        <Example example={example} darkMode={darkMode} handleChange={changeExample} />
        <FontSize fontSize={fontSize} darkMode={darkMode} handleChange={changeFontSize} />
        <ColorMode darkMode={darkMode} handleChange={changeMode} />
        <li className="view" onClick={toggleLayout}>
          <button className={"icon-btn".concat(darkMode ? " dm-white" : "")} type="button">
            <i className={"fas ".concat(grid ? "fa-list-alt" : "fa-th")} />
          </button>
        </li>
        <li className="reset" onClick={reset}>
          <button className={"icon-btn".concat(darkMode ? " dm-white" : "")} type="button">
            <i className="fas fa-redo-alt" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

// Set defaults
Nav.defaultProps = {
  query: '',
  example: '',
  fontSize: '40',
  darkMode: false,
  navFull: false,
  changeSearch: () => {},
  deleteQuery: () => {},
  changeExample: () => {},
  changeFontSize: () => {},
  changeMode: () => {},
  reset: () => {},
};

// Define propTypes
Nav.propTypes = {
  query: PropTypes.string,
  example: PropTypes.string,
  fontSize: PropTypes.string,
  darkMode: PropTypes.bool,
  navFull: PropTypes.bool,
  changeSearch: PropTypes.func,
  deleteQuery: PropTypes.func,
  changeExample: PropTypes.func,
  changeFontSize: PropTypes.func,
  changeMode: PropTypes.func,
  reset: PropTypes.func,
};

export default Nav;
