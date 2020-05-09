import React from 'react';
import './Card.css';

export interface ICardProp {
  text: string;
}

const Card = (props: ICardProp): React.ReactElement => {
  return (
    <div className={'Card'}>
      <span>{props.text}</span>
    </div>
  );
};

export default Card;
