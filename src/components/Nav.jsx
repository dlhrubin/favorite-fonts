import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search';
import Example from './Example';
import FontSize from './FontSize';

// Implement major header
function Nav(props) {
  const {
    query, example, fontSize, navFull, changeSearch, deleteQuery, changeExample, changeFontSize, reset, majorNavRef,
  } = props;
  const navStyle = navFull ? {
    width: '100%', marginLeft: '0', marginRight: '0', padding: '0 60px', position: 'fixed', top: '0', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray', boxShadow: '1px 1px 8px lightgray',
  } : {};
  return (
    <nav ref={majorNavRef} style={navStyle}>
      <ul style={{ border: navFull ? 'none' : '' }}>
        <Search query={query} handleDelete={deleteQuery} handleChange={changeSearch} />
        <Example example={example} handleChange={changeExample} />
        <FontSize fontSize={fontSize} handleChange={changeFontSize} />
        <li className="colorMode">
          <button className="icon-btn" type="button">
            <i className="fas fa-fill-drip" />
          </button>
        </li>
        <li className="view">
          <button className="icon-btn" type="button">
            <i className="fas fa-list-alt" />
          </button>
        </li>
        <li className="reset" onClick={reset}>
          <button className="icon-btn" type="button">
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
  navFull: false,
  changeSearch: () => {},
  deleteQuery: () => {},
  changeExample: () => {},
  changeFontSize: () => {},
  reset: () => {},
  majorNavRef: {},
};

// Define propTypes
Nav.propTypes = {
  query: PropTypes.string,
  example: PropTypes.string,
  fontSize: PropTypes.string,
  navFull: PropTypes.bool,
  changeSearch: PropTypes.func,
  deleteQuery: PropTypes.func,
  changeExample: PropTypes.func,
  changeFontSize: PropTypes.func,
  reset: PropTypes.func,
  majorNavRef: PropTypes.object,
};

export default Nav;
