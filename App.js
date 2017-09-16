import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation'

import Map from './components/Map'
import PolygonCreator from './components/PolygonCreator'

import Login from './components/Login'

const reign_of_terra = StackNavigator({
  Login: { screen: Login },
  Map: { screen: Map },
});

AppRegistry.registerComponent('reign_of_terra', () => reign_of_terra);
