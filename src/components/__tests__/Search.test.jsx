import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';

describe('Search component', () => {
  it('renders without crashing', () => {
    shallow(<Search />);
  });
});
