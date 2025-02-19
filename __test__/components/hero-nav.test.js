import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import HeroNav from '../../public/js/components/hero-nav';

describe('<HeroNav />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <HeroNav />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
