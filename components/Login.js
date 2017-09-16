import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

class Login extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <Image style={styles.imagePosition} source={{uri: "https://i.stack.imgur.com/3kVAu.png"}} />
        <Text style={styles.name}>reign_of_terra</Text>
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
  name: {
    fontFamily: "SnellRoundhand-Bold",
    fontSize: 55,
    textAlign: 'center',
    color: 'white',
    top: 80,
  },
  imagePosition: {
    width: 180,
    height: 180,
  },
  button: {
    backgroundColor:'#a1b1cc',
    minHeight: 40,
    top: 250,

  },
});
export default Login;
