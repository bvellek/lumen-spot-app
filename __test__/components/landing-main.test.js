import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import LandingMain from '../../public/js/components/landing-main';

describe('<LandingMain />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <LandingMain />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
