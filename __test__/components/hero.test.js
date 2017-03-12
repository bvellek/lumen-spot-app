import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Hero from '../../public/js/components/hero';

describe('<Hero />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <Hero />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
