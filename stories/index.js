import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text } from '@kadira/storybook-addon-knobs';
import Text from '../src/components/Text';

storiesOf('Text', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Text onPress={action('clicked')}>{text('Text',  'Hello Text')}</Text>
  ))
  .add('with some emoji', () => (
    <Text onPress={action('clicked')}>😀 😎 👍 💯</Text>
  ));
