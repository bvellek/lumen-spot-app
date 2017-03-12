import React from 'react';
import renderer from 'react-test-renderer';

import NotFoundPage from '../../public/js/components/not-found-page';

describe('<NotFoundPage />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <NotFoundPage />
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
