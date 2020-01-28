import React from 'react';
import { shallow } from 'enzyme';
import FontSize from '../FontSize';

describe('FontSize component', () => {
  it('renders without crashing', () => {
    shallow(<FontSize />);
  });
});

describe('Font size options menu', () => {
  it('should open and close when display button is clicked', () => {
    const wrapper = shallow(<FontSize />);
    // Simulate clicking button to either open or close the menu
    function clickButton(expected) {
      wrapper.find('#fontSize').simulate('click');
      wrapper.update();
      expect(wrapper.find('#sizeMenu').props().style.visibility).toEqual(expected);
    }
    expect(wrapper.find('#sizeMenu').props().style.visibility).toEqual('hidden');
    clickButton('visible');
    clickButton('hidden');
  });
  it('should close when a font size is clicked', () => {
    const wrapper = shallow(<FontSize />);
    // Open menu
    wrapper.find('#fontSize').simulate('click');
    wrapper.update();
    // Menu should close when font size option is clicked
    wrapper.find('#sizeMenu').find('button').at(0).simulate('click');
    wrapper.update();
    expect(wrapper.find('#sizeMenu').props().style.visibility).toEqual('hidden');
  });
});
