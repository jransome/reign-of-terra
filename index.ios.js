import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Switch
} from 'react-native';

import MapView from 'react-native-maps'

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.922;
const LONGITUDE_DELTA = (LATITUDE_DELTA * ASPECT_RATIO);

export default class reign_of_terra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
      startStop: true,
      startStopButtonColor: 'green',
      startStopButtonText: 'Start',
      linePositions:
      [  {latitude: 1, longitude: 1}, {latitude: 37, longitude: -122} ]

    };
  }
  watchID: ?number = null
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      this.setState({initialPosition: initialRegion});
      this.setState({markerPosition: initialRegion});
      this.setState({ linePositions:
      [  {latitude: lat, longitude: long}, {latitude: 37, longitude: -122} ] });
    },
    (error) => alert(JSON.stringify(error)),
    { enabledHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
    this.watchID = navigator.geolocation.watchPosition((position) => {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var lastRegion = {
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        };
        this.setState({initialPosition: lastRegion});
        this.setState({markerPosition: lastRegion});
        this.setState({ linePositions:
        [  {latitude: lat, longitude: long}, {latitude: 37, longitude: -122} ] });

     });
  };
  componentWillUnMount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onStartStopButtonPress = () => {
    if (this.state.startStop === true) {
      this.setState({ startStopButtonColor: 'red' });
      this.setState({ startStopButtonText: 'Stop' });
      this.setState({ startStop: false });
      this.setState({ linePositions:
      [  {latitude: 1, longitude: 1}, {latitude: 37, longitude: -122} ] });    }
   else {
     this.setState({ startStopButtonColor: 'green' });
     this.setState({ startStopButtonText: 'Start' });
     this.setState({ startStop: true });
     this.setState({ linePositions:
    [  {latitude: 1, longitude: 1}, {latitude: 37, longitude: -122} ]
  });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: SCREEN_WIDTH, height: 50, backgroundColor: 'powderblue', alignItems: "center", justifyContent: 'center'}}>
        <Text style={{fontSize: 30, color: "black"}}> Map App </Text>
        </View>
        <View style={{width: SCREEN_WIDTH, height: 50, backgroundColor: 'lightgreen', alignItems: "center", justifyContent: 'center'}}>
        <Button
          color={this.state.startStopButtonColor}
          onPress={this.onStartStopButtonPress}
          title={this.state.startStopButtonText}
        />
        </View>
        <MapView
          style={styles.map}
          region={this.state.initialPosition}>
          <MapView.Marker
          coordinate={this.state.markerPosition}>
            <View style={styles.radius}>
              <View style={styles.marker}>
              </View>
            </View>
          </MapView.Marker>

          <MapView.Polyline
          coordinates={this.state.linePositions}
          color="black"
          strokeWidth={10}
          />

        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  startButton: {
    top: 200,
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(0,112,255,0.3)',
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,112,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF',
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  map: {
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    position: 'absolute',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
AppRegistry.registerComponent('reign_of_terra', () => reign_of_terra);
