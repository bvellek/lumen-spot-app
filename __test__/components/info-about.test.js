import React from 'react';
import renderer from 'react-test-renderer';

import InfoAbout from '../../public/js/components/info-about';

describe('<InfoAbout />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <InfoAbout />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
