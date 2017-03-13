import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { LocationContainer } from '../../public/js/components/location-container';

describe('<LocationContainer />', () => {
  it('it renders the <NoSearch /> when displayResults and coordsLoadingStatus are false', () => {
    const component = shallow(
      <LocationContainer />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
