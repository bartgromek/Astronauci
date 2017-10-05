/**
 * Created by Bartg1 on 04.10.2017.
 */
import React, { Component }  from 'react'
import { View } from 'react-native'
import { roundTime } from '../lib/globals'
import Timer from '../timer/timer'

export default class TimerWrapper extends Component {
  constructor (props) {
    super(props);
    this.state = TimerWrapper.initialState()
  }
  static initialState () {
    return { time: null, period: null}
  }
  componentWillMount () {
    this.startTimer(roundTime)
  }
  restart = () => {
    clearInterval(this.state.period);
    this.setState(TimerWrapper.initialState());
    this.startTimer(roundTime)
  };
  startTimer (time) {
    clearInterval(this.state.period);
    let _this = this;
    let pr = setInterval(function () {
      let _time = _this.state.time - 0.05;
      if (_time <= 0) {
        clearInterval(_this.state.period)
      }
      _this.setState({time: _time})
    }, 50);
    return this.setState({time: time, period: pr})
  }

  render () {
    return (
      <View>
        <Timer time={this.state.time} onPress={this.props.onPress} />
      </View>
    )
  }
}