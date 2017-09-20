import React, { Component } from 'react';
import MapView from 'react-native-maps';


export default class JourneyLine extends Component {

  constructor(props) {
    super(props);
    this.state = {
      linePositions: props.linePositions,
      lineColour: props.lineColour
    };
  }

  componentWillUpdate(nextProps, nextState){
    nextState.linePositions = nextProps.linePositions
  }

  render() {
    return(
      <MapView.Polyline
      coordinates={this.state.linePositions}
      strokeColor={this.state.lineColour}
      strokeWidth={5}
      geodesic={true}
      lineCap="round"
      />
    );
  }
}
