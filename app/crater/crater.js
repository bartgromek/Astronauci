/**
 * Created by Bartg1 on 04.10.2017.
 */
import React, { Component } from 'react'
import { craterStyle } from './style'
import { Image, TouchableOpacity } from 'react-native'

export default class Crater extends Component {
  constructor (props) {
    super(props);
    this.state = { status: true, character: null, offset: null }
  }

  toggleStatus () {
    this.setState({
      status: !this.state.status
    })
  }

  componentWillReceiveProps () {
    this.setState({
      status: true
    })
  }

  onTap = (character) => {
    if (character !== 'none') this.toggleStatus();
    this.props.onTap(character)
  };

  render () {
    let character = this.props.character;
    let offset = this.props.offset;
    let img = null;
    if (character !== 'none') img = (<Image style={{width: 60, height: 100}} source={character} />);
    if (this.state.status) {
      return (
        <TouchableOpacity style={craterStyle(offset)} onPress={() => this.onTap(character)}>
          {img}
        </TouchableOpacity>
      )
    } else return null
  }
}
