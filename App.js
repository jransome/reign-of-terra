import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Map from './app/screens/Map'

import Login from './app/screens/Login'

const reign_of_terra = StackNavigator({
  Login: { screen: Login },
  Map: { screen: Map },
});

AppRegistry.registerComponent('reign_of_terra', () => reign_of_terra);
