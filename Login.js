import React,{Component} from 'react';
import { StyleSheet, Text, View , Image, TextInput, Button} from 'react-native';

export default class Login extends React.Component {

  /*static navigationOptions = {
    title: 'Welcome',
  };*/

  render() {
    const{  navigate } = this.props.navigation;
    return (
      <View>
        <Image source={require('../Images/NetAppLogo.png')}
        style={{width: 100, height:100}} />
        <TextInput style={{height: 100}}
          placeholder="UserName"/>
        <TextInput
          placeholder="Password" secureTextEntry={true}/>
        <Button
          title = "Submit"
          onPress={() =>
            navigate('Landing', {name: 'Allen'})
          }
          />

      </View>
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
