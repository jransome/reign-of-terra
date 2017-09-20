import * as constants from '../Constants'
import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Button, TextInput} from 'react-native';
import { StackNavigator } from 'react-navigation'
import ColorPicker from '../components/ColorPicker.js'


export default class User extends Component {
  static navigationOptions = {
    title: 'User',
  };

  constructor(props) {
    super(props);

    this.state = {
      loaded: true,
      email: 'default',
      password: 'default'
    }

  }

  signup(){

    // this.setState({
    //   loaded: false
    // });
    alert("signup")

    constants.firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode)
      alert(errorMessage)
      // ...
    });

    // constants.firebaseApp.createUser({
    //   'email': this.state.email,
    //   'password': this.state.password
    // }, (error, userData) => {
    //
    //   if(error){
    //     switch(error.code){
    //
    //       case "EMAIL_TAKEN":
    //         alert("The new user account cannot be created because the email is already in use.");
    //       break;
    //
    //       case "INVALID_EMAIL":
    //         alert("The specified email is not a valid email.");
    //       break;
    //
    //       default:
    //         alert("Error creating user:");
    //     }
    //
    //   }else{
    //     alert('Your account was created!');
    //   }
      //
      // this.setState({
      //   email: '',
      //   password: '',
      //   loaded: true
      // });
    //
    // });

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
        <ColorPicker />
        <View style={styles.button}>
          <Button
          onPress={this.signup.bind(this)}
          title="Sign Up"
          />
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
    top: 150,
  },
});
