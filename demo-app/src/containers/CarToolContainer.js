import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import {
  createCancelCarAction, createEditCarAction,
  refreshCars, appendCar, replaceCar, deleteCar
} from '../car-tool.actions';
import { CarTool } from '../components';


export const CarToolContainer = connect(
  ({ cars, editCarId }) => ({ cars, editCarId }),
  dispatch => bindActionCreators({
    onRefreshCars: refreshCars,
    onAddCar: appendCar,
    onSaveCar: replaceCar,
    onDeleteCar: deleteCar,
    onEditCar: createEditCarAction,
    onCancelCar: createCancelCarAction,
  }, dispatch),
)(CarTool);

