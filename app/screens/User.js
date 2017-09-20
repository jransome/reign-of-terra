import * as constants from '../Constants'
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, TextInput, Picker} from 'react-native';
import { StackNavigator } from 'react-navigation'
import ColorPicker from '../components/ColorPicker.js'

export default class User extends Component {
  static navigationOptions = {
    title: 'User',
  };

  constructor(props) {
    super(props);
    this.state = {
      email: 'default@gmail.com',
      password: 'default',
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
        email: user.email, color: self.state.color
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
      <View>
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
      <Text style={styles.heading}>PICK POLYGON COLOR</Text>
      <Picker selectedValue = {this.state.color} onValueChange = {this.updateColor}>
        <Picker.Item color="red" label = "Red" value = "red" />
        <Picker.Item color="blue" label = "Blue" value = "blue" />
        <Picker.Item color="green" label = "Green" value = "green" />
        <Picker.Item color="yellow" label = "Yellow" value = "yellow" />
        <Picker.Item color="pink" label = "Pink" value = "pink" />
        <Picker.Item color="orange" label = "Orange" value = "orange" />
      </Picker>
      <Text style = {this.state.pickerStyle}>{this.state.color}</Text>
        <View style={styles.button}>
          <Button
          onPress={ this.signup }
          title="Sign Up"
          />
          <Button
          onPress={ this.signin }
          title="Sign In"
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
  heading: {
    top: 20,
    color: "blue",
    fontSize: 25,
    textAlign: "center"
  },
  textinput: {
   height: 40,
   borderColor: 'red',
   borderWidth: 1
 },
  button: {
    backgroundColor:'#a1b1cc',
    minHeight: 40,
    top: 0,
  },
});
