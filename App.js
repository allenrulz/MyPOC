import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Login from './Views/Login';
import Landing from './Views/Landing';
import ContactList from './Views/ContactList'

const AppNavigation = StackNavigator({
  Login: { screen: Login },
  Landing: { screen: Landing },
  ContactList : { screen: ContactList}
});



export default class App extends React.Component {

  render(){
    return(<AppNavigation/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
