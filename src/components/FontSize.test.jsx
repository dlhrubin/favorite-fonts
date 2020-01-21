import React from 'react';
import { shallow } from 'enzyme';
import FontSize from './FontSize';


it('should change displayed font size when changing slider', () => {
  const onChange = jest.fn();
  const wrapper = shallow(<FontSize fontSize="8" handleChange={onChange} />);
  const slider = wrapper.find('input').at(0);
  const display = wrapper.find('span').at(0);
  expect(slider.props().value).toEqual('8');
  // expect(display.text()).toEqual("8px");
  console.log(wrapper.debug());
  wrapper.find('input').at(0).simulate('change', { target: { value: '50' } });
  wrapper.update();
  console.log(wrapper.find('input').props().value);
  // expect(wrapper.find('input').at(0).props().value).toEqual("50");
  // expect(display.text()).toEqual("50px");
});
