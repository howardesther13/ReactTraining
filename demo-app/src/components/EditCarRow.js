import React from 'react';

import { useForm } from '../hooks/useForm';

export const EditCarRow = ({ car }) => {

  const [ form, change ] = useForm({ ...car });

  return <tr>
    <td>{car.id}</td>
    <td><input type="text" name="make" value={form.make} onChange={change} /></td>
    <td><input type="text" name="model" value={form.model} onChange={change} /></td>
    <td><input type="number" name="year" value={form.year} onChange={change} /></td>
    <td><input type="text" name="color" value={form.color} onChange={change} /></td>
    <td><input type="number" name="price" value={form.price} onChange={change} /></td>
    <td>
      <button type="button"
        onClick={() => null}>Save</button>
      <button type="button"
        onClick={() => null}>Cancel</button>
    </td>
  </tr>
};