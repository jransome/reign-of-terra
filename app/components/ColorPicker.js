import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class ColorPicker extends Component {
   state = {color: ''}
   updateColor = (color) => {
      this.setState({ color: color })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Red" value = "red" />
               <Picker.Item label = "Blue" value = "blue" />
               <Picker.Item label = "Green" value = "green" />
            </Picker>
            <Text style = {styles.text}>{this.state.color}</Text>
         </View>
      )
   }
}
export default ColorPicker

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'grey'
   }
})
