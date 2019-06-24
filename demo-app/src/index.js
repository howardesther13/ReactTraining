import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  'purple', 'blue', 'green', 'red',
  'pink', 'orange', 'black', 'yellow',
];

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool />
  </>,
  document.querySelector('#root'),
);

