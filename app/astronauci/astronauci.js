/**
 * Created by Bartg1 on 04.10.2017.
 */

import React, { Component } from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import TimerWrapper from '../timerWrapper/timerWrapper'
import Crater from '../crater/crater'
import { styles } from './style'
import { nameSet } from '../lib/functions'
import { alien, astronaut } from '../lib/globals'

export default class astronauci extends Component {
  constructor (props) {
    super(props);
    this.state = astronauci.initialState()
  }
  static initialState () {
    return { aliensKilled: 0, astronautsLost: 0, craters: null }
  }
  componentWillMount () {
    this.setState({ craters: this.cratersSet() })
  }
  restart = () => {
    this.refs.TimeWrapper.restart();
    this.setState(astronauci.initialState());
    this.setState({ craters: this.cratersSet() })
  };

  render () {
    return (
      <ScrollView>
        <TimerWrapper ref='TimeWrapper' onPress={this.restart} />
        <View style={styles.screen}>
          <View style={styles.container}>
            { this.state.craters }
          </View>
          <Text style={{fontWeight: 'bold'}}>
            Aliens killed: {this.state.aliensKilled} {'\n'}
            Astronauts lost: {this.state.astronautsLost}
          </Text>
          <View style={styles.button}>
            <Button color='white' title='RESPAWN' onPress={this.respawnTap} />
          </View>
        </View>
      </ScrollView>
    )
  }

  respawnTap = () => {
    this.setState({ craters: this.cratersSet() })
  };

  onTap = (character) => {
    const newState = Object.assign({}, this.state);
    if (character === alien) newState.aliensKilled += 1;
    if (character === astronaut) newState.astronautsLost += 1;
    this.setState(newState)
  };

  cratersSet = () => {
    let craters = nameSet();
    console.log("Yo", craters);
    let f = [];
    for (let i = 0; i < craters.length; i++) {
      let c = (<Crater key={i} offset={craters[i].offset} character={craters[i].character} onTap={this.onTap} />);
      f.push(c)
    }
    return f
  }
}
