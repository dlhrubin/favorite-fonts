import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

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
});
