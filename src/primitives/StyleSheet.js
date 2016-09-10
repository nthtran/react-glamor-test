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

  return {
    ...style(_style),
    ..._rules.reduce((acc, rule) => ({
      ...acc,
      ...rule,
    }), {}),
  };
}

// TODO: cache create style

function stylesToRule(styleList: Array<number | Object>) {
  return styleList.reduce((acc, s) => ({
      ...acc,
      ...createStyle(
        typeof s === 'number'
          ? StyleRegistry.getByID(s)
          : s
      ),
  }), {});
}

export default class StyleSheet {
  static create(styles: { [key: string]: Object }): { [key: string]: number } {
    return mapValues(styles, (val: Object) => {
      return StyleRegistry.register(val);
    });
  }

  static resolve = ({ style: styleObj }: { style: StyleObj }) =>
    stylesToRule(flattenStyle(styleObj));
}
