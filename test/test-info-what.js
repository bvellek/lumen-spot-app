import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import InfoWhat from '../public/js/components/info-what';

describe('InfoWhat Component', function() {
  it('renders info section', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<InfoWhat />);
    const result = renderer.getRenderOutput();

    result.props.className.should.equal('info-section');
  });
});
