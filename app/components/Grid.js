/* jshint esversion: 6 */
import * as constants from '../Constants'
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



export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      gridJsx: [],
      currentSquare: null,
    }
    this.dbGridRef = constants.firebaseApp.database().ref().child('grid_test');
    // this.setupDatabaseListener();
    this.initialiseGrid();
  }

  // setupDatabaseListener(){
  //   var self = this;
  //   console.log("listener")
  //   var refreshGrid = function(data) {
  //     var val = data.val();
  //     self.state.grid = val;
  //     console.log(val === testData)
  //     console.log(val)
  //     console.log(testData)
  //     self.state.gridJsx = self.generateGridJsx(val);
  //   };
  //   this.dbGridRef.on('value', refreshGrid);
  // }

  initialiseGrid() {
    function generateSquareCoordsFromOrigin(origin){
      return newSquare = {
        coordinates: {
          bottomLeft: origin,
          topLeft: { latitude: origin.latitude + constants.SQUARE_HEIGHT_WIDTH, longitude: origin.longitude },
          topRight: { latitude: origin.latitude + constants.SQUARE_HEIGHT_WIDTH, longitude: origin.longitude + constants.SQUARE_HEIGHT_WIDTH },
          bottomRight: { latitude: origin.latitude, longitude: origin.longitude + constants.SQUARE_HEIGHT_WIDTH },
        },
        ownerID: 0,
        colour: 'rgba(200, 200, 200, 0.2)',
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
    this.state.gridJsx = this.generateGridJsx(this.state.grid);
  };

  generateGridJsx(grid){
    var jsxArray = []
    grid.map(function(square){
      jsxArray.push(<Square coordinates={square.coordinates} fillColor={square.colour} ownerID={square.ownerID}/>);
    })
    return jsxArray;
  };

  updateGrid() {
    this.setState(previous => ({

    }))
  }

  render() {
    return <View>{this.state.gridJsx}</View>
  }
}
