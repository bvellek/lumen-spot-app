import React from 'react';
import renderer from 'react-test-renderer';

import Image from '../../public/js/components/image';

describe('<Image />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <Image imageLink='https://testing.com' imageLinkTarget='_testing' src='https://testing.com/photo' alt='test description' aperture='2.8' iso='200' ss='1/200' photo='tester mctesting' />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
