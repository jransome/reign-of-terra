/* jshint esversion: 6 */
import React, { Component } from 'react';
import MapView from 'react-native-maps';

export default class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      owner: null,
      color: 'rgba(120,50,200,0.3)',
      strokeColor: 'rgba(20,20,20,0.2)',
      coords: props.coordinates,
    };
  }

  getOwner(owner, color) {
    this.setState(previous => {
      return {
        owner: owner,
        color: color,
      }
    });
  }

  render() {
    return (
      <MapView.Polygon coordinates={this.props.coordinates} fillColor={this.state.color} strokeColor={this.state.strokeColor}/>
    )
  }
}
