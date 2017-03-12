import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import LocationHeader from '../../public/js/components/location-header';

describe('<LocationHeader />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <LocationHeader />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
