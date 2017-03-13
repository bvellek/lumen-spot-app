import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { SearchFormContainer } from '../../public/js/components/search-form-container';

describe('<SearchFormContainer />', () => {
  it('it renders correctly', () => {
    const component = renderer.create(
      <SearchFormContainer />
    );
    expect(component).toMatchSnapshot();
  });
  it('input changes when typed', () => {
    const component = shallow(
      <SearchFormContainer />
    );

    expect(component.node.props.children[2].props.value).toEqual('');
    component.setState({ value: 'a' });
    expect(component.node.props.children[2].props.value).toEqual('a');
  });
});
