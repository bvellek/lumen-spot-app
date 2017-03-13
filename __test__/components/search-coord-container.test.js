import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { SearchCoordContainer } from '../../public/js/components/search-coord-container';

describe('<SearchCoordContainer />', () => {
  it('it renders the empty div when displayResults, coordsLoadingStatus, and warningState are false', () => {
    const component = shallow(
      <SearchCoordContainer />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
