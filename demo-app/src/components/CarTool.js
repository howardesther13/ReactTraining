import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars, editCarId,
  onAddCar: addCar,
  onSaveCar: replaceCar,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onCancelCar: cancelCar,
}) => {

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable cars={cars} editCarId={editCarId}
      onDeleteCar={deleteCar} onEditCar={editCar}
      onSaveCar={replaceCar} onCancelCar={cancelCar} />
    <CarForm onSubmitCar={addCar} buttonText="Add Car" /> 
  </>;

};
