import React from 'react';
import PropTypes from 'prop-types';

import { carsPropType } from '../propTypes/car';
import { ViewCarRow } from './ViewCarRow';
import { EditCarRow } from './EditCarRow';

export const CarTable = ({
  cars, editCarId,
  onDeleteCar: deleteCar, onEditCar: editCar,
  onSaveCar: saveCar, onCancelCar: cancelCar,
  onRefreshCars: refreshCars,
}) => {
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
          editCarId === car.id
            ? <EditCarRow key={car.id} car={car}
                onSaveCar={saveCar} onCancelCar={cancelCar} />
            : <ViewCarRow key={car.id} car={car}
                onDeleteCar={deleteCar} onEditCar={editCar} />)}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="6">
            <button type="button" onClick={refreshCars}>Refresh</button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

CarTable.defaultProps = {
  cars: [],
  editCarId: -1,
};

CarTable.propTypes = {
  cars: carsPropType,
  editCarId: PropTypes.number,
  onEditCar: PropTypes.func,
  onDeleteCar: PropTypes.func.isRequired,
  onSaveCar: PropTypes.func,
  onCancelCar: PropTypes.func,

};
