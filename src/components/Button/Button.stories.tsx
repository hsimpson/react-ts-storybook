import * as React from 'react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from './Button';

/*
addDecorator(withInfo);
const stories = storiesOf('Components/Button', module);

stories.add('withText', () => <Button text={'Hello Button'} onClick={action('onClick')} />);

stories.add('withEmoji', () => <Button text={'😎🐱🎈'} onClick={action('onClick')} />);
*/

export default {
  title: 'Components/Button',
  decorators: [withInfo],
  parameters: {
    info: { inline: true, source: false },
  },
};

export const contained = () => (
  <div>
    <Button text="Hello Button" type="contained" onClick={action('onClick')} />
    <Button text="😎🐱🎈" type="contained" onClick={action('onClick')} />
  </div>
);

export const outlined = () => (
  <div>
    <Button text="Hello Button" type="outlined" onClick={action('onClick')} />
    <Button text="😎🐱🎈" type="outlined" onClick={action('onClick')} />
  </div>
);
