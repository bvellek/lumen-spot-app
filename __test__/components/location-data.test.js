import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import LocationData from '../../public/js/components/location-data';

describe('<LocationData />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <LocationData />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
