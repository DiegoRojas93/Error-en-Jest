
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import { HookApp } from '../HookApp';

describe('Test <HookApp />', () => {

  test('should work well', () => {
    const wrapper = shallow(<HookApp />)
    expect(wrapper).toMatchSnapshot()
  });
});