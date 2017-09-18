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
      currentSquare: null,
    }
    this.createGrid();
  }

  createGrid() {
    let mySquare = {
      topLeft: 0,
      bottomLeft: 0,
      bottomRight: 0,
      topRight: 0,
    }

    for (var i=0; i < 34; i++) {
      for (var j = 0; j < 34; j++) {
        mySquare.topLeft = { BOUNDARIES.topLatitude + i * Square.SQUARE_HEIGHT_WIDTH, BOUNDARIES.leftLongitude + j * SQUARE_HEIGHT_WIDTH };
        console.log(mySquare.topLeft);
      }
    }
  }

  updateGrid() {
    this.setState(previous => ({

    }))
  }

  render() {
    // var testAry = ['ben', 'james', 'ryan', 'yulia']
    var grid = squareAry.map(function(squareCoords){
      return <Square coordinates={squareCoords} fillColor={"blue"}/>;
    })
    console.log(grid);
    return <View>{grid}</View>
  }
}
