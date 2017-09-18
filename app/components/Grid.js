/* jshint esversion: 6 */
import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Square from './Square.js';

const BOUNDARIES = {
  topLatitude: 51.580456223295826,
  bottomLatitude: 51.4445655655249,
  leftLongitude: -0.33370971429690144,
  rightLongitude: 0.18402099859372356,
};

let dx = 0.4;
let dy = 0.4;

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

let fakeArray = [fakeCoordA, fakeCoordB, fakeCoordC];


export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      currentSquare: null,
    }
  }
  createGrid() {

  }
  updateGrid() {
    this.setState(previous => ({}))
  }


  render() {
    return (
      <Square coordinates={fakeArray} fillColor={"blue"}/>
    )
  }
}
