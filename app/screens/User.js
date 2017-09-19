import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button} from 'react-native';
import { StackNavigator } from 'react-navigation'
import ColorPicker from '../components/ColorPicker.js'

export default class User extends Component {
  static navigationOptions = {
    title: 'User',
  };
  render() {
      const { navigate } = this.props.navigation;
    return (
      <View>
      <Text>PICK POLYGON COLOR</Text>
        <ColorPicker />
        <View style={styles.button}>
          <Button
          onPress={() => navigate('Map')}
          title="LOAD MAP"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2f63b7',
  },

  button: {
    backgroundColor:'#a1b1cc',
    minHeight: 40,
    top: 200,
  },
});
