import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Card from './components/Card';

// Make mock API call
jest.mock('axios', () => {
  const response = require('./components/__fixtures__/response');
  return { get: jest.fn(() => Promise.resolve(response.default)) };
});

describe('App component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});

describe('Search bar', () => {
  it('should clear when close button is clicked', () => {
    const wrapper = mount(<App />);
    wrapper.find('#search').simulate('change', { target: { value: 'test' } });
    wrapper.update();
    expect(wrapper.find('#search').props().value).toEqual('test');
    wrapper.find('#reset-query').simulate('click');
    expect(wrapper.find('#search').props().value).toEqual('');
  });
  it('should hide delete button when empty', () => {
    const wrapper = mount(<App />);
    // Delete button should be hidden at start because search bar is empty
    expect(wrapper.find('#reset-query').props().style.visibility).toEqual('hidden');
    wrapper.find('#search').simulate('change', { target: { value: 'test' } });
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

describe('Font card', () => {
  describe('text boxes', () => {
    const wrapper = mount(<App />);
    // Simulate typing in "Type something" box
    function typeSomething(text) {
      wrapper.find('#exampleBox').simulate('change', { target: { value: text } });
      wrapper.update();
    }
    function editCard(text) {
      wrapper.find(Card).at(0).find('textarea').simulate('change', { target: { value: text } });
      wrapper.update();
    }
    // Check if text on card matches user input in "Type something" box
    function checkCard(ind, comparator = wrapper.find('#exampleBox').props().value) {
      expect(wrapper.find(Card).at(ind).find('textarea').props().value).toEqual(comparator);
    }
    it('should display text that user types into "Type something" box', () => {
      typeSomething('change the text');
      checkCard(0);
    });
    it('should not display whitespace around or between words typed into "Type something" box', () => {
      // Card text should trim whitespace around user input in "Type something" box
      typeSomething('   whitespace around  ');
      checkCard(0, 'whitespace around');
      // Card text should remove extra whitespace between words in "Type something" box
      typeSomething('whitespace      between');
      checkCard(0, 'whitespace between');
    });
    it('should allow user to edit the text within each card individually', () => {
      typeSomething('something typed');
      // Card text should change when user types in the card's text box
      editCard('edited');
      checkCard(0, 'edited');
      // The text on the other cards should remain unchanged
      checkCard(1);
    });
    it('should allow changes in "Type something" box to override edited text on all cards', () => {
      // Text on cards should stay the same if the text in "Type something" box doesn't change on user input
      typeSomething('something typed');
      checkCard(0, 'edited');
      checkCard(1, 'something typed');
      // Text on cards should change if the text in "Type something" box changes
      typeSomething('something different');
      checkCard(0);
      checkCard(1);
    });
    it('should register a change when user adds spaces within but not around input in "Type something" box', () => {
      // Text on edited cards should not change when user adds spaces before or after "Type something" box input
      editCard('edited again');
      typeSomething(' something different ');
      checkCard(0, 'edited again');
      // Text on edited cards should change to trimmed "Type something" box input when user adds spaces within the input
      typeSomething('something  different');
      checkCard(0, 'something different');
    });
  });
});
