/* jshint esversion: 6 */
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Square from './Square.js';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  Switch,
  TouchableOpacity
} from 'react-native';

import * as constants from '../Constants'

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      gridJsx: [],
      currentSquare: null,
    }
    this.createGrid();
  }

  createGrid() {

    function generateSquareCoordsFromOrigin(origin){
      return newSquare = {
        bottomLeft: origin,
        topLeft: { latitude: origin.latitude + constants.SQUARE_HEIGHT_WIDTH, longitude: origin.longitude },
        topRight: { latitude: origin.latitude + constants.SQUARE_HEIGHT_WIDTH, longitude: origin.longitude + constants.SQUARE_HEIGHT_WIDTH },
        bottomRight: { latitude: origin.latitude, longitude: origin.longitude + constants.SQUARE_HEIGHT_WIDTH },
      };
    };

    // Start at bottom left origin and draw left-right, bottom to top
    for (var i = 0; i < constants.GRID_HEIGHT; i++) {
      for (var j = 0; j < constants.GRID_WIDTH; j++) {
        var origin = { latitude: constants.MAP_ORIGIN.bottomLatitude + i * constants.SQUARE_HEIGHT_WIDTH, longitude: constants.MAP_ORIGIN.leftLongitude + j * constants.SQUARE_HEIGHT_WIDTH }
        var newSquare = generateSquareCoordsFromOrigin(origin)
        this.state.grid.push(newSquare);
      }
    }

    function generateGridJsx(grid){
      var jsxArray = []
      grid.map(function(squareCoords){
        jsxArray.push(<Square coordinates={squareCoords} fillColor={"blue"}/>);
      })
      return jsxArray;
    }

    this.state.gridJsx = generateGridJsx(this.state.grid);

  }

  updateGrid() {
    this.setState(previous => ({

    }))
  }

  render() {
    console.log(this.state.gridJsx)
    return <View>{this.state.gridJsx}</View>
  }
}
