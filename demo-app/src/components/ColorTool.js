import React from 'react';

export const ColorTool = () => {

  const colors = [
    'purple', 'blue', 'green', 'red',
    'pink', 'orange', 'black', 'yellow',
  ];

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {colors.map((color, index) => <li key={index}>{color}</li>)}
    </ul>
  </>;

};
