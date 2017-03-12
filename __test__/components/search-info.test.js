import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import SearchInfo from '../../public/js/components/search-info';

describe('<SearchInfo />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <SearchInfo />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
