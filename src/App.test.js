import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('First react component test with enzyme', () => {
  it('renders without crashing', () => {
    shallow(<App/>);
  })
});
