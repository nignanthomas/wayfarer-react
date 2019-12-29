import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../components/global/Footer';

const wrapper = shallow(<Footer />);

describe('Footer Test Suite', () => {
  it('Should render <Footer />', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Should render the <footer> tag', () => {
    expect(wrapper.find('footer')).toHaveLength(1);
  });
});
