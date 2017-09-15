import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import Map from './components/Map'
// import About from './components/About'


class HomePage extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello!</Text>
        <Button
          onPress={() => navigate('Map')}
          title="See Map"
        />
      </View>
    );
  }
}



const reign_of_terra = StackNavigator({
  Home: { screen: HomePage },
  Map: { screen: Map },
});


AppRegistry.registerComponent('reign_of_terra', () => reign_of_terra);
