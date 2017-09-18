/* jshint esversion: 6 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';
import Square from 'components/Square.js';

const BOUNDARIES = {
  topLatitude: 51.580456223295826,
  bottomLatitude: 51.4445655655249,
  leftLongitude: -0.33370971429690144,
  rightLongitude: 0.18402099859372356,
};

let dx = 0.3;
let dy = 0.3;

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
    this.setState(previous => (

    ));
  }
  render() {
    // TODO: loop through list of squares and render each one
    return {

    }
  }
}
