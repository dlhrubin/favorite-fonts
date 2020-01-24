import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import axios from 'axios';
import response from './components/__fixtures__/response';

jest.mock('axios');
axios.get.mockResolvedValue(response);

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('Search bar', () => {
  it('should clear when close button is clicked', () => {
    const wrapper = mount(<App />);
    wrapper.find('#search').simulate('change', { target: { value: 'a' } });
    wrapper.update();
    expect(wrapper.find('#search').props().value).toEqual('a');
    wrapper.find('#reset-query').simulate('click');
    expect(wrapper.find('#search').props().value).toEqual('');
  });
  it('should hide delete button when empty', () => {
    const wrapper = mount(<App />);
    // Delete button should be hidden at start because search bar is empty
    expect(wrapper.find('#reset-query').props().style.visibility).toEqual('hidden');
    wrapper.find('#search').simulate('change', { target: { value: 'a' } });
    wrapper.update();
    // Delete button should be visible when search bar has content
    expect(wrapper.find('#reset-query').props().style.visibility).toEqual('visible');
    wrapper.find('#search').simulate('change', { target: { value: '  ' } });
    wrapper.update();
    // Delete button should be hidden when search bar has only whitespace
    expect(wrapper.find('#reset-query').props().style.visibility).toEqual('hidden');
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
  it('should change displayed font size when dropdown menu option is clicked', () => {
    const wrapper = mount(<App />);
    // Initial value of display should be 8
    expect(wrapper.find('#currentSize').text()).toEqual('8px');
    // Open font size selection menu
    wrapper.find('#fontSize').simulate('click');
    wrapper.update();
    // On clicking second font size option, display should equal the value of that option
    const newSize = wrapper.find('#sizeMenu').find('span').at(1);
    newSize.simulate('click');
    wrapper.update();
    expect(wrapper.find('#currentSize').text()).toEqual(`${newSize.text()}px`);
  });
});
