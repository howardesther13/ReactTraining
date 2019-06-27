import { createStore } from 'redux';
import { carToolReducer } from './car-tool.reducers';

export const carToolStore = createStore(carToolReducer);