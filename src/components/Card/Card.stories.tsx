import * as React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};


export const withText = () => <Card text="Card text" />;
