import React,{Component} from 'react';
import { StyleSheet, Text, View,FlatList,TextInput,Button } from 'react-native';
import customData from '../Data/MOCK_DATA.json';


export default class Landing extends React.Component {

  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const{  navigate } = this.props.navigation;
    return (
      <View style={styles}>
        <TextInput
          placeholder="Search"
          onChangeText={(text) => this.setState({input: text})}/>

        <Button
          title = "Submit"
          onPress={() =>
            navigate('ContactList', {name: this.state.input})
          }
          />
      </View>

      //{console.log((customData[2]['Company']))}



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
