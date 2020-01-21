import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('Font size controls', () => {
  it('should change displayed font size when slider changes', () => {
    const wrapper = mount(<App />);
    // Initial value of slider and display should be 8
    expect(wrapper.find('#slider').props().value).toEqual('8');
    expect(wrapper.find('#currentSize').text()).toEqual('8px');
    wrapper.find('#slider').simulate('change', { target: { value: '50' } });
    wrapper.update();
    // On changing slider to 50, value of slider and display should be 50
    expect(wrapper.find('#slider').props().value).toEqual('50');
    expect(wrapper.find('#currentSize').text()).toEqual('50px');
  });
});
