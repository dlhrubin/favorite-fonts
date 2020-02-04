import React from 'react';

// Implement minor header
function Header(props) {
  const { darkMode } = props;
  return (
    <div className={"minor-nav".concat(darkMode ? " dm-white" : "")}>
      <div>
        <span style={{ fontWeight: 500, fontSize: '1.45em' }}>Google</span>
        <span>Fonts</span>
      </div>
      <ul>
        <li>
          <button type="button" href="#">CATALOG</button>
        </li>
        <li>
          <button type="button" href="#">FEATURED</button>
        </li>
        <li>
          <button type="button" href="#">ARTICLES</button>
        </li>
        <li>
          <button type="button" href="#">ABOUT</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
