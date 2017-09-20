import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class ColorPicker extends Component {
   state = {
     color: '',
     style: {
        fontSize: 50,
        alignSelf: 'center',
        color: "red"
     }
   }
   updateColor = (color) => {
      this.setState({ color: color })
      var newStyle = {
         fontSize: 50,
         alignSelf: 'center',
         color: color
      }
      this.setState({style: newStyle })
   }
   render() {
      return (
         <View>
         <Picker selectedValue = {this.state.color} onValueChange = {this.updateColor}>
           <Picker.Item color="red" label = "Red" value = "red" />
           <Picker.Item color="blue" label = "Blue" value = "blue" />
           <Picker.Item color="green" label = "Green" value = "green" />
           <Picker.Item color="yellow" label = "Yellow" value = "yellow" />
           <Picker.Item color="pink" label = "Pink" value = "pink" />
           <Picker.Item color="orange" label = "Orange" value = "orange" />
         </Picker>
         <Text style = {this.state.style}>{this.state.color}</Text>
         </View>
      )
   }
}
export default ColorPicker
