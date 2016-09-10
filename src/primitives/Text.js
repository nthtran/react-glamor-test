// @flow

import React from 'react';
import StyleSheet from './StyleSheet';
import createDOMElement from './createDOMElement';
import type { Props as DOMProps } from './createDOMElement';
import type { StyleObj } from './StyleSheetTypes';

const styles = StyleSheet.create({
  initial: {
    color: 'inherit',
    display: 'inline',
    font: 'inherit',
    margin: 0,
    padding: 0,
    textDecorationLine: 'none',
    wordWrap: 'break-word',
  },
  notSelectable: {
    userSelect: 'none',
  },
  singleLineStyle: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  fixFlexBugs: {
    // fix flexbox bugs
    minWidth: 0,
  },
});

type Props = DOMProps & {
  accessibilityRole?: 'heading' | 'link',
  numberOfLines?: number,
  selectable?: number,
  onPress?: Function,
  style?: StyleObj,
};

/* eslint react/prefer-stateless-function: 0 */
export default class Text extends React.Component {
  props: Props;

  render() {
    const {
      numberOfLines,
      selectable = true,
      onPress,
      style,
      ...otherProps,
    } = this.props;

    return createDOMElement('span', {
      ...otherProps,
      onClick: onPress,
      style: [
        styles.initial,
        styles.fixFlexBugs,
        style,
        !selectable && styles.notSelectable,
        numberOfLines === 1 && styles.singleLineStyle,
      ]
    });
  }
}
