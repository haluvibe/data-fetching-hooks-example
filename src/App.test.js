import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle query input onChange correctly', () => {
    const wrapper = shallow(<App />);
    const queryInput = wrapper.find('.query-input');
    queryInput.instance().value = 'test';
    queryInput.simulate('change');
    expect(wrapper.state().query).toEqual('test');
    expect(wrapper).toMatchSnapshot();
  });
});
