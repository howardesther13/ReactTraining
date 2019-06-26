import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export const CarTool = (props) => {

  const [ cars, setCars ] = useState(props.cars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = (car) => {
    setCars(cars.concat({
      ...car,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));
    setEditCarId(-1);
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
    setEditCarId(-1);
  };

  const replaceCar = car => {
    const newCars = cars.concat();
    newCars[newCars.findIndex(c => c.id === car.id)] = car;
    setCars(newCars);
    setEditCarId(-1);
  }

  const editCar = carId => {
    setEditCarId(carId);
  };

  const cancelCar = () => {
    setEditCarId(-1);
  };

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable cars={cars} editCarId={editCarId}
      onDeleteCar={deleteCar} onEditCar={editCar}
      onSaveCar={replaceCar} onCancelCar={cancelCar} />
    <CarForm onSubmitCar={addCar} buttonText="Add Car" /> 
  </>;

};
