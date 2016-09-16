// @flow

import { style, media, select } from 'glamor'
import mapValues from 'lodash/mapValues';
import flattenStyle from './flattenStyle';
import StyleRegistry from './StyleRegistry';
import type { StyleObj } from './StyleSheetTypes';

function createStyle(o: Object) {
  let _style = {}, _rules = [];
  Object.keys(o).forEach(key => {
    if(key.charAt(0) === ':' || key.charAt(0) === ' ') {
      _rules.push(select(key, o[key]));
    } else if(/^@media/.exec(key)) {
      _rules.push(media(key.substring(6), createStyle(o[key])));
    } else {
      _style[key] = o[key];
    }
  });

  return Object.assign(
    {},
    style(_style),
    ..._rules,
  );
}

// TODO: cache createStyle
function stylesToRule(styleList: Array<number | Object>) {
  return Object.assign(
    {},
    ...styleList.map(s => createStyle(
      typeof s === 'number'
        ? StyleRegistry.getByID(s)
        : s
    )),
  );
}

export type Styles = { [key: string]: Object };
export type StyleSheet<S: Styles> = { [key: $Keys<S>]: number };

export default {
  create<S: Styles>(obj: S): StyleSheet<S> {
    return mapValues(obj, (val: Object) =>
      StyleRegistry.register(val));
  },

  resolve: (props: { style: StyleObj }) =>
    stylesToRule(flattenStyle(props.style)),
};
