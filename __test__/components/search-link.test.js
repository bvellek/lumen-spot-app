import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import SearchLink from '../../public/js/components/link-section';

describe('<SearchLink />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <SearchLink linkTitle='test title' accessibilitySpan='test context accessibility info' />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
