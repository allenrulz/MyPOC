import React from 'react';
import Login from '../Login';

import renderer from 'react-test-renderer'

const navigation = { navigate: jest.fn() };
test('renders correctly', () => {
  const tree = renderer.create(<Login navigation={navigation}/>).toJSON();
  expect (tree).toMatchSnapshot();

});
