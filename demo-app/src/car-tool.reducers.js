import { combineReducers } from 'redux';
import {
  APPEND_CAR_ACTION, REPLACE_CAR_ACTION, DELETE_CAR_ACTION,
  CANCEL_CAR_ACTION, EDIT_CAR_ACTION,
  REFRESH_CARS_REQUEST_ACTION, REFRESH_CARS_DONE_ACTION,
} from './car-tool.actions';


// const carList = [
//   { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2018, color: 'silver', price: 30000 },
//   { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
// ];


const carsReducer = (state = [], action) => {

  if (action.type === REFRESH_CARS_DONE_ACTION) {
    return action.payload.cars;
  }

  return state;
};

const editCarIdReducer = (state = -1, action) => {

  if (action.type === EDIT_CAR_ACTION) {
    return action.payload.carId;
  }

  if (action.type.endsWith('Request') || action.type === CANCEL_CAR_ACTION) {
    return -1;
  }

  return state;
}

export const carToolReducer = combineReducers({
  cars: carsReducer,
  editCarId: editCarIdReducer,
});