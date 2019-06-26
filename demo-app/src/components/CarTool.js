import React, { useState } from 'react';

import { useForm } from '../hooks/useForm';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

export const CarTool = (props) => {

  const [ carForm, change, carResetForm ] = useForm({
    make: '',
    model: '',
    year: 1900,
    color: '',
    price: 0,
  });

  const [ cars, setCars ] = useState(props.cars.concat());
  const [ editCarId, setEditCarId ] = useState(-1);

  const addCar = () => {
    setCars(cars.concat({
      ...carForm,
      id: Math.max(...cars.map(c => c.id), 0) + 1,
    }));

    carResetForm();
  };

  const deleteCar = carId => {
    setCars(cars.filter(c => c.id !== carId));
  };

  const editCar = carId => {
    setEditCarId(carId);
  };

  console.log(carForm);

  return <>
    <ToolHeader headerText="Car Tool" />
    <CarTable cars={cars} editCarId={editCarId} onDeleteCar={deleteCar} onEditCar={editCar} />
    <form>
      <div>
        <label htmlFor="make-input">Make</label>
        <input type="text" id="make-input" name="make"
               value={carForm.make} onChange={change} />
      </div>
      <div>
        <label htmlFor="model-input">Model</label>
        <input type="text" id="model-input" name="model"
               value={carForm.model} onChange={change} />
      </div>
      <div>
        <label htmlFor="year-input">Year</label>
        <input type="number" id="year-input" name="year"
               value={carForm.year} onChange={change} />
      </div>
      <div>
        <label htmlFor="color-input">Color</label>
        <input type="text" id="color-input" name="color"
               value={carForm.color} onChange={change} />
      </div>
      <div>
        <label htmlFor="price-input">Price</label>
        <input type="number" id="price-input" name="price"
               value={carForm.price} onChange={change} />
      </div>
      <button type="button" onClick={addCar}>
        Add Car
      </button>
    </form>
  </>;

};
