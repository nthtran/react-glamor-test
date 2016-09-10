// @flow

import React from 'react';
import StyleSheet from './StyleSheet';
import createDOMElement from './createDOMElement';
import type { Props as DOMProps } from './createDOMElement';
import type { StyleObj } from './StyleSheetTypes';

const styles = StyleSheet.create({
  // https://github.com/facebook/css-layout#default-values
  // https://github.com/facebook/css-layout#default-values
  initial: {
    alignItems: 'stretch',
    borderWidth: 0,
    borderStyle: 'solid',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    position: 'relative',
    // button and anchor reset
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    textAlign: 'inherit',
    textDecorationLine: 'none',
    // list reset
    listStyle: 'none',
    // fix flexbox bugs
    minHeight: 0,
    minWidth: 0,
  },
  flexReset: {
    flexShrink: 0,
  },
  momentumScrolling: {
    WebkitOverflowScrolling: 'touch',
  },
});

const pointerEventStyles = StyleSheet.create({
  auto: {
    pointerEvents: 'auto',
  },
  'box-none': {
    pointerEvents: 'none',

    ' *': {
      pointerEvents: 'all',
    },
  },
  'box-only': {
    pointerEvents: 'all',

    ' *': {
      pointerEvents: 'none',
    },
  },
  none: {
    pointerEvents: 'none',
  },
});

type Props = DOMProps & {
  pointerEvents?: 'auto' | 'box-none' | 'box-only' | 'none',
  style?: StyleObj,
};

/* eslint react/prefer-stateless-function: 0 */
export default class View extends React.Component {
  props: Props;

  render() {
    const {
      pointerEvents,
      style,
      ...otherProps,
    } = this.props;

    return createDOMElement('div', {
      ...otherProps,
      style: [
        styles.initial,
        styles.flexReset,
        styles.momentumScrolling,
        style,
        pointerEvents && pointerEventStyles[pointerEvents],
      ],
    });
  }
}
