import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'


class About extends React.Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <View>
      <Text>Yulia: Hi</Text>
      </View>
    );
  }
}

export default About;
