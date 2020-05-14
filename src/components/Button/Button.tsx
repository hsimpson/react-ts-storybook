import React from 'react';
import './Button.css';

export interface IButtonProp {
  /**
   * The button text
   */
  text: string;
  /**
   * Click handler callback
   */
  onClick?: () => void;
  /**
   * The type
   * @default contained
   */
  type?: 'contained' | 'outlined';
}

const Button = (props: IButtonProp): React.ReactElement => {
  const type = props.type || 'contained';
  const classes = ['Button', type].join(' ');
  return (
    <button className={classes} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
