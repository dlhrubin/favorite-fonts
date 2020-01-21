import React from 'react';

// Implement font size controls
function FontSize(props) {
  const { fontSize, handleChange } = props;
  return (
    <li className="fontSize">
      <button type="button">
        <span style={{ fontWeight: 600 }}>{`${fontSize}px`}</span>
        <i className="fas fa-caret-down" />
      </button>
      <input type="range" min="8" max="300" value={fontSize} onChange={handleChange} />
    </li>
  );
}

export default FontSize;
