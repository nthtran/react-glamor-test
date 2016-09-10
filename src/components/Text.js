// @flow

import React from 'react';
import PrimitiveText from '../primitives/Text';
import StyleSheet from '../primitives/StyleSheet';
import type { StyleObj } from '../primitives/StyleSheetTypes';

const styles = StyleSheet.create({
  text: {
    color: 'hotpink',
  },
});

type Props = {
  style?: StyleObj,
};

const Text = ({
  style,
  ...otherProps
}: Props) =>
  <PrimitiveText
    {...otherProps}
    style={[
      styles.text,
      style,
    ]}
  />;

export default Text;
