import React from 'react';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('Component NavBar', () => {
  it('should render without crashing', () => {
    const component = shallow(<NavBar />);
    expect(component).toBeTruthy();
  });
});
