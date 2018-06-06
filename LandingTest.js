import React from 'react';
import Landing from '../Landing';

import renderer from 'react-test-renderer'

const navigation = { navigate: jest.fn() };

test('renders correctly', () => {
  const tree = renderer.create(<Landing navigation={navigation}/>).toJSON();
  expect (tree).toMatchSnapshot();

});
