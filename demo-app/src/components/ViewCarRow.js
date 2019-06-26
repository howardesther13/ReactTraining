import React from 'react';
import PropTypes from 'prop-types';

import { carPropType } from '../propTypes/car';

export const ViewCarRow = ({ car, onEditCar: editCar, onDeleteCar: deleteCar }) => {

  return <tr>
    <td>{car.id}</td>
    <td>{car.make}</td>
    <td>{car.model}</td>
    <td>{car.year}</td>
    <td>{car.color}</td>
    <td>{car.price}</td>
    <td>
      {editCar && <button type="button"
        onClick={() => editCar(car.id)}>Edit</button>}
      <button type="button"
        onClick={() => deleteCar(car.id)}>Delete</button>
    </td>
  </tr>;
};

ViewCarRow.propTypes = {
  car: carPropType,
  onEditCar: PropTypes.func.isRequired,
  onDeleteCar: PropTypes.func.isRequired,
};
