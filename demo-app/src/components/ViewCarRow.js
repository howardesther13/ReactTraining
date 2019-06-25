import React from 'react';

import { carPropType } from '../propTypes/car';

export const ViewCarRow = ({ car }) => {
  return <tr>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
  </tr>;
};

ViewCarRow.propTypes = {
  car: carPropType,
};
