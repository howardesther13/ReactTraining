import React from 'react';

import { carsPropType } from '../propTypes/car';
import { ViewCarRow } from './ViewCarRow';

export const CarTable = ({ cars, onDeleteCar }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(car =>
          <ViewCarRow key={car.id}
            car={car}
            onDeleteCar={onDeleteCar} />)}
      </tbody>
    </table>
  );
};

CarTable.defaultProps = {
  cars: [],
};

CarTable.propTypes = carsPropType;
