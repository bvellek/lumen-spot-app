import React from 'react';
import renderer from 'react-test-renderer';

import LandingFooter from '../../public/js/components/landing-footer';

describe('<LandingFooter />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <LandingFooter />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
