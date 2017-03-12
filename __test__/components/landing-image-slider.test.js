import React from 'react';
import renderer from 'react-test-renderer';

import LandingImageSlider from '../../public/js/components/landing-image-slider';

describe('<LandingImageSlider />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <LandingImageSlider />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
