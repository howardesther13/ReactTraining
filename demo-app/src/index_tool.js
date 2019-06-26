import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';

const colorList = [
  'purple', 'blue', 'green', 'red',
  'pink', 'orange', 'black', 'yellow',
];

const carList = [
  { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'silver', price: 30000 },
  { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
]

ReactDOM.render(
  <>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </>,
  document.querySelector('#root'),
);

