import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

import InfoWhat from '../public/js/components/info-what';

const should = chai.should();


describe('InfoWhat Component', () => {
  it('renders info section', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<InfoWhat />);
    const result = renderer.getRenderOutput();

    result.props.className.should.equal('info-section');
  });
});
