import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import * as CSS from 'csstype';


export default {
  title: 'Components/Button',
  component: Button,
};

const containerStyle: CSS.Properties = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridRowGap: '10px',
  minWidth: 0,
  maxWidth: 0,
};

export const contained = () => (
  <div style={containerStyle}>
    <Button text="Hello Button" type="contained" onClick={action('onClick')} />
    <Button text="😎🐱🎈" type="contained" onClick={action('onClick')} />
  </div>
);

export const outlined = () => (
  <div style={containerStyle}>
    <Button text="Hello Button" type="outlined" onClick={action('onClick')} />
    <Button text="😎🐱🎈" type="outlined" onClick={action('onClick')} />
  </div>
);
