import React from 'react';

import { useForm } from '../hooks/useForm';

export const ColorTool = (props) => {

  const [ colorForm, change ] = useForm({
    newColor: '',
    newHexCode: '',
  })

  return <>
    <header>
      <h1>Color Tool</h1>
    </header>
    <ul>
      {props.colors.map((color, index) => <li key={index}>{color}</li>)}
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
    </form>
  </>;

};
