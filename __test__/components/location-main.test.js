import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import LocationMain from '../../public/js/components/location-main';

describe('<LocationMain />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <LocationMain />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
