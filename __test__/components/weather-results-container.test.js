import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { WeatherResultsContainer } from '../../public/js/components/weather-results-container';

describe('<WeatherResultsContainer />', () => {
  it('it renders a paragraph saying cannot provide results when weatherResults is null', () => {
    const component = shallow(
      <WeatherResultsContainer />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
