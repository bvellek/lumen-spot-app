import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { ImageResultsContainer } from '../../public/js/components/image-results-container';

describe('<ImageResultsContainer />', () => {
  it('it renders correctly when const images is false', () => {
    const component = shallow(
      <ImageResultsContainer />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
