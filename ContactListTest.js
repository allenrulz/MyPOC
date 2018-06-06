import React from 'react';
import ContactList from '../ContactList';

import renderer from 'react-test-renderer'

const navigation = { navigate: jest.fn() };
const names = jest.fn().mockReturnValue('All');

//this.setState({params.name : 'all'});

test('renders correctly with All', () => {
  const tree = renderer.create(<ContactList navigation={navigation} names='Dia'/>).toJSON();
  expect (tree).toMatchSnapshot();

});

test('renders correctly with Dia', () => {
  const tree = renderer.create(<ContactList navigation={navigation} names='All'/>).toJSON();
  expect (tree).toMatchSnapshot();

});
