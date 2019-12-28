import React from 'react';
import { shallow } from 'enzyme';

import Home from '../components/Home';

const wrapper = shallow(<Home />);

describe('Home Test Suite', () => {
  it('Should render <Home />', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render the <h1> message', () => {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
