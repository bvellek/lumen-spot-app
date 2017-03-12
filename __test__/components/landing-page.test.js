import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import LandingPage from '../../public/js/components/landing-page';

describe('<LandingPage />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <LandingPage />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
