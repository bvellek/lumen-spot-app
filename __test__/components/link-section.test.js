import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import LinkSection from '../../public/js/components/link-section';

describe('<LinkSection />', () => {
  it('it renders correctly', () => {
    const component = shallow(
      <LinkSection />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });
});
