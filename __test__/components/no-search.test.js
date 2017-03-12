import React from 'react';
import renderer from 'react-test-renderer';

import NoResults from '../../public/js/components/no-search';

describe('<NoResults />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <NoResults />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
