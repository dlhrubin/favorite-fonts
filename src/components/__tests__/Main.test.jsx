import React from 'react';
import { mount, shallow } from 'enzyme';
import axios from 'axios';
import Main from '../Main';
import Card from '../Card';
import response from '../__fixtures__/response';
import config from '../../config';

// Make mock API call
jest.mock('axios', () => {
  const response = require('../__fixtures__/response');
  return { get: jest.fn(() => Promise.resolve(response.default)) };
});

describe('Main component', () => {
  it('renders without crashing', () => {
    shallow(<Main />);
  });
  const wrapper = shallow(<Main query="" example="" fontSize="8" />);
  it('should successfully fetch fonts from the Google Fonts API', () => {
    wrapper.instance().componentDidMount().then(() => {
      expect(axios.get).toHaveBeenCalled();
      expect(axios.get).toHaveBeenCalledWith(`https://www.googleapis.com/webfonts/v1/webfonts?key=${config.KEY}&sort=popularity`);
      expect(wrapper.state()).toHaveProperty('fonts', response.data.items);
    });
  });
  it('should generate the same number of cards as fonts returned by the API', () => {
    expect(wrapper.find(Card).length).toEqual(wrapper.state().fonts.length);
  });
});
