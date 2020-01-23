import React from 'react';
import { shallow } from 'enzyme';
import Example from './Example';

describe('Example component', () => {
  it('renders without crashing', () => {
    shallow(<Example />);
  });
});
