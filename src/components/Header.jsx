import React from 'react';

// Implement minor header
function Header() {
  return (
    <div className="minor-nav">
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
