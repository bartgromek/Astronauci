/**
 * Created by Bartg1 on 04.10.2017.
 */

import { StyleSheet } from 'react-native'
import { timerWidth } from '../lib/globals'

export const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    marginTop: 60,
    margin: 10
  },
  container: {
    height: 500,
    width: timerWidth,
    borderWidth: 2,
    borderColor: '#516300',
    padding: 10,
    marginTop: 5,
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    backgroundColor: '#0074b2',
    width: timerWidth
  }
});
