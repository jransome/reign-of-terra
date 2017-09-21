/* jshint esversion: 6 */
import * as constants from '../Constants'
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Square from './Square.js';
import lineIntersect from 'line-intersect';

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
      b: false,
      preExistingJourniesCalculated: false,
      allJournies: props.allJournies,
      grid: [],
      gridJsx: [],
      currentSquare: null,
    }
    this.dbGridRef = constants.firebaseApp.database().ref().child('grid_test');
    // this.setupDatabaseListener();
    this.initialiseGrid();
    this.checkJourneyIntersections();
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

  componentDidUpdate(){
    console.log(this.state.allJournies.length > 0)
    if(!this.state.preExistingJourniesCalculated && this.state.allJournies.length > 0){
      this.checkJourneyIntersections();
      this.state.preExistingJourniesCalculated = true;
    }
  }

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

  checkJourneyIntersections(){
    var self = this;
    this.state.allJournies.forEach(function(journey){ // For each journey
      var journeyLines = getLinesFromCoords(journey.props.linePositions);
      journeyLines.forEach(function(line){ // For each line within that journey

        // var gridSample = self.state.grid.slice(0,2);
        self.state.grid.forEach(function(square){ // For each square cell
          var squareCorners = enumerateCoords(square.coordinates);
          var borders = getLinesFromCoords(squareCorners);

          borders.forEach(function(border){ // For each square border
            var result = lineIntersect.checkIntersection(
              border[0].longitude, border[0].latitude,
              border[1].longitude, border[1].latitude,
              line[0].longitude, line[0].latitude,
              line[1].longitude, line[1].latitude
            );
            console.log(result.type)
            if (result.type === 'intersecting'){
              square.colour = 'rgba(200, 200, 100, 0.8)';
              square.ownerID = 1;
              console.log(square)
            }

          })

        })

      });

    });
    this.state.b = true;
    this.state.gridJsx = this.generateGridJsx(this.state.grid);

    function getLinesFromCoords(coords){
      var lines = [];
      for (var i = 0; i < coords.length; i++) {
        if(coords[i+1] !== undefined){
          lines.push([coords[i], coords[i+1]])
        }
      }
      return lines;
    }

    function enumerateCoords(coords) {
      return [
        coords.bottomLeft,
        coords.topLeft,
        coords.topRight,
        coords.bottomRight
      ];
    }

    // var line1 = {
    //   start: {x: 0, y: 3},
    //   end: {x: 3, y: 3}
    // }
    // var line2 = {
    //   start: {x: 1, y: 0},
    //   end: {x: 1, y: 2}
    // }
    //
    // var result = lineIntersect.checkIntersection(
    //   line1.start.x, line1.start.y, line1.end.x, line1.end.y,
    //   line2.start.x, line2.start.y, line2.end.x, line2.end.y
    // );
    //
    // console.log(result.type)  // any of none, parallel, colinear, intersecting
    // console.log(result.point) // only exists when result.type == 'intersecting'

  }





  render() {
    if(this.state.b){
      console.log(this.state.gridJsx)
    }
    return <View>{this.state.gridJsx}</View>
  }
}
