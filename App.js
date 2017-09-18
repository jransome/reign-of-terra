import * as firebase from 'firebase';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Map from './app/screens/Map'

import Login from './app/screens/Login'

const firebaseConfig = {
  apiKey: "AIzaSyDp8aMYHboDQ5mgbWUzyJ8plmrfV5jDKSk",
   authDomain: "reign-of-terra-a496c.firebaseapp.com",
   databaseURL: "https://reign-of-terra-a496c.firebaseio.com",
   storageBucket: "reign-of-terra-a496c.appspot.com"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const reign_of_terra = StackNavigator({
  Login: { screen: Login },
  Map: { screen: Map },
});

AppRegistry.registerComponent('reign_of_terra', () => reign_of_terra);
