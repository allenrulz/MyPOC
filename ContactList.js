import React,{Component} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import customData from '../Data/MOCK_DATA.json';


export default class Landing extends React.Component {

  constructor(props){
    super(props);
    //console.log("testing");
    //console.log({this.state.names});
    this.state = {names: ( typeof this.props.navigation.state === 'undefined' ? this.props.names : this.props.navigation.state.params.name)}
  }

  static navigationOptions = {
    title: 'List',
  };

  contactNames() {
    //firstnames = customData.map(a => ['first_name': a.first_name]);
    //console.log(this.state.names);

    newList = customData.filter(obj => obj.first_name.includes(this.state.names));

    console.log(newList);


    return(
      <FlatList
        data={newList}
        //data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.first_name}</Text>}
/>
    );

}



  render() {
    const names  = this.props.names;
    console.log(names);
    const{ navigate } = this.props.navigation;
    return (
      <View>
        {this.contactNames()}
        </View>


      //{console.log((customData[2]['Company']))}



    );
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
