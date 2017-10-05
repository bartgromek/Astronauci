/**
 * Created by Bartg1 on 04.10.2017.
 */
import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { timerWidth, roundTime } from '../lib/globals'
import { timerStyle } from './style'

export default class Timer extends Component {
  render () {
    let timeRatio = (this.props.time / roundTime);
    let timerLenght = timerWidth * timeRatio;
    if (this.props.time < 0) {
      Alert.alert(
        'Time out!',
        'Not bad, bro',
        [
          {text: 'Restart', onPress: this.props.onPress}
        ]
      );
      return null
    }
    return (
      <View style={timerStyle(timerLenght)} />
    )
  }
}
