import React from 'react';
import { shallow } from 'enzyme';

import Simple from '../src/Simple';

test('test simple', () => {
  const wrapper = shallow(<Simple />);
  expect(wrapper.text()).toEqual('simple');
});
