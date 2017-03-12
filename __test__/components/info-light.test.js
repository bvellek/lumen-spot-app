import React from 'react';
import renderer from 'react-test-renderer';

import InfoLight from '../../public/js/components/info-light';

describe('<InfoLight />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <InfoLight />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
