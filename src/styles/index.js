// @flow

import createScale from './utils/createScale';

const breakpoint = [
  0,
  '40em', // 640
  '52em', // 832
  '64em', // 1024
];

const space = [
  0,
  4,
  8,
  16,
  24,
  32,
  48,
  64,
  96,
];

const type = [
  12,
  14,
  16,
  18,
  21,
  24,
  28,
  32,
  36,
  42,
  48,
  55,
  63,
  73,
  84,
  96,
  110,
  127,
];

const z = [
 0,
 100,
 200,
 300,
 400,
 500,
 600,
 700,
 800,
 900,
 1000,
];

export default {
  breakpoint: createScale(breakpoint),
  space: createScale(space),
  type: createScale(type, 2),
  z: createScale(z),
};
