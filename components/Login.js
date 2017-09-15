import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>reign_of_terra</Text>
        <Button
          onPress={() => navigate('Map')}
          title="LOAD MAP"
        />
      </View>
    );
  }
}
