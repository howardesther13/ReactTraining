import React, { useEffect } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = ({
  cars, editCarId,
  onRefreshCars: refreshCars,
  onAddCar: addCar,
  onSaveCar: replaceCar,
  onDeleteCar: deleteCar,
  onEditCar: editCar,
  onCancelCar: cancelCar,
}) => {

  useEffect(() => {

    refreshCars();

  }, []);

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable cars={cars} editCarId={editCarId}
      onDeleteCar={deleteCar} onEditCar={editCar}
      onSaveCar={replaceCar} onCancelCar={cancelCar}
      onRefreshCars={refreshCars} />
    <CarForm onSubmitCar={addCar} buttonText="Add Car" /> 
  </>;

};
