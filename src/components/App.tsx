import React from 'react';
import Button from './Button/Button';
import Card from './Card/Card';

const App = (): React.ReactElement => {
  const handleButtonClick = (): void => {
    console.log('button clicked');
  };

  return (
    <React.Fragment>
      <div>Hello World!</div>
      <Button text={'Click me!'} onClick={handleButtonClick}></Button>
      <Card text={'card content'}></Card>
    </React.Fragment>
  );
};

export default App;
