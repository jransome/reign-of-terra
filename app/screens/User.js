import * as constants from '../Constants'
import React, { Component } from 'react';
import { AppRegistry, Text, View, Dimensions, StyleSheet, Button, TextInput, Picker, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation'
import ColorPicker from '../components/ColorPicker.js'

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;

export default class User extends Component {
  static navigationOptions = {
    title: 'User',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'default@gmail.com',
      password: 'default',
      username: "",
      color: "red",
      pickerStyle: {
         fontSize: 30,
         alignSelf: 'center',
         color: "red"
      }
    }
    this.signup = this.signup.bind(this);
    this.signin = this.signin.bind(this);
  }

  signup(){
    var self = this;
    var dbRef = constants.firebaseApp.auth()
    dbRef.createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(function(user) {
      constants.firebaseApp.database().ref('users').push({
        email: user.email, color: self.state.color, username: self.state.username
      });
      self.props.navigation.navigate("Map")
    })
    .catch(function(error) {
      alert(error.code + error.message)
    });
  }

  signin(){
    var self = this;
    alert("signing in")
    // this.props.navigation.navigate("Map")
    constants.firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(function(user) {
      alert("Signed in as: " + user.email)
      self.props.navigation.navigate("Map")
    }).catch(function(error) {
      alert(error.code + error.message)
    });
  }

  updateColor = (color) => {
     this.setState({ color: color })
     var newStyle = {
        fontSize: 30,
        alignSelf: 'center',
        color: color
     }
     this.setState({ pickerStyle: newStyle })
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <TextInput
        style={styles.textinput}
        onChangeText={(text) => this.setState({email: text})}
        value={this.state.email}
        placeholder={"Email Address"}
      />
      <TextInput
        style={styles.textinput}
        onChangeText={(text) => this.setState({password: text})}
        value={this.state.password}
        secureTextEntry={true}
        placeholder={"Password"}
      />
      <TextInput
        style={styles.textinput}
        onChangeText={(text) => this.setState({username: text})}
        value={this.state.username}
        placeholder={"Username"}
      />
      <Text style={styles.heading}>Choose a color for your territory</Text>
      <Picker selectedValue = {this.state.color} onValueChange = {this.updateColor}>
        <Picker.Item color="red" label = "Red" value = "red" />
        <Picker.Item color="blue" label = "Blue" value = "blue" />
        <Picker.Item color="green" label = "Green" value = "green" />
        <Picker.Item color="yellow" label = "Yellow" value = "yellow" />
        <Picker.Item color="pink" label = "Pink" value = "pink" />
        <Picker.Item color="orange" label = "Orange" value = "orange" />
      </Picker>
      <Text style = {this.state.pickerStyle}>{this.state.color}</Text>

        <View style={styles.signupbutton}>
          <Button
          onPress={ this.signup }
          title="Sign Up"
          />
        </View>

        <View style={styles.signinbutton}>
          <TouchableOpacity onPress={this.signin}>
            <Text style={{fontSize: 30, color: "white"}}> Sign In </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  signinbutton: {
    flex:0.1,
    width: SCREEN_WIDTH,
    backgroundColor: 'blue',
    alignItems: "center",
    justifyContent: 'center'
  },
  heading: {
    flex: 0.2,
    color: "black",
    fontSize: 25,
    textAlign: "center",
    margin: 10
  },
  textinput: {
    margin:10,
   flex: 0.2,
   borderWidth: 1,
 },
  signupbutton: {
    flex: 0.2,
    color: "white",
    backgroundColor:'#a1b1cc',
    margin: 10
  },
});
