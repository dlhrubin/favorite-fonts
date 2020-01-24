import React from 'react';
import { mount, shallow } from 'enzyme';
import Main from '../Main';
import Card from '../Card';
import axios from 'axios';
import response from '../__fixtures__/response';

jest.mock('axios');
axios.get.mockResolvedValue(response);

describe('Main component', () => {
  it('renders without crashing', () => {
    shallow(<Main />);
  });
  it('should generate the same number of cards as fonts returned by the API', () => {
    const wrapper = mount(<Main />);
    wrapper.update();
    console.log(wrapper.instance());
    //wrapper.instance().componentDidMount().then(() => {
    //  expect(axios.get).toHaveBeenCalled();
    //  wrapper.update();
    //  console.log(wrapper.state());
    //});

    //console.log(wrapper.find(Card).length);
  })
});
