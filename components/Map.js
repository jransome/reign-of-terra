import React, { Component } from 'react';
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

import MapView from 'react-native-maps'

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.922;
const LONGITUDE_DELTA = (LATITUDE_DELTA * ASPECT_RATIO);

class Map extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  constructor(props) {
    super(props);
    this.navigate = this.navigate.bind(this)
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
      startStop: false,
      startStopButtonStyle: {width: SCREEN_WIDTH, bottom: 0, top: SCREEN_HEIGHT-165, backgroundColor: 'green', alignItems: "center", justifyContent: 'center'},
      startStopButtonText: 'Start',
      linePositions:
      [  {latitude: 52, longitude: 1}, {latitude: 37, longitude: -121} ]
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

        // alert("Tracking")
        if (this.state.startStop === true) {
          alert("Tracking")
          var newPosition = { latitude: lat + 10, longitude: long +10 }
          var newPositions = this.state.linePositions.concat(newPosition);
          this.setState({ linePositions: newPositions })
        }

     });
  };
  componentWillUnMount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onStartStopButtonPress = () => {
    if (this.state.startStop === true) {

      this.setState({ startStopButtonStyle: {width: SCREEN_WIDTH, bottom: 0, top: SCREEN_HEIGHT-165, height: 100, backgroundColor: 'green', alignItems: "center", justifyContent: 'center'} });
      this.setState({ startStopButtonText: 'Start' });
      this.setState({ startStop: false });
      //stop drawing line
      // this.setState({ linePositions: [] });
      var currentPosition = this.state.initialPosition;
      var newPosition = {
        latitude: currentPosition.latitude - Math.random() * 10,
        longitude: currentPosition.longitude + Math.random() * 10
      }
      var test = this.state.linePositions.concat(newPosition)
      console.log(test)

      this.setState({ linePositions: test });
    }
    else {
     this.setState({ startStopButtonStyle: {width: SCREEN_WIDTH, bottom: 0, top: SCREEN_HEIGHT-165, height: 100, backgroundColor: 'red', alignItems: "center", justifyContent: 'center'} });
     this.setState({ startStopButtonText: 'Stop' });
     this.setState({ startStop: true });

     // start position
     var currentPosition = this.state.initialPosition;
     var newPosition = {
       latitude: currentPosition.latitude + Math.random(),
       longitude: currentPosition.longitude + Math.random()
     }
     var test = this.state.linePositions.concat(newPosition)
     console.log(test)
     this.setState({ linePositions: test });
    }
  }

  navigate(name) {
    this.props.navigator.push({
      name
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.initialPosition}
          zoomEnabled={true}
          minZoomLevel={5}
          maxZoomLevel={20}
          showsMyLocationButton={true}
          showsUserLocation={true}>
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

        <View style={this.state.startStopButtonStyle}>
          <TouchableOpacity onPress={this.onStartStopButtonPress}>
            <Text style={{fontSize: 85, color: "white"}}> {this.state.startStopButtonText} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  startStopButton: {
    height: 215,
    width: SCREEN_WIDTH,
    borderWidth: 1,
    borderColor: 'rgba(0,112,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
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
    flexDirection: 'column',
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
    top: 0,
    bottom: 100,
    position: 'absolute',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Map;
