import React from 'react';
import renderer from 'react-test-renderer';

import Hero from '../../public/js/components/hero';

describe('<Hero />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <Hero />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
