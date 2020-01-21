import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

it('Nav component renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav />, div);
});
