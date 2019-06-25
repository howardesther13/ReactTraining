import React, { useState } from 'react';

import { useForm } from '../hooks/useForm';

import { ToolHeader } from './ToolHeader';

export const ColorTool = (props) => {

  const [ colorForm, change, resetColorForm ] = useForm({
    newColor: '',
    newHexCode: '',
  })

  const [ colors, setColors ] = useState(props.colors.concat());

  const addColor = () => {
    setColors(colors.concat(colorForm.newColor));
  };

  return <>
    <ToolHeader headerText="Color Tool" />
    <ul>
      {colors.map((color, index) => <li key={index}>{color}</li>)}
    </ul>
    <form>
      <div>
        <label htmlFor="new-color-input">New Color:</label>
        <input type="text" id="new-color-input" name="newColor" value={colorForm.newColor} onChange={change} />
      </div>
      <div>
        <label htmlFor="new-hexcode-input">New HexCode:</label>
        <input type="text" id="new-hexcode-input" name="newHexCode" value={colorForm.newHexCode} onChange={change} />
      </div>
      <button type="button" onClick={addColor}>Add Color</button>
    </form>
  </>;

};
