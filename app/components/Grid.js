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

const SQUARE_HEIGHT_WIDTH = 0.1;

const BOUNDARIES = {
  topLatitude: 51.580456223295826,
  bottomLatitude: 51.4445655655249,
  leftLongitude: -0.33370971429690144,
  rightLongitude: 0.18402099859372356,
};

let fakeCoordA = {
  latitude: 52,
  longitude: 0,
};

let fakeCoordB = {
  latitude: 51,
  longitude: 0,
};

let fakeCoordC = {
  latitude: 51,
  longitude: 1,
};

let fakeCoordD = {
  latitude: 52,
  longitude: 1,
};

let fakeSquare1 = [fakeCoordA, fakeCoordB, fakeCoordC, fakeCoordD];

let fakeCoordE = {
  latitude: 52,
  longitude: 2,
};

let fakeCoordF = {
  latitude: 51,
  longitude: 2,
};

let fakeSquare2 = [fakeCoordC, fakeCoordD, fakeCoordE, fakeCoordF];
let squareAry = [fakeSquare1, fakeSquare2]

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
        topLeft: { latitude: origin.latitude + SQUARE_HEIGHT_WIDTH, longitude: origin.longitude },
        topRight: { latitude: origin.latitude + SQUARE_HEIGHT_WIDTH, longitude: origin.longitude + SQUARE_HEIGHT_WIDTH },
        bottomRight: { latitude: origin.latitude, longitude: origin.longitude + SQUARE_HEIGHT_WIDTH },
      };
    };

    // Start at bottom left origin and draw right-left, bottom to top
    for (var i = 0; i < 6; i++) {
      for (var j = 0; j < 6; j++) {
        var origin = { latitude: BOUNDARIES.bottomLatitude + i * SQUARE_HEIGHT_WIDTH, longitude: BOUNDARIES.leftLongitude + j * SQUARE_HEIGHT_WIDTH }
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
    console.log(this.state.gridJsx);
    return <View>{this.state.gridJsx}</View>
  }
}
