import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Card from './Card';

const stories = storiesOf('Components / Card', module);

stories.add(
  'withText',
  withInfo({ inline: true })(() => <Card text={'Card text'} />)
);
