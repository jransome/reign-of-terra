import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, Image } from 'react-native';

class HomePage extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
        <Text style={styles.name}>reign_of_terra</Text>
          <Image style={styles.imagePosition} source={{uri: "https://i.stack.imgur.com/3kVAu.png"}} />
        </View>

        <View style={styles.loginFields}>
        </View>

        <View style={styles.submitButtons}>
          <View style={styles.button}>
            <Button
            onPress={() => navigate('User')}
            title="Go to User Page"
            />
          </View>
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
  logo:{
    flex: 0.3,
    backgroundColor:'red',
  },
  loginFields:{
    flex: 0.2,
    backgroundColor:'green',
  },
  submitButtons:{
    flex: 0.5,
    backgroundColor:'yellow',
  },
  name: {
    fontFamily: "SnellRoundhand-Bold",
    fontSize: 55,
    textAlign: 'center',
    color: 'blue',
    top: 80,
  },
  imagePosition: {
    width: 180,
    height: 180,
  },
  button: {
    backgroundColor:'#a1b1cc',
    minHeight: 40,
    top: 200,

  },
});
export default HomePage;
