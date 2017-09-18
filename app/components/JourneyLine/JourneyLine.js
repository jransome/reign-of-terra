import React, { Component } from 'react';

import MapView from 'react-native-maps'

export default class JourneyLine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      linePositions: props.linePositions
    };
  }

  render() {
    return(
      <MapView.Polyline
      coordinates={this.state.linePositions}
      color="black"
      strokeWidth={10}
      geodesic={true}
      linecap="round"
      />
    );
  }
}
