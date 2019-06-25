import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../hooks/useForm';

export const ColorForm = (props) => {

  const { buttonText, onSubmitColor } = props;

  const [ colorForm, change, resetColorForm ] = useForm({
    newColor: '',
    newHexCode: '',
  });

  const submitColor = () => {

    onSubmitColor(colorForm.newColor);

    resetColorForm();
  };

  return <form>
    <div>
      <label htmlFor="new-color-input">New Color:</label>
      <input type="text" id="new-color-input" name="newColor"
        value={colorForm.newColor} onChange={change} />
    </div>
    <div>
      <label htmlFor="new-hexcode-input">New HexCode:</label>
      <input type="text" id="new-hexcode-input" name="newHexCode"
        value={colorForm.newHexCode} onChange={change} />
    </div>
    <button type="button" onClick={submitColor}>{buttonText}</button>
  </form>;

};

ColorForm.defaultProps = {
  buttonText: 'Submit Color',
};

ColorForm.propTypes = {
  buttonText: PropTypes.string,
  onSubmitColor: PropTypes.func.isRequired,
};