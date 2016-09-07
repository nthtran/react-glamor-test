// @flow

import createScale from './utils/createScale';
import breakpoint from './breakpoint';
import space from './space';
import type from './type';
import z from './z';

export default {
  breakpoint: createScale(breakpoint),
  space: createScale(space),
  type: createScale(type, 2),
  z: createScale(z),
};
