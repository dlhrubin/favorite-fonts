import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import Nav from './Nav';

it('should render component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav />, div);
});
