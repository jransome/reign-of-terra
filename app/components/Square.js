/* jshint esversion: 6 */
import React, { Component } from 'react';
import MapView from 'react-native-maps';


export default class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ownerID: null,
      color: props.fillColor,
      strokeColor: 'rgba(20,20,20,0.1)',
      strokeWidth: 0.2,
      namedCoords: props.coordinates,
      arrayCoords: [],
    };
    this.reformatCoords();
  }

  getOwner(owner, color) {
    this.setState(previous => {
      return {
        owner: owner,
        color: color,
      }
    });
  }

  reformatCoords() {
    this.state.arrayCoords = [
      this.state.namedCoords.bottomLeft,
      this.state.namedCoords.topLeft,
      this.state.namedCoords.topRight,
      this.state.namedCoords.bottomRight
    ];
  }

  render() {
    return (
      <MapView.Polygon coordinates={this.state.arrayCoords} fillColor={this.state.color} strokeColor={this.state.strokeColor} strokeWidth={this.state.strokeWidth}/>
    )
  }
}
