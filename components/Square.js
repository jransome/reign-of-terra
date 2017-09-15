/* jshint esversion: 6 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button
} from 'react-native';

export default class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      owner: null,
      color: '#f4a742',
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
    return {
      <MapView.Polygon coordinates={this.props.coords} fillColor={this.state.color}/>
    };
  }
}
