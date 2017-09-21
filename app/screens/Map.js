'use strict'
import * as constants from '../Constants'
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
import JourneyLine from '../components/JourneyLine'
import Grid from '../components/Grid'

const {width, height} = Dimensions.get('window');
const SCREEN_HEIGHT = height;
const SCREEN_WIDTH = width;
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.922;
const LONGITUDE_DELTA = (LATITUDE_DELTA * ASPECT_RATIO);
const BUTTON_HEIGHT = 165;
const POSITION_OPTS = {
  enabledHighAccuracy: true,
  timeout: 20000,
  maximumAge: 1000
}

class Map extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPosition: {
        latitude: 51.5074,
        longitude: 0.1278,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      },
      startStop: false,
      startStopButtonStyle: {width: SCREEN_WIDTH, flex:0.1, backgroundColor: 'green', alignItems: "center", justifyContent: 'center'},
      startStopButtonText: 'Start',
      territoriesArray: [],
      linePositions: [],
      userColor: "white",
      username: "",
      userEmail: "loading...",
      allJournies: []
    };
    this.dbJourneyRef = constants.firebaseApp.database().ref().child('journies');
    this.setupDatabaseJourniesListener();
    this.dbRef = this.getRef().child('territories');
  }

  getRef() {
    return constants.firebaseApp.database().ref();
  }

  updateColorData(territoryId, color) {
    // this updates the database and reloads all the data
    constants.firebaseApp.database().ref('territories/' + territoryId).update({
      color: color
    });
    this.getData(this.dbRef);
  }

  getUserData(){
    var self = this;
    var email = constants.firebaseApp.auth().currentUser.email;
    this.setState({ userEmail: email });
    constants.firebaseApp.database().ref().child("users").on('value', (snap) => {
      snap.forEach( (child) => {
        if (child.val().email === email) {
          self.setState({ userColor: child.val().color });
          self.setState({ username: child.val().username });
          return;
        }
      });
    });
  }

  saveJourneyLine(dbRef){
    if (this.state.linePositions.length > 0) {
      var newJourney = {
        coordinates: this.state.linePositions,
        ownerID: 0,
        colour: 'blue',
      }
      dbRef.push(newJourney);
      this.resetJourney()
    } else {
      alert("No journey was saved!")
    }
  };

  resetJourney(){
    this.state.linePositions = [];
  }

  setupDatabaseJourniesListener(){
    var self = this;
    var refreshJournies = function(data) {
      var val = data.val();
      console.log(val);
      self.state.allJournies.push( <JourneyLine linePositions={val.coordinates} lineColour={val.colour}/>);
    };
    this.dbJourneyRef.on('child_added', refreshJournies);
  }

  getData(dbRef){
    var self = this;
    dbRef.on ('value', (snap) => {
      let territories = []
      snap.forEach( (child) => {
        var color = child.val().color;
        var coordinates = child.val().coordinates;
        territories.push(  <MapView.Polygon coordinates={coordinates} fillColor={color}/> );
      });
      self.setState({
        territoriesArray: territories
      });
    });
  }

  addRoute(dbRef){
    dbRef.push(this.linePositions);
    var position = [{"latitude": this.state.currentPosition.latitude, "longitude": this.state.currentPosition.longitude}];
    this.setState({
      linePositions: position
    });
  };

  watchID: ?number = null

  userEmail() {
    return constants.firebaseApp.auth().currentUser.email
  }

  componentDidMount() {
    this.getUserData()

    this.getData(this.dbRef);
    var self = this;

    function error(err) {
      alert('ERROR(' + err.code + '): ' + err.message);
    };

    function updatePosition(position){
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      var region = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      self.setState({currentPosition: region});
      self.setState({markerPosition: region});
      if(self.state.startStop){
        logNewPosition(lat, long);
      }
    }

    function logNewPosition(lat, long){
      var newPosition = { latitude: lat, longitude: long }
      var newPositions = self.state.linePositions.concat(newPosition);
      self.setState({ linePositions: newPositions })
      console.log(self.state.linePositions)
    }

    navigator.geolocation.getCurrentPosition(updatePosition, error, POSITION_OPTS);
    this.watchID = navigator.geolocation.watchPosition(updatePosition, error, POSITION_OPTS);
  };


  componentWillUnMount() {
    console.log("unmount")
    navigator.geolocation.clearWatch(this.watchID);
  }

  setStartStopButtonToStop() {
    this.setState({ startStopButtonStyle: {width: SCREEN_WIDTH, flex: 0.1, backgroundColor: '#860f91', alignItems: "center", justifyContent: 'center'} });
    this.setState({ startStopButtonText: 'Stop' });
  }

  setStartStopButtonToStart() {
    this.setState({ startStopButtonStyle: {width: SCREEN_WIDTH, flex: 0.1, backgroundColor: '#2fb75d', alignItems: "center", justifyContent: 'center'} });
    this.setState({ startStopButtonText: 'Start' });
  }

  onStartStopButtonPress = () => {
    // this.logNewPosition(51 + Math.random() * 10, Math.random() * 10)
    if (this.state.startStop === true) {
      this.setStartStopButtonToStart();
      this.setState({ startStop: false });
      this.saveJourneyLine(this.dbJourneyRef);
    }
    else {
      this.setState({ startStop: true });
      this.setStartStopButtonToStop();
      this.updateColorData("1", "red");
    }
  }




  render() {

    const mapOptions = {
      scrollEnabled: true,
    };

    if (this.state.editing) {
      mapOptions.scrollEnabled = false;
      mapOptions.onPanDrag = e => this.onPress(e);
    }
    return (
      <View style={styles.container}>
        <View style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: this.state.userColor,
          width: SCREEN_WIDTH,
          flex: 0.1
        }}>
        <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}> {this.state.username}'s Empire </Text>
        </View>

        <MapView
          style={styles.map}
          initialRegion={this.state.currentPosition}
          zoomEnabled={true}
          maxZoomLevel={20}
          minZoomLevel={8}
          showsMyLocationButton={true}
          showsUserLocation={true}>
          <MapView.Marker
          coordinate={this.state.markerPosition}>
            <View style={styles.radius}>
              <View style={styles.marker}>
              </View>
            </View>
          </MapView.Marker>

          <Grid/>
          <JourneyLine linePositions={this.state.linePositions}/>
          { this.state.territoriesArray }
          { this.state.allJournies }

        </MapView>

        <View style={this.state.startStopButtonStyle}>
          <TouchableOpacity onPress={this.onStartStopButtonPress}>
            <Text style={{fontSize: 30, color: "white"}}> {this.state.startStopButtonText} </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
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
    width: SCREEN_WIDTH,
    flex: 0.8
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Map;
