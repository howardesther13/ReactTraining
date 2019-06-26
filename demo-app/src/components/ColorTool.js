import React, { useState } from 'react';


import { ToolHeader } from './ToolHeader';
import { ColorForm } from './ColorForm';

export const ColorTool = (props) => {

  const [ colors, setColors ] = useState(props.colors.concat());

  const addColor = (color) => {
    setColors(colors.concat(color));
  };

  return <>
    <ToolHeader headerText="Color Tool" />
    <ul>
      {colors.map((color, index) => <li key={index}>{color}</li>)}
    </ul>
    <ColorForm buttonText="Add Color" onSubmitColor={addColor} />
  </>;

};
