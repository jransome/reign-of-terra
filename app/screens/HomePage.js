import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

class HomePage extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Text style={styles.name}>reign_of_terra</Text>
        <Image style={styles.imagePosition} source={{uri: "https://i.stack.imgur.com/3kVAu.png"}} />

        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => navigate('User')}>
            <Text style={styles.buttonText}> Go to User Page </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#2f63b7',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 40,
    color: "white",
    fontFamily: "SnellRoundhand-Bold",
    textAlign: 'center',
  },
  buttonView:{
    flex: 0.1,
    backgroundColor:'#a1b1cc',
    minHeight: 40,
  },
  name: {
    fontFamily: "SnellRoundhand-Bold",
    fontSize: 55,
    textAlign: 'center',
    color: 'blue',
    top: 80,
    flex: 0.3
  },
  imagePosition: {
    flex: 0.3,
  },
});
export default HomePage;
