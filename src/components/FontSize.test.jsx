import React from 'react';
import { shallow } from 'enzyme';
import FontSize from './FontSize';

describe('FontSize component', () => {
  it('renders without crashing', () => {
    shallow(<FontSize />);
  });
});
