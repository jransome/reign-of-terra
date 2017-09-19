
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Map from './app/screens/Map'

import HomePage from './app/screens/HomePage'

import User from './app/screens/User'


const reign_of_terra = StackNavigator({
  HomePage: { screen: HomePage },
  User: { screen: User },
  Map: { screen: Map },
});

AppRegistry.registerComponent('reign_of_terra', () => reign_of_terra);
