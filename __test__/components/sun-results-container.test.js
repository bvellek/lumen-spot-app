import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { SunResultsContainer } from '../../public/js/components/sun-results-container';

describe('<SunResultsContainer />', () => {
  it('it renders a paragraph saying cannot provide results when sunResults is null', () => {
    const component = shallow(
      <SunResultsContainer />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
