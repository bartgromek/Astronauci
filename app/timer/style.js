/**
 * Created by Bartg1 on 04.10.2017.
 */

import { timerWidth, red, orange, green } from '../lib/globals'

export let timerStyle = (length) => {
  let color = 'black';
  if (length < 0.25 * timerWidth) color = red;
  else {
    if (length < 0.5 * timerWidth) color = orange;
    else color = green
  }
  return {
    height: 25,
    width: length,
    backgroundColor: color,
    marginTop: 30,
    margin: 10
  }
};
