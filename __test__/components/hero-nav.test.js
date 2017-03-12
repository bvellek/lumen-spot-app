import React from 'react';
import renderer from 'react-test-renderer';

import HeroNav from '../../public/js/components/hero-nav';

describe('<HeroNav />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <HeroNav />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
