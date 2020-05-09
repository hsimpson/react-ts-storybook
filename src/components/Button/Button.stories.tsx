import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from './Button';

const stories = storiesOf('Components / Button', module);

stories.add(
  'withText',
  withInfo({ inline: true })(() => <Button text={'Hello Button'} onClick={action('onClick')} />)
);

stories.add(
  'withEmoji',
  withInfo({ inline: true })(() => <Button text={'😎🐱🎈'} onClick={action('onClick')} />)
);
