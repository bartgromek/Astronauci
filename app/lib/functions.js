/**
 * Created by Bartg1 on 04.10.2017.
 */

import { alien, astronaut } from './globals'

export let randomElementOf = (items) => {
  return items[Math.floor(Math.random() * items.length)]
};

export let randomIntegerBetween = (min, max) => {
  return Math.random() * (max - min) + min
};

export let randomCrater = () => {
  return {
    offset: randomIntegerBetween(0, 200),
    character: randomElementOf([alien, astronaut, 'none'])
  }
};

export let nameSet = () => {
  let a = randomCrater();
  return [randomCrater(), randomCrater(), randomCrater(), randomCrater()]
};
