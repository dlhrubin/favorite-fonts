import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav component', () => {
  it('renders without crashing', () => {
    shallow(<Nav />);
  });
});
