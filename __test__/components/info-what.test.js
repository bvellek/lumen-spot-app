import React from 'react';
import renderer from 'react-test-renderer';

import InfoWhat from '../../public/js/components/info-what';

describe('<InfoWhat />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <InfoWhat />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
