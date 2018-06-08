import React from 'react';
import {expect} from 'chai';
import {render} from 'enzyme';

import Resume from './Resume';

describe('Component test suite - Resume ', () => {
  it('is a div containing paragraphs', () => {
    const wrapper = render(<Resume />);
    expect(wrapper.is('div')).to.equal(true);
  });
});
