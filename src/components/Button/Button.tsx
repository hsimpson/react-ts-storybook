import React from 'react';
import './Button.css';

export interface IButtonProp {
  text: string;
  onClick?: () => void;
}

const Button = (props: IButtonProp): React.ReactElement => {
  return (
    <button className={'Button'} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
