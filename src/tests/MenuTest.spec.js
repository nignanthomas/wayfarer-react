import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Menu from '../components/global/Menu';

const wrapper = shallow(<Menu />);

describe('Menu Test Suite', () => {
  it('Should render <Menu />', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render the Link twice', () => {
    expect(wrapper.find(Link)).toHaveLength(3);
  });
});
